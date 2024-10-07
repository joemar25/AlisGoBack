"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const CollectionsAndAuctions: React.FC = () => {
  // GSAP animation ref for the Promotional Banner
  const promotionalBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (promotionalBannerRef.current) {
      gsap.fromTo(
        promotionalBannerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="w-full px-4 py-16 mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Collections Section */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-2">
            <img className="w-5 h-5 mr-2" alt="Sparkle icon" src="static/img/sparkle-icon-2.svg" />
            <h2 className="text-xl text-black font-heading-3">Collections</h2>
          </div>
          <p className="mb-4 text-sm font-paragraph text-gray">
            Explore NFT Art Collections by our Creators
          </p>
          <div className="space-y-3">
            <CollectionCard
              title="Yacht Club"
              creator="Emily Chen"
              followers={150}
              images={[
                "/static/img/2022-12-10-1.png",
                "/static/img/2022-04-22-1.png",
                "/static/img/2020-03-14-1.png",
                "/static/img/2021-02-20-1.png"
              ]}
              avatarSrc={"/static/img/2022-12-10-1.png"}
            />
            <CollectionCard
              title="Azuki"
              creator="Lily Chan"
              followers={360}
              images={[
                "/static/img/unnamed-1.png",
                "/static/img/2022-07-11-1.png",
                "/static/img/2024-02-25-1.png",
                "/static/img/psx-20200603-205843-1.png"
              ]}
              avatarSrc={"/static/img/2022-12-10-1.png"}
            />
            <CollectionCard
              title="Travel Club"
              creator="Jennifer Chung"
              followers={275}
              images={[
                "/static/img/2020-01-24-1.png",
                "/static/img/pxl-20221230-043602149-1.png",
                "/static/img/2022-10-18-1.png",
                "/static/img/20220711-071501-1.png"
              ]}
              avatarSrc={"/static/img/2022-12-10-1.png"}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 mt-4 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Explore Collection
            <img
              className="w-4 h-4 ml-2"
              alt="Arrow icon"
              src="static/img/arrow-icon-6.svg"
            />
          </motion.button>
        </motion.div>

        {/* Live Auctions Section */}
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-2">
            <img className="w-5 h-5 mr-2" alt="Sparkle icon" src="static/img/sparkle-icon-3.svg" />
            <h2 className="text-xl text-black font-heading-3">Get in on the Action</h2>
          </div>
          <p className="mb-4 text-sm font-paragraph text-gray">
            Bid on Exclusive Travel NFTs Showcasing Stunning Tourist Destinations in AlisGo's Featured Live Auction!
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AuctionItem
              imageSrc="/static/img/download-16.png"
              title="ChokletHill"
              currentBid="0.50 ETH"
              bidder="Maria Martinez"
              timeLeft="02 : 05 : 20 : 30"
              bidders={258}
            />
            <AuctionItem
              imageSrc="/static/img/download-17.png"
              title="CryptoLake"
              currentBid="1.20 ETH"
              bidder="Jason Lee"
              timeLeft="03 : 01 : 35 : 10"
              bidders={352}
            />
          </div>
          <div className="mt-6 mb-6">
            <div className="w-full h-2 overflow-hidden rounded-full bg-gray bg-opacity-10">
              <div className="w-3/4 h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </div>
          <div ref={promotionalBannerRef}>
            <PromotionalBanner />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface CollectionCardProps {
  title: string;
  creator: string;
  followers: number;
  images: string[];
  avatarSrc: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, creator, followers, images, avatarSrc }) => {
  return (
    <motion.div
      className="overflow-hidden bg-white shadow-md rounded-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img
            src={avatarSrc}
            alt={`${title} avatar`}
            className="object-cover w-10 h-10 mr-3 rounded-full"
          />
          <div>
            <h3 className="font-bold text-black">{title}</h3>
            <p className="text-xs text-gray-600">
              {creator} • {followers} followers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img
            src={images[0]}
            alt={`${title} main`}
            className="w-full h-[180px] object-cover rounded-lg"
          />
          <div className="grid grid-rows-2 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <img
                src={images[1]}
                alt={`${title} image 2`}
                className="w-full h-[85px] object-cover rounded-lg"
              />
              <img
                src={images[2]}
                alt={`${title} image 3`}
                className="w-full h-[85px] object-cover rounded-lg"
              />
            </div>
            <img
              src={images[3]}
              alt={`${title} image 4`}
              className="w-full h-[85px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface AuctionItemProps {
  imageSrc: string;
  title: string;
  currentBid: string;
  bidder: string;
  timeLeft: string;
  bidders: number;
}

const AuctionItem: React.FC<AuctionItemProps> = ({ imageSrc, title, currentBid, bidder, timeLeft, bidders }) => {
  return (
    <motion.div
      className="overflow-hidden bg-white shadow-lg rounded-2xl"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-64"
        />
        <div className="absolute flex items-center px-4 py-2 bg-white rounded-full top-4 left-4">
          <img className="w-5 h-5 mr-2" alt="Timer icon" src="static/img/timer-icon.svg" />
          <p className="text-sm text-black font-heading-5">{timeLeft}</p>
        </div>
        <div className="absolute flex items-center px-4 py-2 bg-white rounded-full top-4 right-4">
          <img className="w-5 h-5 mr-2" alt="User icon" src="static/img/user-icon.svg" />
          <p className="text-sm text-black font-heading-5">{bidders}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-4 text-black font-heading-4">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/static/img/image-placeholder-9.png"
              alt="Bidder"
              className="object-cover w-10 h-10 mr-3 rounded-full"
            />
            <div>
              <p className="text-sm font-paragraph text-gray">{bidder}</p>
              <p className="text-xs opacity-75 font-heading-7 text-gray">See all bidders</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-75 font-heading-7 text-gray">Current price:</p>
            <p className="font-heading-5 text-green">{currentBid}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PromotionalBanner = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="relative w-full overflow-hidden h-96 rounded-xl">
      <img 
        src="/static/img/2022-12-10-1.png" 
        alt="Church building" 
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="mb-3 text-2xl font-bold text-white">
          Discover More Unique Digital Art on Alis-Go!
        </h3>
        <button className="flex items-center px-4 py-2 text-black bg-white rounded-full w-max">
          Join Now
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
});

export default CollectionsAndAuctions;
