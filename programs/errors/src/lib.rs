use anchor_lang::prelude::*;

pub mod errors;
pub mod proposals;
pub mod structs;
pub mod tourist_spots;
pub mod user_profile;

use proposals::*;
use tourist_spots::*;
use user_profile::*;

declare_id!("45q7hmQ8xiLTjzU8wToPYtd3nX3DcQTvvCGstqRtgVm3");

#[program]
mod alisgo_dao {
    use super::*;

    pub fn initialize_user(ctx: Context<InitializeUser>) -> Result<()> {
        user_profile::initialize_user(ctx)
    }

    pub fn create_tourist_spot(
        ctx: Context<CreateTouristSpot>,
        name: String,
        description: String,
        image_url: String,
        location: String,
        latitude: f64,
        longitude: f64,
        mint_address: String,
        creator_address: String,
        collection_name: String,
        attributes: Vec<structs::Attribute>,
    ) -> Result<()> {
        tourist_spots::create_tourist_spot(
            ctx,
            name,
            description,
            image_url,
            location,
            latitude,
            longitude,
            mint_address,
            creator_address,
            collection_name,
            attributes,
        )
    }

    pub fn create_proposal(ctx: Context<CreateProposal>, description: String) -> Result<()> {
        proposals::create_proposal(ctx, description)
    }

    pub fn vote_on_proposal(ctx: Context<VoteOnProposal>, vote: bool) -> Result<()> {
        proposals::vote_on_proposal(ctx, vote)
    }

    pub fn close_proposal(ctx: Context<CloseProposal>) -> Result<()> {
        proposals::close_proposal(ctx)
    }
}
