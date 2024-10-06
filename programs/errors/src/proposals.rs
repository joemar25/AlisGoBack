use anchor_lang::prelude::*;
use crate::errors::CustomError;
use crate::structs::*;
use crate::user_profile::{UserProfile, USER_TAG};
use std::collections::BTreeMap;

pub fn create_proposal(ctx: Context<CreateProposal>, description: String) -> Result<()> {
    let proposal_account = &mut ctx.accounts.proposal_account;
    let user_profile = &mut ctx.accounts.user_profile;

    proposal_account.description = description.clone();
    proposal_account.proposer = ctx.accounts.signer.key();
    proposal_account.votes = BTreeMap::new();
    proposal_account.status = ProposalStatus::Open;

    user_profile.last_proposal = user_profile.last_proposal.checked_add(1).unwrap();
    user_profile.proposal_count = user_profile.proposal_count.checked_add(1).unwrap();

    msg!("Proposal created with description: {}!", description);
    Ok(())
}

pub fn vote_on_proposal(ctx: Context<VoteOnProposal>, vote: bool) -> Result<()> {
    let proposal_account = &mut ctx.accounts.proposal_account;

    require!(
        proposal_account.status == ProposalStatus::Open,
        CustomError::ProposalClosed
    );

    let voter = ctx.accounts.signer.key();
    require!(
        !proposal_account.votes.contains_key(&voter),
        CustomError::AlreadyVoted
    );

    proposal_account.votes.insert(voter, vote);

    msg!("Voter {} has voted: {}", voter, vote);
    Ok(())
}

pub fn close_proposal(ctx: Context<CloseProposal>) -> Result<()> {
    let proposal_account = &mut ctx.accounts.proposal_account;
    proposal_account.status = ProposalStatus::Closed;

    msg!("Proposal closed: {}!", proposal_account.description);
    Ok(())
}

#[derive(Accounts)]
pub struct CreateProposal<'info> {
    #[account(
        init,
        payer = signer,
        space = 8 + Proposal::MAX_SIZE,
    )]
    pub proposal_account: Account<'info, Proposal>,

    #[account(
        mut,
        seeds = [USER_TAG, signer.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(mut)]
    pub signer: Signer<'info>,

    /// CHECK: This is not dangerous because we don't read or write from this account
    pub authority: AccountInfo<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct VoteOnProposal<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, signer.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(mut)]
    pub proposal_account: Account<'info, Proposal>,

    #[account(mut)]
    pub signer: Signer<'info>,

    /// CHECK: This is not dangerous because we don't read or write from this account
    pub authority: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct CloseProposal<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, signer.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(mut)]
    pub proposal_account: Account<'info, Proposal>,

    #[account(mut)]
    pub signer: Signer<'info>,

    /// CHECK: This is not dangerous because we don't read or write from this account
    pub authority: AccountInfo<'info>,
}
