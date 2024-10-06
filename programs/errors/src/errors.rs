use anchor_lang::prelude::*;

#[error_code]
pub enum CustomError {
    #[msg("The proposal is closed")]
    ProposalClosed,
    #[msg("You have already voted on this proposal")]
    AlreadyVoted,
    #[msg("Unauthorized access")]
    UnauthorizedAccess,
}
