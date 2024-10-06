use anchor_lang::prelude::*;
use crate::structs::*;

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
    attributes: Vec<Attribute>,
) -> Result<()> {
    let tourist_spot_account = &mut ctx.accounts.tourist_spot_account;
    tourist_spot_account.name = name;
    tourist_spot_account.description = description;
    tourist_spot_account.image_url = image_url;
    tourist_spot_account.location = location;
    tourist_spot_account.latitude = latitude;
    tourist_spot_account.longitude = longitude;
    tourist_spot_account.mint_address = mint_address;
    tourist_spot_account.creator_address = creator_address;
    tourist_spot_account.collection_name = collection_name;
    tourist_spot_account.attributes = attributes;
    msg!("Tourist spot created: {}!", tourist_spot_account.name);
    Ok(())
}

#[derive(Accounts)]
#[instruction(
    name: String,
    description: String,
    image_url: String,
    location: String,
    latitude: f64,
    longitude: f64,
    mint_address: String,
    creator_address: String,
    collection_name: String,
    attributes: Vec<Attribute>
)]
pub struct CreateTouristSpot<'info> {
    #[account(
        init,
        payer = signer,
        space = 8 + // discriminator
            4 + name.len() + // name
            4 + description.len() + // description
            4 + image_url.len() + // image_url
            4 + location.len() + // location
            8 + // latitude
            8 + // longitude
            4 + mint_address.len() + // mint_address
            4 + creator_address.len() + // creator_address
            4 + collection_name.len() + // collection_name
            4 + attributes.len() * Attribute::MAX_SIZE // attributes
    )]
    pub tourist_spot_account: Account<'info, TouristSpot>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
