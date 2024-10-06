// import * as anchor from '@project-serum/anchor';
// import { useEffect, useMemo, useState } from 'react';
// import { PROGRAM_ID } from '../constants';
// import idl from '../constants/idl.json';
// import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
// import { PublicKey, SystemProgram } from '@solana/web3.js';
// import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
// import toast from 'react-hot-toast';
// import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes';

// type UserProfile = {
//     authority: PublicKey;
//     lastProposal: anchor.BN;
//     proposalCount: anchor.BN;
// };

// type Proposal = {
//     description: string;
//     proposer: PublicKey;
//     votes: Map<string, boolean>;
//     status: { open: {} } | { closed: {} };
// };

// type TouristSpot = {
//     name: string;
//     description: string;
//     imageUrl: string;
//     location: string;
//     latitude: number;
//     longitude: number;
//     mintAddress: string;
//     creatorAddress: string;
//     collectionName: string;
//     attributes: { traitType: string; value: string }[];
// };

// export function useAlisGoDAO() {
//     const { connection } = useConnection();
//     const { publicKey } = useWallet();
//     const anchorWallet = useAnchorWallet();

//     const [initialized, setInitialized] = useState(false);
//     const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
//     const [proposals, setProposals] = useState<Proposal[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [transactionPending, setTransactionPending] = useState(false);

//     const program = useMemo(() => {
//         if (anchorWallet) {
//             const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions());
//             return new anchor.Program(idl as anchor.Idl, PROGRAM_ID, provider);
//         }
//     }, [connection, anchorWallet]);

//     const getUserProfilePDA = (publicKey: PublicKey) => {
//         return findProgramAddressSync([utf8.encode('USER_STATE'), publicKey.toBuffer()], PROGRAM_ID);
//     };

//     const getProposalPDA = (publicKey: PublicKey, proposalIndex: number) => {
//         return findProgramAddressSync([utf8.encode('PROPOSAL_STATE'), publicKey.toBuffer(), Buffer.from([proposalIndex])], PROGRAM_ID);
//     };

//     useEffect(() => {
//         const fetchUserProfileAndProposals = async () => {
//             if (program && publicKey && !transactionPending) {
//                 try {
//                     setLoading(true);
//                     const [profilePda] = getUserProfilePDA(publicKey);
//                     const profileAccount = await program.account.userProfile.fetch(profilePda) as UserProfile;

//                     if (profileAccount) {
//                         setUserProfile(profileAccount);
//                         setInitialized(true);

//                         const fetchedProposals = await program.account.proposal.all([
//                             {
//                                 memcmp: {
//                                     offset: 8,
//                                     bytes: publicKey.toBase58(),
//                                 },
//                             },
//                         ]);
//                         setProposals(fetchedProposals.map(p => p.account as Proposal));
//                     } else {
//                         setInitialized(false);
//                     }
//                 } catch (error) {
//                     console.error('Error fetching user profile and proposals:', error);
//                     setInitialized(false);
//                     setProposals([]);
//                 } finally {
//                     setLoading(false);
//                 }
//             }
//         };

//         fetchUserProfileAndProposals();
//     }, [publicKey, program, transactionPending]);

//     const initializeUser = async () => {
//         if (program && publicKey) {
//             try {
//                 setTransactionPending(true);
//                 const [profilePda] = getUserProfilePDA(publicKey);

//                 const tx = await program.methods
//                     .initializeUser()
//                     .accounts({
//                         authority: publicKey,
//                         userProfile: profilePda,
//                         systemProgram: SystemProgram.programId,
//                     })
//                     .rpc();

//                 setInitialized(true);
//                 toast.success('Successfully initialized user profile.');
//                 console.log(`User profile initialized with transaction: ${tx}`);
//             } catch (error) {
//                 console.error('Failed to initialize user:', error);
//                 toast.error('Failed to initialize user profile.');
//             } finally {
//                 setTransactionPending(false);
//             }
//         }
//     };

