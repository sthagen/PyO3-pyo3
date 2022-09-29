use clap::ErrorKind::MissingArgumentOrSubcommand;
use structopt::StructOpt;

pub mod cli;
pub mod clippy;
pub mod doc;
pub mod fmt;
pub mod pytests;
pub mod test;
pub mod utils;

fn main() -> anyhow::Result<()> {
    // Avoid spewing backtraces all over the command line
    // For some reason this is automatically enabled on nightly compilers...
    std::env::set_var("RUST_LIB_BACKTRACE", "0");

    match cli::Subcommand::from_args_safe() {
        Ok(c) => c.execute()?,
        Err(e) if e.kind == MissingArgumentOrSubcommand => cli::Subcommand::default().execute()?,
        Err(e) => return Err(e.into()),
    }
    Ok(())
}
