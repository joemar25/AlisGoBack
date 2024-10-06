import React from "react";
import Trending from "../trending/trending";
import Featured from "./images/Featured.svg";
import Avatar from "./images/Avatar.svg";
import Image from "next/image";
import './dashboard.css';

// Unified type for NFTs
type NFT = {
  id: string;
  title: string;
  author: string;
  auctionTime: string;
  currentBid: string;
  price: string;
  image: string;
}[];

const Dashboard = ({ data }: { data: NFT }) => {
  return (
    <main className="text-gray-900 dark:text-white p-6">

      {/* Discover Section */}
      <section className="my-6 mx-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="discover-section flex flex-col justify-between p-6 rounded-lg shadow-md text-white">
            <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">
              Discover, Collect, Sell, and Create your NFT
            </h1>
            <p className="text-lg mb-6 text-center lg:text-left">
              Digital marketplace for crypto collectibles and non-fungible tokens
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-auto">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Explore
              </button>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Create
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-lg"
                  src={Featured}
                  alt="Featured NFT image"
                  unoptimized
                />
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <Image
                    className="rounded-full"
                    src={Avatar}
                    alt="Avatar of NFT creator John Abraham"
                    unoptimized
                    width={40}
                    height={40}
                  />
                  <span className="ml-2 text-sm font-medium">John Abraham</span>
                  <div className="ml-2 h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-lg font-semibold mb-2">Brighten LQ</div>
                <div className="flex justify-between w-full text-sm mb-4">
                  <div>Auction time: 3h 1m 50s</div>
                  <div>
                    Current Bid : <span className="text-purple-600">1.50 SOL</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                    Bid
                  </button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trending Section */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 mx-20">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Trending Bids</h2>
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              All
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
              Artwork
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
              Music
            </button>
          </div>
        </div>
        <Trending data={data} />
      </section>
    </main>
  );
};

export default Dashboard;
