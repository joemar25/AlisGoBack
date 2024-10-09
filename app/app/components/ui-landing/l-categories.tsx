"use client";

import React from "react";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  return (
    <motion.div 
      className="w-full px-4 py-20 mx-auto max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img className="w-6 h-6 mr-2" alt="Sparkle icon" src="static/img/sparkle-icon.svg" />
        <h2 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
          Categories
        </h2>
      </motion.div>
      <motion.p 
        className="mb-8 font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Discover NFT art by categories
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <CategoryCard
          name="Albay"
          collections={326}
          images={[
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/8d/22/cagsawa-barangay-busay.jpg?w=900&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/42/35/b5/20180610-090223-largejpg.jpg?w=900&h=500&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/09/1d/13/lignon-hill.jpg?w=900&h=500&s=1",
          ]}
        />
        <CategoryCard
          name="Naga"
          collections={187}
          images={[
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/97/71/de/dsc-1475-largejpg.jpg?w=900&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7b/ed/d5/sonrisa-farm.jpg?w=900&h=500&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/42/35/b5/20180610-090223-largejpg.jpg?w=900&h=500&s=1",
          ]}
        />
        <CategoryCard
          name="Sorsogon"
          collections={201}
          images={[
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/be/b9/4b/pontoon-off-the-beach.jpg?w=900&h=-1&s=1",
           "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/05/49/b7/paguriran-island.jpg?w=900&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/d5/10/80/caption.jpg?w=900&h=500&s=1",
          ]}
        />
        <CategoryCard
          name="Donsol"
          collections={142}
          images={[
            "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001312305107/Donsol%252C%2520Sorsogon%2520Whale%2520Shark%2520Interaction%2520-%2520Day%2520Tour%2520from%2520Legazpi%2509-d966f3a1-c571-4636-ad23-cf35d75e226c.jpeg?_src=imagekit&tr=c-at_max,h-750,q-100,w-1000",
            "https://lh3.googleusercontent.com/p/AF1QipP_gxSBY8cJarXW4z0AQHV1GEArGFU9nojhhpki=s1360-w1360-h1020",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/89/29/74/palogtok-falls.jpg?w=900&h=-1&s=1",
          ]}
        />
      </motion.div>

      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.button 
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-heading-5 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] [font-style:var(--heading-5-font-style)] flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Categories
          <img
            className="w-5 h-5 ml-2"
            alt="Arrow icon"
            src="static/img/arrow-icon-6.svg"
          />
        </motion.button>
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

interface CategoryCardProps {
  name: string;
  collections: number;
  images: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, collections, images }) => {
  return (
    <motion.div 
      className="overflow-hidden bg-white shadow-lg rounded-xl"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="relative aspect-[4/3] p-2">
        <div className="absolute inset-0 grid grid-cols-2 gap-2">
          <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={images[0]}
              alt={`${name} 1`}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={images[1]}
              alt={`${name} 2`}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={images[2] || images[1]}
              alt={`${name} 3`}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
          {name}
        </h3>
        <p className="text-sm text-gray-600">{collections} Collections</p>
      </div>
    </motion.div>
  );
};

export default Categories;