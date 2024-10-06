import React, { useEffect, useState } from "react";
import "./profile.css";
import pfp from "../header/images/Avatar.svg";
import Verify from "./images/Verify.svg";
import TWOFA from "./images/2FA.svg";
import Avatar from "./images/Avatar.svg";
import NFT from "../card/images/NFT.svg";
import Image from "next/image";

const Profile: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const unverif =
        "Looks like you are not verified yet. Verify yourself to use the full potential of NFT Marketplace.";

    const Following: React.FC<{ username: string; items: number }> = ({ username, items }) => (
        <div className="following--container dark:bg-gray-800 dark:text-white bg-white text-black">
            <div className="following">
                {isClient && (
                    <Image src={Avatar} alt={`Avatar of ${username}`} unoptimized />
                )}
                <div>
                    <h1>{username}</h1>
                    <div>{items} items</div>
                </div>
            </div>
            <button type="button" aria-label={`Unfollow ${username}`}>
                Unfollow
            </button>
        </div>
    );

    const Purchased: React.FC<{ nftName: string; owner: string }> = ({ nftName, owner }) => (
        <div className="purchased-item">
            {isClient && (
                <>
                    <Image className="nft-image" src={NFT} alt={`Purchased NFT: ${nftName}`} unoptimized />
                    <Image className="avatar-image" src={Avatar} alt={`Owner avatar: ${owner}`} unoptimized />
                </>
            )}
            <h1>{nftName}</h1>
        </div>
    );

    const Collection: React.FC<{ collectionName: string; owner: string }> = ({ collectionName, owner }) => (
        <div className="collection-item">
            {isClient && (
                <>
                    <Image className="nft-image" src={NFT} alt={`NFT collection item: ${collectionName}`} unoptimized />
                    <Image className="avatar-image" src={Avatar} alt={`Owner avatar: ${owner}`} unoptimized />
                </>
            )}
            <h1>{collectionName}</h1>
        </div>
    );

    return (
        <main className="profile--container dark:bg-gray-800 dark:text-white bg-white text-black">
            <h1>Profile</h1>
            <div className="label--container">
                <div>Welcome to your Profile</div>
                <div className="breadcrumb">
                    <div>Home</div>
                    <div>{`>`}</div>
                    <div>Profile</div>
                </div>
            </div>
            <div className="account--info">
                <div className="verif--container dark:bg-gray-700 dark:text-white bg-gray-100 text-black">
                    {isClient && <Image src={pfp} alt="Profile picture of Jane Doe" unoptimized />}
                    <h1>Welcome, Jane Doe</h1>
                    <div className="verif--desc">{unverif}</div>
                    <div className="verif--action">
                        {isClient && <Image src={Verify} alt="Verification badge" unoptimized />}
                        <div>Verify account</div>
                    </div>
                    <div className="divider"></div>
                    <div className="verif--action">
                        {isClient && <Image src={TWOFA} alt="Two-factor authentication setup" unoptimized />}
                        <div>Two-factor Authentication (2FA)</div>
                    </div>
                </div>
                <div>
                    <h1>Following</h1>
                    <div className="following--element-container">
                        {["Papaya", "Mango", "Grapes", "Orange"].map((username, index) => (
                            <Following key={index} username={username} items={60} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="label--container">
                <h1>Recently Purchased NFTs</h1>
            </div>
            <div className="purchase--container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Purchased key={index} nftName={`Liquid Wave #${index + 1}`} owner="Jane Doe" />
                ))}
            </div>
            <div className="label--container">
                <h1>My Collections</h1>
            </div>
            <div className="collection--container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Collection key={index} collectionName={`Liquid Wave Collection #${index + 1}`} owner="Jane Doe" />
                ))}
            </div>
        </main>
    );
};

export default Profile;
