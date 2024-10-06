use anchor_lang::prelude::*;

pub const USER_TAG: &[u8] = b"USER_STATE";

#[account]
pub struct UserProfile {
    pub authority: Pubkey,
    pub last_proposal: u64,
    pub proposal_count: u64,
}

pub fn initialize_user(ctx: Context<InitializeUser>) -> Result<()> {
    let user_profile = &mut ctx.accounts.user_profile;
    user_profile.authority = ctx.accounts.authority.key();
    user_profile.last_proposal = 0;
    user_profile.proposal_count = 0;
    msg!("User profile initialized for: {}!", user_profile.authority);
    Ok(())
}

#[derive(Accounts)]
pub struct InitializeUser<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<UserProfile>(),
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    pub system_program: Program<'info, System>,
}
