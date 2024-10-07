"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const NewestSouvenirs: React.FC = () => {
  // GSAP animation ref for the souvenirs section
  const souvenirsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (souvenirsSectionRef.current) {
      gsap.fromTo(
        souvenirsSectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section ref={souvenirsSectionRef} className="w-full px-4 mx-auto max-w-7xl">
      <motion.div
        className="flex items-center mb-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="w-6 h-6 mr-2"
          alt="Sparkle icon"
          src="static/img/sparkle-icon-4.svg"
        />
        <h2 className="text-2xl text-black font-heading-3">
          Newest Souvenirs
        </h2>
      </motion.div>
      <motion.p
        className="mb-6 font-paragraph text-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Explore the Latest NFT Travel Souvenirs
      </motion.p>
      
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="flex space-x-6">
          <FilterOption icon="menu-icon.svg" label="Category" />
          <FilterOption icon="money-icon.svg" label="Price Range" />
          <FilterOption icon="heart-icon.svg" label="Likes" />
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-black font-heading-5">Most Recent</span>
          <img className="w-6 h-6" alt="Arrow icon" src="static/img/arrow-icon-3.svg" />
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <SouvenirCard
          imageSrc="/static/img/unnamed-2.png"
          title="Boracay"
          creator="Emily Chen"
          price="0.50 ETH"
          likes={150}
        />
        <SouvenirCard
          imageSrc="/static/img/2023-12-09-1.png"
          title="Greenbelt"
          creator="Richard Ong"
          price="0.80 ETH"
          likes={200}
        />
        <SouvenirCard
          imageSrc="/static/img/2021-10-29-1.png"
          title="Siargao Island"
          creator="Alex Kim"
          price="0.70 ETH"
          likes={125}
        />
        <SouvenirCard
          imageSrc="/static/img/the-sleeping-lion-mountain-on-the-foreground-of-mayon-volcano-1.png"
          title="Mayon Volcano"
          creator="Mia Johnson"
          price="0.60 ETH"
          likes={180}
        />
      </motion.div>
    </section>
  );
};

interface FilterOptionProps {
  icon: string;
  label: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({ icon, label }) => (
  <motion.div
    className="flex items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img className="w-5 h-5 mr-2" alt={`${label} icon`} src={`static/img/${icon}`} />
    <span className="text-black font-heading-5">{label}</span>
  </motion.div>
);

interface SouvenirCardProps {
  imageSrc: string;
  title: string;
  creator: string;
  price: string;
  likes: number;
}

const SouvenirCard: React.FC<SouvenirCardProps> = ({ imageSrc, title, creator, price, likes }) => {
  return (
    <motion.div
      className="overflow-hidden bg-white rounded-lg shadow-md"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-64"
        />
        <div className="absolute flex items-center px-3 py-1 bg-white rounded-full top-3 left-3">
          <img className="w-4 h-4 mr-2" alt="Heart icon" src="static/img/heart-icon-8.svg" />
          <span className="text-black font-heading-5">{likes}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl text-black font-heading-4">{title}</h3>
        <div className="flex items-center mb-4">
          <img
            src="/static/img/image-placeholder-12.png"
            alt="Creator"
            className="w-10 h-10 mr-3 rounded-full"
          />
          <span className="font-paragraph text-gray">{creator}</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-5 h-5 mr-2"
            alt="Ethereum icon"
            src="static/img/ethereum-icon-1.svg"
          />
          <div>
            <p className="text-xs opacity-75 text-gray">Starting price:</p>
            <p className="text-black font-heading-5">{price}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewestSouvenirs;
