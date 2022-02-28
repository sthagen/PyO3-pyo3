use crate::{
    attributes::{self, get_pyo3_options, CrateAttribute, FromPyWithAttribute},
    utils::get_pyo3_crate,
};
use proc_macro2::TokenStream;
use quote::quote;
use syn::{
    parenthesized,
    parse::{Parse, ParseStream},
    parse_quote,
    punctuated::Punctuated,
    spanned::Spanned,
    Attribute, DataEnum, DeriveInput, Fields, Ident, LitStr, Result, Token,
};

/// Describes derivation input of an enum.
#[derive(Debug)]
struct Enum<'a> {
    enum_ident: &'a Ident,
    variants: Vec<Container<'a>>,
}

impl<'a> Enum<'a> {
    /// Construct a new enum representation.
    ///
    /// `data_enum` is the `syn` representation of the input enum, `ident` is the
    /// `Identifier` of the enum.
    fn new(data_enum: &'a DataEnum, ident: &'a Ident) -> Result<Self> {
        ensure_spanned!(
            !data_enum.variants.is_empty(),
            ident.span() => "cannot derive FromPyObject for empty enum"
        );
        let variants = data_enum
            .variants
            .iter()
            .map(|variant| {
                let attrs = ContainerOptions::from_attrs(&variant.attrs)?;
                let var_ident = &variant.ident;
                Container::new(
                    &variant.fields,
                    parse_quote!(#ident::#var_ident),
                    attrs,
                    true,
                )
            })
            .collect::<Result<Vec<_>>>()?;

        Ok(Enum {
            enum_ident: ident,
            variants,
        })
    }

    /// Build derivation body for enums.
    fn build(&self) -> TokenStream {
        let mut var_extracts = Vec::new();
        let mut variant_names = Vec::new();
        let mut error_names = Vec::new();
        for var in &self.variants {
            let struct_derive = var.build();
            let ext = quote!({
                let maybe_ret = || -> _pyo3::PyResult<Self> {
                    #struct_derive
                }();

                match maybe_ret {
                    ok @ ::std::result::Result::Ok(_) => return ok,
                    ::std::result::Result::Err(err) => err
                }
            });

            var_extracts.push(ext);
            variant_names.push(var.path.segments.last().unwrap().ident.to_string());
            error_names.push(&var.err_name);
        }
        let ty_name = self.enum_ident.to_string();
        quote!(
            let errors = [
                #(#var_extracts),*
            ];
            ::std::result::Result::Err(
                _pyo3::impl_::frompyobject::failed_to_extract_enum(
                    obj.py(),
                    #ty_name,
                    &[#(#variant_names),*],
                    &[#(#error_names),*],
                    &errors
                )
            )
        )
    }
}

/// Container Style
///
/// Covers Structs, Tuplestructs and corresponding Newtypes.
#[derive(Debug)]
enum ContainerType<'a> {
    /// Struct Container, e.g. `struct Foo { a: String }`
    ///
    /// Variant contains the list of field identifiers and the corresponding extraction call.
    Struct(Vec<(&'a Ident, FieldPyO3Attributes)>),
    /// Newtype struct container, e.g. `#[transparent] struct Foo { a: String }`
    ///
    /// The field specified by the identifier is extracted directly from the object.
    StructNewtype(&'a Ident),
    /// Tuple struct, e.g. `struct Foo(String)`.
    ///
    /// Variant contains a list of conversion methods for each of the fields that are directly
    ///  extracted from the tuple.
    Tuple(Vec<FieldPyO3Attributes>),
    /// Tuple newtype, e.g. `#[transparent] struct Foo(String)`
    ///
    /// The wrapped field is directly extracted from the object.
    TupleNewtype,
}

/// Data container
///
/// Either describes a struct or an enum variant.
#[derive(Debug)]
struct Container<'a> {
    path: syn::Path,
    ty: ContainerType<'a>,
    err_name: String,
    is_enum_variant: bool,
}

impl<'a> Container<'a> {
    /// Construct a container based on fields, identifier and attributes.
    ///
    /// Fails if the variant has no fields or incompatible attributes.
    fn new(
        fields: &'a Fields,
        path: syn::Path,
        options: ContainerOptions,
        is_enum_variant: bool,
    ) -> Result<Self> {
        ensure_spanned!(
            !fields.is_empty(),
            fields.span() => "cannot derive FromPyObject for empty structs and variants"
        );
        if options.transparent {
            ensure_spanned!(
                fields.len() == 1,
                fields.span() => "transparent structs and variants can only have 1 field"
            );
        }
        let style = match (fields, options.transparent) {
            (Fields::Unnamed(_), true) => ContainerType::TupleNewtype,
            (Fields::Unnamed(unnamed), false) => match unnamed.unnamed.len() {
                1 => ContainerType::TupleNewtype,
                _ => {
                    let fields = unnamed
                        .unnamed
                        .iter()
                        .map(|field| FieldPyO3Attributes::from_attrs(&field.attrs))
                        .collect::<Result<Vec<_>>>()?;

                    ContainerType::Tuple(fields)
                }
            },
            (Fields::Named(named), true) => {
                let field = named
                    .named
                    .iter()
                    .next()
                    .expect("Check for len 1 is done above");
                let ident = field
                    .ident
                    .as_ref()
                    .expect("Named fields should have identifiers");
                ContainerType::StructNewtype(ident)
            }
            (Fields::Named(named), false) => {
                let mut fields = Vec::new();
                for field in named.named.iter() {
                    let ident = field
                        .ident
                        .as_ref()
                        .expect("Named fields should have identifiers");
                    let attrs = FieldPyO3Attributes::from_attrs(&field.attrs)?;
                    fields.push((ident, attrs))
                }
                ContainerType::Struct(fields)
            }
            (Fields::Unit, _) => unreachable!(), // covered by length check above
        };
        let err_name = options.annotation.map_or_else(
            || path.segments.last().unwrap().ident.to_string(),
            |lit_str| lit_str.value(),
        );

        let v = Container {
            path,
            ty: style,
            err_name,
            is_enum_variant,
        };
        Ok(v)
    }

    /// Build derivation body for a struct.
    fn build(&self) -> TokenStream {
        match &self.ty {
            ContainerType::StructNewtype(ident) => self.build_newtype_struct(Some(ident)),
            ContainerType::TupleNewtype => self.build_newtype_struct(None),
            ContainerType::Tuple(tups) => self.build_tuple_struct(tups),
            ContainerType::Struct(tups) => self.build_struct(tups),
        }
    }

    fn build_newtype_struct(&self, field_ident: Option<&Ident>) -> TokenStream {
        let self_ty = &self.path;
        if let Some(ident) = field_ident {
            let error_msg = format!(
                "failed to extract field {}.{}",
                quote!(#self_ty),
                quote!(#ident)
            );
            quote!(
                ::std::result::Result::Ok(#self_ty{#ident: obj.extract().map_err(|inner| {
                    let py = _pyo3::PyNativeType::py(obj);
                    let new_err = _pyo3::exceptions::PyTypeError::new_err(#error_msg);
                    new_err.set_cause(py, ::std::option::Option::Some(inner));
                    new_err
                })?})
            )
        } else if !self.is_enum_variant {
            let error_msg = format!("failed to extract inner field of {}", quote!(#self_ty));
            quote!(
                ::std::result::Result::Ok(#self_ty(obj.extract().map_err(|err| {
                    let py = _pyo3::PyNativeType::py(obj);
                    let err_msg = ::std::format!("{}: {}",
                        #error_msg,
                        err.value(py).str().unwrap());
                    _pyo3::exceptions::PyTypeError::new_err(err_msg)
                })?))
            )
        } else {
            quote!(obj.extract().map(#self_ty))
        }
    }

    fn build_tuple_struct(&self, tups: &[FieldPyO3Attributes]) -> TokenStream {
        let self_ty = &self.path;
        let mut fields: Punctuated<TokenStream, syn::Token![,]> = Punctuated::new();
        for (index, attrs) in tups.iter().enumerate() {
            let error_msg = format!("failed to extract field {}.{}", quote!(#self_ty), index);

            let parsed_item = match &attrs.from_py_with {
                None => quote!(
                    obj.get_item(#index)?.extract()
                ),
                Some(FromPyWithAttribute(expr_path)) => quote! (
                    #expr_path(obj.get_item(#index)?)
                ),
            };

            let extractor = quote!(
                #parsed_item.map_err(|inner| {
                    let py = _pyo3::PyNativeType::py(obj);
                    let new_err = _pyo3::exceptions::PyTypeError::new_err(#error_msg);
                    new_err.set_cause(py, ::std::option::Option::Some(inner));
                    new_err
                })?
            );

            fields.push(quote!(#extractor));
        }
        let len = tups.len();
        let msg = if self.is_enum_variant {
            quote!(::std::format!(
                "expected tuple of length {}, but got length {}",
                #len,
                s.len()
            ))
        } else {
            quote!("")
        };
        quote!(
            let s = <_pyo3::types::PyTuple as _pyo3::conversion::PyTryFrom>::try_from(obj)?;
            if s.len() != #len {
                return ::std::result::Result::Err(_pyo3::exceptions::PyValueError::new_err(#msg))
            }
            ::std::result::Result::Ok(#self_ty(#fields))
        )
    }

    fn build_struct(&self, tups: &[(&Ident, FieldPyO3Attributes)]) -> TokenStream {
        let self_ty = &self.path;
        let mut fields: Punctuated<TokenStream, syn::Token![,]> = Punctuated::new();
        for (ident, attrs) in tups {
            let getter = match &attrs.getter {
                FieldGetter::GetAttr(Some(name)) => quote!(getattr(#name)),
                FieldGetter::GetAttr(None) => quote!(getattr(stringify!(#ident))),
                FieldGetter::GetItem(Some(key)) => quote!(get_item(#key)),
                FieldGetter::GetItem(None) => quote!(get_item(stringify!(#ident))),
            };
            let conversion_error_msg =
                format!("failed to extract field {}.{}", quote!(#self_ty), ident);
            let get_field = quote!(obj.#getter?);
            let extractor = match &attrs.from_py_with {
                None => quote!(
                    #get_field.extract().map_err(|inner| {
                    let py = _pyo3::PyNativeType::py(obj);
                    let new_err = _pyo3::exceptions::PyTypeError::new_err(#conversion_error_msg);
                    new_err.set_cause(py, ::std::option::Option::Some(inner));
                    new_err
                })?),
                Some(FromPyWithAttribute(expr_path)) => quote! (
                    #expr_path(#get_field).map_err(|inner| {
                        let py = _pyo3::PyNativeType::py(obj);
                        let new_err = _pyo3::exceptions::PyTypeError::new_err(#conversion_error_msg);
                        new_err.set_cause(py, ::std::option::Option::Some(inner));
                        new_err
                    })?
                ),
            };

            fields.push(quote!(#ident: #extractor));
        }
        quote!(::std::result::Result::Ok(#self_ty{#fields}))
    }
}

#[derive(Default)]
struct ContainerOptions {
    /// Treat the Container as a Wrapper, directly extract its fields from the input object.
    transparent: bool,
    /// Change the name of an enum variant in the generated error message.
    annotation: Option<syn::LitStr>,
    /// Change the path for the pyo3 crate
    krate: Option<CrateAttribute>,
}

/// Attributes for deriving FromPyObject scoped on containers.
#[derive(Debug)]
enum ContainerPyO3Attribute {
    /// Treat the Container as a Wrapper, directly extract its fields from the input object.
    Transparent(attributes::kw::transparent),
    /// Change the name of an enum variant in the generated error message.
    ErrorAnnotation(LitStr),
    /// Change the path for the pyo3 crate
    Crate(CrateAttribute),
}

impl Parse for ContainerPyO3Attribute {
    fn parse(input: ParseStream) -> Result<Self> {
        let lookahead = input.lookahead1();
        if lookahead.peek(attributes::kw::transparent) {
            let kw: attributes::kw::transparent = input.parse()?;
            Ok(ContainerPyO3Attribute::Transparent(kw))
        } else if lookahead.peek(attributes::kw::annotation) {
            let _: attributes::kw::annotation = input.parse()?;
            let _: Token![=] = input.parse()?;
            input.parse().map(ContainerPyO3Attribute::ErrorAnnotation)
        } else if lookahead.peek(Token![crate]) {
            input.parse().map(ContainerPyO3Attribute::Crate)
        } else {
            Err(lookahead.error())
        }
    }
}

impl ContainerOptions {
    fn from_attrs(attrs: &[Attribute]) -> Result<Self> {
        let mut options = ContainerOptions::default();

        for attr in attrs {
            if let Some(pyo3_attrs) = get_pyo3_options(attr)? {
                for pyo3_attr in pyo3_attrs {
                    match pyo3_attr {
                        ContainerPyO3Attribute::Transparent(kw) => {
                            ensure_spanned!(
                                !options.transparent,
                                kw.span() => "`transparent` may only be provided once"
                            );
                            options.transparent = true;
                        }
                        ContainerPyO3Attribute::ErrorAnnotation(lit_str) => {
                            ensure_spanned!(
                                options.annotation.is_none(),
                                lit_str.span() => "`annotation` may only be provided once"
                            );
                            options.annotation = Some(lit_str);
                        }
                        ContainerPyO3Attribute::Crate(path) => {
                            ensure_spanned!(
                                options.krate.is_none(),
                                path.0.span() => "`crate` may only be provided once"
                            );
                            options.krate = Some(path);
                        }
                    }
                }
            }
        }
        Ok(options)
    }
}

/// Attributes for deriving FromPyObject scoped on fields.
#[derive(Clone, Debug)]
struct FieldPyO3Attributes {
    getter: FieldGetter,
    from_py_with: Option<FromPyWithAttribute>,
}

#[derive(Clone, Debug)]
enum FieldGetter {
    GetItem(Option<syn::Lit>),
    GetAttr(Option<LitStr>),
}

enum FieldPyO3Attribute {
    Getter(FieldGetter),
    FromPyWith(FromPyWithAttribute),
}

impl Parse for FieldPyO3Attribute {
    fn parse(input: ParseStream) -> Result<Self> {
        let lookahead = input.lookahead1();
        if lookahead.peek(attributes::kw::attribute) {
            let _: attributes::kw::attribute = input.parse()?;
            if input.peek(syn::token::Paren) {
                let content;
                let _ = parenthesized!(content in input);
                let attr_name: LitStr = content.parse()?;
                if !content.is_empty() {
                    return Err(content.error(
                        "expected at most one argument: `attribute` or `attribute(\"name\")`",
                    ));
                }
                ensure_spanned!(
                    !attr_name.value().is_empty(),
                    attr_name.span() => "attribute name cannot be empty"
                );
                Ok(FieldPyO3Attribute::Getter(FieldGetter::GetAttr(Some(
                    attr_name,
                ))))
            } else {
                Ok(FieldPyO3Attribute::Getter(FieldGetter::GetAttr(None)))
            }
        } else if lookahead.peek(attributes::kw::item) {
            let _: attributes::kw::item = input.parse()?;
            if input.peek(syn::token::Paren) {
                let content;
                let _ = parenthesized!(content in input);
                let key = content.parse()?;
                if !content.is_empty() {
                    return Err(
                        content.error("expected at most one argument: `item` or `item(key)`")
                    );
                }
                Ok(FieldPyO3Attribute::Getter(FieldGetter::GetItem(Some(key))))
            } else {
                Ok(FieldPyO3Attribute::Getter(FieldGetter::GetItem(None)))
            }
        } else if lookahead.peek(attributes::kw::from_py_with) {
            input.parse().map(FieldPyO3Attribute::FromPyWith)
        } else {
            Err(lookahead.error())
        }
    }
}

impl FieldPyO3Attributes {
    /// Extract the field attributes.
    fn from_attrs(attrs: &[Attribute]) -> Result<Self> {
        let mut getter = None;
        let mut from_py_with = None;

        for attr in attrs {
            if let Some(pyo3_attrs) = get_pyo3_options(attr)? {
                for pyo3_attr in pyo3_attrs {
                    match pyo3_attr {
                        FieldPyO3Attribute::Getter(field_getter) => {
                            ensure_spanned!(
                                getter.is_none(),
                                attr.span() => "only one of `attribute` or `item` can be provided"
                            );
                            getter = Some(field_getter)
                        }
                        FieldPyO3Attribute::FromPyWith(from_py_with_attr) => {
                            ensure_spanned!(
                                from_py_with.is_none(),
                                attr.span() => "`from_py_with` may only be provided once"
                            );
                            from_py_with = Some(from_py_with_attr);
                        }
                    }
                }
            }
        }

        Ok(FieldPyO3Attributes {
            getter: getter.unwrap_or(FieldGetter::GetAttr(None)),
            from_py_with,
        })
    }
}

fn verify_and_get_lifetime(generics: &syn::Generics) -> Result<Option<&syn::LifetimeDef>> {
    let mut lifetimes = generics.lifetimes();
    let lifetime = lifetimes.next();
    ensure_spanned!(
        lifetimes.next().is_none(),
        generics.span() => "FromPyObject can be derived with at most one lifetime parameter"
    );
    Ok(lifetime)
}

/// Derive FromPyObject for enums and structs.
///
///   * Max 1 lifetime specifier, will be tied to `FromPyObject`'s specifier
///   * At least one field, in case of `#[transparent]`, exactly one field
///   * At least one variant for enums.
///   * Fields of input structs and enums must implement `FromPyObject` or be annotated with `from_py_with`
///   * Derivation for structs with generic fields like `struct<T> Foo(T)`
///     adds `T: FromPyObject` on the derived implementation.
pub fn build_derive_from_pyobject(tokens: &DeriveInput) -> Result<TokenStream> {
    let mut trait_generics = tokens.generics.clone();
    let generics = &tokens.generics;
    let lt_param = if let Some(lt) = verify_and_get_lifetime(generics)? {
        lt.clone()
    } else {
        trait_generics.params.push(parse_quote!('source));
        parse_quote!('source)
    };
    let mut where_clause: syn::WhereClause = parse_quote!(where);
    for param in generics.type_params() {
        let gen_ident = &param.ident;
        where_clause
            .predicates
            .push(parse_quote!(#gen_ident: FromPyObject<#lt_param>))
    }
    let options = ContainerOptions::from_attrs(&tokens.attrs)?;
    let krate = get_pyo3_crate(&options.krate);
    let derives = match &tokens.data {
        syn::Data::Enum(en) => {
            if options.transparent || options.annotation.is_some() {
                bail_spanned!(tokens.span() => "`transparent` or `annotation` is not supported \
                                                at top level for enums");
            }
            let en = Enum::new(en, &tokens.ident)?;
            en.build()
        }
        syn::Data::Struct(st) => {
            if let Some(lit_str) = &options.annotation {
                bail_spanned!(lit_str.span() => "`annotation` is unsupported for structs");
            }
            let ident = &tokens.ident;
            let st = Container::new(&st.fields, parse_quote!(#ident), options, false)?;
            st.build()
        }
        syn::Data::Union(_) => bail_spanned!(
            tokens.span() => "#[derive(FromPyObject)] is not supported for unions"
        ),
    };

    let ident = &tokens.ident;
    Ok(quote!(
        const _: () = {
            use #krate as _pyo3;

            #[automatically_derived]
            impl#trait_generics _pyo3::FromPyObject<#lt_param> for #ident#generics #where_clause {
                fn extract(obj: &#lt_param _pyo3::PyAny) -> _pyo3::PyResult<Self>  {
                    #derives
                }
            }
        };
    ))
}
