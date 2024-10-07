"use client";

import React from "react";
import { motion } from "framer-motion";

const FeaturedArtists: React.FC = () => {
  return (
    <motion.div 
      className="w-full px-4 mx-auto max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.img
          className="w-8 h-8 mx-auto mb-4"
          alt="Sparkle icon"
          src="static/img/sparkle-icon-1.svg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.h2 
          className="text-center text-black font-heading-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Featured NFT Artists
        </motion.h2>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ArtistCard
          name="Lil Chan"
          nftCount={25}
          imageSrc="/static/img/image-placeholder-5.png"
        />
        <ArtistCard
          name="Emily Chen"
          nftCount={20}
          imageSrc="/static/img/image-placeholder-4.png"
        />
        <ArtistCard
          name="Eric Kim"
          nftCount={15}
          imageSrc="/static/img/image-placeholder-3.png"
        />
        <ArtistCard
          name="Jennifer Chung"
          nftCount={45}
          imageSrc="/static/img/image-placeholder-2.png"
        />
        <ArtistCard
          name="Mia Johnson"
          nftCount={35}
          imageSrc="/static/img/image-placeholder-1.png"
        />
        <ArtistCard
          name="Richard Ong"
          nftCount={30}
          imageSrc="/static/img/image-placeholder.png"
        />
      </motion.div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface ArtistCardProps {
  name: string;
  nftCount: number;
  imageSrc: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, nftCount, imageSrc }) => {
  return (
    <motion.div 
      className="flex items-center p-4 bg-white rounded-lg shadow-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.img
        src={imageSrc}
        alt={`${name}'s artwork`}
        className="object-cover w-24 h-24 mr-4 rounded-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
      <div>
        <motion.h3 
          className="mb-1 text-black font-heading-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name}
        </motion.h3>
        <motion.p 
          className="mb-1 font-heading-7 text-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Number of NFT Souvenirs:
        </motion.p>
        <motion.p 
          className="text-black font-heading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {nftCount}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FeaturedArtists;