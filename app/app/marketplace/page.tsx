"use client";

import { useState, useEffect } from "react";
import { NextPage } from "next";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Bid from "./components/bid/bid";
import Collection from "./components/collection/collection";
import Profile from "./components/profile/profile";
import Settings from "./components/settings/settings";
import { Header } from "./components/header/header";

type NFTData = {
  id: string;
  title: string;
  author: string;
  auctionTime: string;
  currentBid: string;
  price: string;
  image: string;
}[];

type ComponentName = 'Dashboard' | 'Bid' | 'Collection' | 'Profile' | 'Settings';

const Marketplace: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentName>('Dashboard');
  const [data, setData] = useState<NFTData>([]);

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const res = await fetch("/api/nftData");
        const result = await res.json();

        const transformedData = result.data.map((nft: any) => ({
          ...nft,
          image: nft.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96E2k4NhPGA8ZjCfy6426qdebPFYwlM2IZg&s",
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      }
    };

    fetchNfts();
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <Dashboard data={data} />;
      case "Bid":
        return <Bid />;
      case "Collection":
        return <Collection />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar selectedComponent={selectedComponent} changeComponent={setSelectedComponent} />
      <div className="flex-1 ml-20 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default Marketplace;


// "use client";

// import { useState, useEffect } from "react";
// import { NextPage } from "next";
// import Sidebar from "./components/sidebar/sidebar";
// import Dashboard from "./components/dashboard/dashboard";
// import Bid from "./components/bid/bid";
// import Collection from "./components/collection/collection";
// import Profile from "./components/profile/profile";
// import Settings from "./components/settings/settings";
// import { Header } from "./components/header/header";
// import { useAlisGoDAO } from "../hooks/useAlisGoDAO";
// import { PublicKey } from "@solana/web3.js";
// import toast from "react-hot-toast";

// type NFTData = {
//   id: string;
//   title: string;
//   author: string;
//   auctionTime: string;
//   currentBid: string;
//   price: string;
//   image: string;
// }[];

// type ComponentName = 'Dashboard' | 'Bid' | 'Collection' | 'Profile' | 'Settings';

// const Marketplace: NextPage = () => {
//   const [selectedComponent, setSelectedComponent] = useState<ComponentName>('Dashboard');
//   const [data, setData] = useState<NFTData>([]);

//   // Using the DAO hook
//   const {
//     initialized,
//     loading,
//     transactionPending,
//     userProfile,
//     proposals,
//     initializeUser,
//     createTouristSpot,
//     createProposal,
//     voteOnProposal,
//     closeProposal,
//   } = useAlisGoDAO();

//   useEffect(() => {
//     // Fetch NFT data
//     const fetchNfts = async () => {
//       try {
//         const res = await fetch("/api/nftData");
//         const result = await res.json();

//         const transformedData = result.data.map((nft: any) => ({
//           ...nft,
//           image: nft.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96E2k4NhPGA8ZjCfy6426qdebPFYwlM2IZg&s",
//         }));

//         setData(transformedData);
//       } catch (error) {
//         console.error("Error fetching NFT data:", error);
//       }
//     };

//     fetchNfts();
//   }, []);

//   // Example action: initialize user
//   const handleInitializeUser = async () => {
//     if (!initialized) {
//       await initializeUser();
//     } else {
//       toast.error("User already initialized");
//     }
//   };

//   // Example action: create a tourist spot
//   const handleCreateTouristSpot = async () => {
//     const newSpot = {
//       name: "New Tourist Spot",
//       description: "A beautiful place to visit",
//       imageUrl: "https://example.com/image.jpg",
//       location: "City Center",
//       latitude: 40.7128,
//       longitude: -74.0060,
//       mintAddress: "SOME_MINT_ADDRESS",
//       creatorAddress: "CREATOR_ADDRESS",
//       collectionName: "Famous Spots Collection",
//       attributes: [{ traitType: "Type", value: "Historical" }],
//     };
//     await createTouristSpot(newSpot);
//   };

//   // Example action: create a proposal
//   const handleCreateProposal = async () => {
//     await createProposal("This is a new proposal description.");
//   };

//   // Render component based on the selected menu item
//   const renderComponent = () => {
//     switch (selectedComponent) {
//       case "Dashboard":
//         return <Dashboard data={data} />;
//       case "Bid":
//         return <Bid />;
//       case "Collection":
//         return <Collection />;
//       case "Profile":
//         return <Profile />;
//       case "Settings":
//         return <Settings />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="flex-1 p-4">
//         <Header />
//         <div className="p-4">
//           <button onClick={handleInitializeUser} className="btn btn-primary">
//             Initialize User
//           </button>
//           <button onClick={handleCreateTouristSpot} className="btn btn-secondary ml-2">
//             Create Tourist Spot
//           </button>
//           <button onClick={handleCreateProposal} className="btn btn-tertiary ml-2">
//             Create Proposal
//           </button>
//         </div>
//         <div className="mt-8">{renderComponent()}</div>
//       </div>
//     </div>
//   );
// };

// export default Marketplace;
