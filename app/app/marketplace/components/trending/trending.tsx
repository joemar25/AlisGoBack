import "./trending.css";
import React from "react";
import Card from "../card/card";

type NFT = {
  id: string;
  title: string;
  author: string;
  auctionTime: string;
  currentBid: string;
  price: string;
  image: string;
};

const Trending = ({ data }: { data?: NFT[] }) => {
  const trendingCards = data && data.length > 0 ? (
    data.map((obj, index) => (
      <Card
        key={obj.id || `nft-${index}`}
        title={obj.title}
        image={obj.image}
        floor_price={obj.price}
      />
    ))
  ) : (
    Array.from({ length: 8 }).map((_, index) => (
      <Card key={`placeholder-${index}`} />
    ))
  );

  return (
    <div className="trending-container">
      <div className="trending">{trendingCards}</div>
    </div>
  );
};

export default Trending;
