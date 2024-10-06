import React from "react";
import "./collection.css";
import Trending from "../trending/trending";

const Collection: React.FC = () => {
  return (
    <main className="text-black bg-white collection--container dark:bg-gray-800 dark:text-white">
      <div className="header-section">
        <h1 className="title">Collections</h1>
        <div className="label--container">
          <div>Welcome to your Collection</div>
          <div id="label">
            <div id="home">Home</div>
            <div className="breadcrumb-divider">{`>`}</div>
            <div id="collections">Collections</div>
          </div>
        </div>
        <div id="selector">
          <div id="selected" className="selector--item active">
            All
          </div>
          <div className="selector--item">Artwork</div>
          <div className="selector--item">Music</div>
        </div>
      </div>
      <Trending />
    </main>
  );
};

export default Collection;
