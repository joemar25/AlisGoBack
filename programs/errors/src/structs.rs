use anchor_lang::prelude::*;
use std::collections::BTreeMap;

#[account]
pub struct NewAccount {
    pub data: u64,
}

#[account]
pub struct TouristSpot {
    pub name: String,
    pub description: String,
    pub image_url: String,
    pub location: String,
    pub latitude: f64,
    pub longitude: f64,
    pub mint_address: String,
    pub creator_address: String,
    pub collection_name: String,
    pub attributes: Vec<Attribute>,
}

impl TouristSpot {
    pub const MAX_SIZE: usize = 32 +  // name
                            256 + // description
                            256 + // image_url
                            64 +  // location
                            8 +   // latitude
                            8 +   // longitude
                            32 +  // mint_address
                            32 +  // creator_address
                            64 +  // collection_name
                            (4 + Attribute::MAX_SIZE * 5); // attributes (max 5 attributes)
}

#[account]
pub struct Proposal {
    pub description: String,
    pub proposer: Pubkey,
    pub votes: BTreeMap<Pubkey, bool>,
    pub status: ProposalStatus,
}

impl Proposal {
    pub const MAX_SIZE: usize = 256 + // description
                            32 +  // proposer
                            (32 + 1) * 100 + // votes (max 100 votes, each with 32-byte pubkey + 1 byte for vote)
                            1; // status
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq)]
pub enum ProposalStatus {
    Open,
    Closed,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Attribute {
    pub trait_type: String,
    pub value: String,
}

impl Attribute {
    pub const MAX_SIZE: usize = 4 + 32 + 4 + 32; // 4 bytes for each string length + max 32 bytes for each string
}
