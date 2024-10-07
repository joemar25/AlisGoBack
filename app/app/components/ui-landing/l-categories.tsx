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
            "/static/img/albay-1.jpg",
            "/static/img/albay-2.jpg",
          ]}
        />
        <CategoryCard
          name="Naga"
          collections={187}
          images={[
            "/static/img/naga-1.jpg",
            "/static/img/naga-2.jpg",
            "/static/img/naga-3.jpg",
            "/static/img/naga-4.jpg",
          ]}
        />
        <CategoryCard
          name="Sorsogon"
          collections={201}
          images={[
            "/static/img/sorsogon-1.jpg",
            "/static/img/sorsogon-2.jpg",
            "/static/img/sorsogon-3.jpg",
          ]}
        />
        <CategoryCard
          name="Donsol"
          collections={142}
          images={[
            "/static/img/donsol-1.jpg",
            "/static/img/donsol-2.jpg",
            "/static/img/donsol-3.jpg",
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
      className="overflow-hidden bg-white rounded-lg shadow-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="grid grid-cols-2 gap-1 p-1">
        {images.map((src, index) => (
          <img
            key={index}
            className={`w-full h-24 object-cover ${index === 0 ? 'col-span-2 h-36' : ''}`}
            src={src}
            alt={`${name} ${index + 1}`}
          />
        ))}
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