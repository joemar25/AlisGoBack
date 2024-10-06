import React, { useEffect, useState } from "react";
import "./bid.css";
import Panel from "./Panel";

const Bid: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const panelData = Array.from({ length: 8 }).map((_, index) => ({
    nftName: `Cute Cube Cool #${index + 1}`,
    author: "John Abraham",
    price: "20.50 SOL",
    recentOffer: "20.50 SOL",
    timeLeft: "2 Hours 1 Min 30s",
    index,
  }));

  return (
    <main className="bids--container">
      <div className="header--section">
        <h1 className="title">Bids</h1>
        <div className="breadcrumb">
          <div className="breadcrumb-item">Home</div>
          <span className="breadcrumb-divider">{`>`}</span>
          <div className="breadcrumb-item">Bids</div>
        </div>
      </div>
      <div className="activity--container">
        <div className="activity--label">
          <label htmlFor="select-all" className="sr-only">
            Select all items
          </label>
          <input type="checkbox" id="select-all" aria-label="Select all items" />
          <div>Item List</div>
          <div>Open Price</div>
          <div>Your Offer</div>
          <div>Recent Offer</div>
          <div>Time Left</div>
          <div className="action-label">Action</div>
        </div>
        <div className="activity--div"></div>
        <div className="panel--container">
          {isClient &&
            panelData.map((data) => (
              <Panel
                key={data.index}
                nftName={data.nftName}
                author={data.author}
                price={data.price}
                recentOffer={data.recentOffer}
                timeLeft={data.timeLeft}
                index={data.index}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Bid;