//     const createTouristSpot = async (spotData: TouristSpot) => {
//         if (program && publicKey) {
//             try {
//                 setTransactionPending(true);
//                 const touristSpotKeypair = anchor.web3.Keypair.generate();

//                 const tx = await program.methods
//                     .createTouristSpot(
//                         spotData.name,
//                         spotData.description,
//                         spotData.imageUrl,
//                         spotData.location,
//                         spotData.latitude,
//                         spotData.longitude,
//                         spotData.mintAddress,
//                         spotData.creatorAddress,
//                         spotData.collectionName,
//                         spotData.attributes
//                     )
//                     .accounts({
//                         touristSpotAccount: touristSpotKeypair.publicKey,
//                         signer: publicKey,
//                         systemProgram: SystemProgram.programId,
//                     })
//                     .signers([touristSpotKeypair])
//                     .rpc();

//                 toast.success('Successfully created tourist spot.');
//                 console.log(`Tourist spot created with transaction: ${tx}`);
//             } catch (error) {
//                 console.error('Failed to create tourist spot:', error);
//                 toast.error('Failed to create tourist spot.');
//             } finally {
//                 setTransactionPending(false);
//             }
//         }
//     };

//     const createProposal = async (description: string) => {
//         if (program && publicKey && userProfile) {
//             try {
//                 setTransactionPending(true);
//                 const [profilePda] = getUserProfilePDA(publicKey);
//                 const [proposalPda] = getProposalPDA(publicKey, userProfile.proposalCount.toNumber());

//                 const tx = await program.methods
//                     .createProposal(description)
//                     .accounts({
//                         proposalAccount: proposalPda,
//                         userProfile: profilePda,
//                         signer: publicKey,
//                         authority: publicKey,
//                         systemProgram: SystemProgram.programId,
//                     })
//                     .rpc();

//                 toast.success('Successfully created proposal.');
//                 console.log(`Proposal created with transaction: ${tx}`);
//             } catch (error) {
//                 console.error('Failed to create proposal:', error);
//                 toast.error('Failed to create proposal.');
//             } finally {
//                 setTransactionPending(false);
//             }
//         }
//     };

//     const voteOnProposal = async (proposalPda: PublicKey, vote: boolean) => {
//         if (program && publicKey) {
//             try {
//                 setTransactionPending(true);
//                 const [profilePda] = getUserProfilePDA(publicKey);

//                 const tx = await program.methods
//                     .voteOnProposal(vote)
//                     .accounts({
//                         userProfile: profilePda,
//                         proposalAccount: proposalPda,
//                         signer: publicKey,
//                         authority: publicKey,
//                     })
//                     .rpc();

//                 toast.success(`Successfully voted ${vote ? 'in favor of' : 'against'} the proposal.`);
//                 console.log(`Vote cast with transaction: ${tx}`);
//             } catch (error) {
//                 console.error('Failed to vote on proposal:', error);
//                 toast.error('Failed to vote on proposal.');
//             } finally {
//                 setTransactionPending(false);
//             }
//         }
//     };

//     const closeProposal = async (proposalPda: PublicKey) => {
//         if (program && publicKey) {
//             try {
//                 setTransactionPending(true);
//                 const [profilePda] = getUserProfilePDA(publicKey);

//                 const tx = await program.methods
//                     .closeProposal()
//                     .accounts({
//                         userProfile: profilePda,
//                         proposalAccount: proposalPda,
//                         signer: publicKey,
//                         authority: publicKey,
//                     })
//                     .rpc();

//                 toast.success('Successfully closed the proposal.');
//                 console.log(`Proposal closed with transaction: ${tx}`);
//             } catch (error) {
//                 console.error('Failed to close proposal:', error);
//                 toast.error('Failed to close proposal.');
//             } finally {
//                 setTransactionPending(false);
//             }
//         }
//     };

//     return {
//         initialized,
//         loading,
//         transactionPending,
//         userProfile,
//         proposals,
//         initializeUser,
//         createTouristSpot,
//         createProposal,
//         voteOnProposal,
//         closeProposal,
//     };
// }