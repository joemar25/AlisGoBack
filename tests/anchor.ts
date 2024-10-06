import assert from "assert";
import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { web3 } from "@project-serum/anchor";
import assert from "assert";
import * as anchor from "@project-serum/anchor";
import type { Errors } from "../target/types/errors";

const { SystemProgram } = anchor.web3;

// Adjust this to your program instance
const pg = anchor.workspace.MyProgram;

// Utility function to derive user profile PDA
function getUserProfilePDA(publicKey) {
  return web3.PublicKey.findProgramAddressSync(
    [Buffer.from("USER_STATE"), publicKey.toBuffer()],
    programId
  )[0];
}

// Utility function to derive proposal PDA
function getProposalPDA(publicKey, proposalIndex) {
  return web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("PROPOSAL_STATE"),
      publicKey.toBuffer(),
      Buffer.from([proposalIndex]),
    ],
    programId
  )[0];
}

describe("AlisGo DAO", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Errors as anchor.Program<Errors>;
  
  it("initialize_user", async () => {
    const userProfilePDA = getUserProfilePDA(pg.provider.wallet.publicKey);

    const transactionHash = await pg.methods
      .initializeUser()
      .accounts({
        userProfile: userProfilePDA,
        authority: pg.provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log(`Use 'solana confirm -v ${transactionHash}' to see the logs`);

    await pg.provider.connection.confirmTransaction(transactionHash);

    const userProfileAccount = await pg.account.userProfile.fetch(
      userProfilePDA
    );

    console.log("On-chain data for user profile:", userProfileAccount);
    assert.strictEqual(
      userProfileAccount.authority.toString(),
      pg.provider.wallet.publicKey.toString()
    );
    assert.strictEqual(userProfileAccount.proposalCount, 0);
  });

  it("create_tourist_spot", async () => {
    await initializeUserIfNotExists(pg.provider.wallet.publicKey);

    const touristSpotKeypair = new web3.Keypair();

    const name = "Boracay White Beach";
    const description =
      "A world-famous beach known for its stunning white sands and clear blue waters, located on Boracay Island.";
    const imageUrl =
      "https://hips.hearstapps.com/hmg-prod/images/hbz-travel-index4-1-1547062721.gif";
    const location = "Aklan, Philippines";
    const latitude = 11.967;
    const longitude = 121.925;
    const mintAddress = "YourSolanaMintAddressForNFT1";
    const creatorAddress = "YourSolanaCreatorAddress";
    const collectionName = "Philippines Tourist Spots";
    const attributes = [
      { traitType: "Type", value: "Beach" },
      { traitType: "Popularity", value: "High" },
      { traitType: "Region", value: "Visayas" },
    ];

    const transactionHash = await pg.methods
      .createTouristSpot(
        name,
        description,
        imageUrl,
        location,
        latitude,
        longitude,
        mintAddress,
        creatorAddress,
        collectionName,
        attributes
      )
      .accounts({
        touristSpotAccount: touristSpotKeypair.publicKey,
        signer: pg.provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([touristSpotKeypair])
      .rpc();
    console.log(`Use 'solana confirm -v ${transactionHash}' to see the logs`);

    await pg.provider.connection.confirmTransaction(transactionHash);

    const touristSpotAccount = await pg.account.touristSpot.fetch(
      touristSpotKeypair.publicKey
    );

    console.log("On-chain data for tourist spot:", touristSpotAccount);
    assert.strictEqual(touristSpotAccount.name, name);
    assert.strictEqual(touristSpotAccount.description, description);
    assert.strictEqual(touristSpotAccount.location, location);
    assert.deepStrictEqual(touristSpotAccount.attributes, attributes);
  });

  it("create_proposal", async () => {
    const userProfilePDA = await initializeUserIfNotExists(
      pg.provider.wallet.publicKey
    );

    const userProfileAccount = await pg.account.userProfile.fetch(
      userProfilePDA
    );
    const proposalIndex = userProfileAccount.proposalCount;

    const proposalPDA = getProposalPDA(
      pg.provider.wallet.publicKey,
      proposalIndex
    );

    const description =
      "Proposal to launch a new Bicol Festivity NFT collection.";

    const transactionHash = await pg.methods
      .createProposal(description)
      .accounts({
        proposalAccount: proposalPDA,
        userProfile: userProfilePDA,
        signer: pg.provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    console.log(`Use 'solana confirm -v ${transactionHash}' to see the logs`);

    await pg.provider.connection.confirmTransaction(transactionHash);

    const proposalAccount = await pg.account.proposal.fetch(proposalPDA);

    console.log("On-chain data for proposal:", proposalAccount);
    assert.strictEqual(proposalAccount.description, description);
    assert.strictEqual(
      proposalAccount.proposer.toString(),
      pg.provider.wallet.publicKey.toString()
    );

    const updatedUserProfileAccount = await pg.account.userProfile.fetch(
      userProfilePDA
    );
    assert.strictEqual(
      updatedUserProfileAccount.proposalCount,
      proposalIndex + 1
    );
  });
});

// Helper function to initialize a user if not already initialized
async function initializeUserIfNotExists(publicKey) {
  try {
    const userProfilePDA = getUserProfilePDA(publicKey);
    await pg.account.userProfile.fetch(userProfilePDA);
    return userProfilePDA;
  } catch (error) {
    if (error.message.includes("Account does not exist")) {
      const transactionHash = await pg.methods
        .initializeUser()
        .accounts({
          userProfile: getUserProfilePDA(publicKey),
          authority: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
      console.log(`User profile initialized, transaction: ${transactionHash}`);
      return getUserProfilePDA(publicKey);
    } else {
      throw error;
    }
  }
}
