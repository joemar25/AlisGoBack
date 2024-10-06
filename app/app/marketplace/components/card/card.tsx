import React from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./card.css";
import NFT from "./images/NFT.svg";
import Image from "next/image";

type CardProps = {
  title?: string;
  image?: string;
  floor_price?: string;
};

const Card: React.FC<CardProps> = ({ title, image, floor_price }) => {
  const formattedPrice = floor_price
    ? (Number(floor_price) / LAMPORTS_PER_SOL).toFixed(2)
    : "20.00";

  const isAnimatedImage = image?.endsWith(".gif");

  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black rounded-lg shadow-md p-4">
      <div className="nft-image-container flex justify-center items-center mb-4">
        <Image
          width={150}
          height={150}
          src={image ? image : NFT}
          alt={title ? `${title} NFT image` : "NFT image"}
          unoptimized={isAnimatedImage}
          className="rounded-lg"
        />
      </div>
      <div className="title text-lg font-bold mb-2 text-center">{title || "Liquid Wave"}</div>
      <div className="info--container flex justify-between text-sm mb-2">
        <div className="info">
          <div>Auction Time</div>
          <div>Current Bid</div>
        </div>
        <div className="bid-value text-purple-600 font-semibold">1.50 SOL</div>
      </div>
      <div className="vals flex justify-between text-sm mb-4">
        <div>3h 1m 50s</div>
        <div>{formattedPrice} SOL</div>
      </div>
      <button
        type="button"
        className="bid-button bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700 transition-colors"
        aria-label={`Place a bid on ${title || "Liquid Wave"}`}
      >
        Place a Bid
      </button>
    </div>
  );
};

export default Card;
