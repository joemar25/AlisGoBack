"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const WhyChooseUs: React.FC = () => {
  // GSAP animation ref for the feature cards
  const featureCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featureCardsRef.current) {
      gsap.fromTo(
        featureCardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full px-4 py-16 mx-auto max-w-7xl">
      <motion.img
        className="absolute top-0 left-0 object-cover w-full h-full opacity-10"
        alt="Ornaments"
        src="static/img/ornaments.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center mb-2">
          <img
            className="w-6 h-6 mr-2"
            alt="Sparkle icon"
            src="static/img/sparkle-icon-15.svg"
          />
          <h2 className="text-2xl text-black font-heading-3">Why choose</h2>
        </div>
        <h1 className="mb-4 text-5xl text-black font-heading-1">AlisGo</h1>
        <h3 className="mb-12 text-2xl text-black font-heading-3">
          for Your Travel NFT Collection?
        </h3>

        {/* Feature Cards Section */}
        <div
          ref={featureCardsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            title="Unique NFT Travel Collections"
            description="Our platform features a wide variety of NFT art collections from talented creators around the world."
            iconSrc="/static/img/menu-icon-1.svg"
          />
          <FeatureCard
            title="Creator-Friendly Platform"
            description="We offer a range of creator-friendly features, making it easy for creators to showcase and sell their unique digital art."
            iconSrc="/static/img/pen-icon.svg"
          />
          <FeatureCard
            title="User-Friendly Interface"
            description="Our platform is designed with the user in mind, making it easy to navigate and find the perfect NFT art piece for your collection."
            iconSrc="/static/img/heart-icon-9.svg"
          />
          <FeatureCard
            title="24/7 Customer Support"
            description="Our customer support team is available around the clock to assist with any questions or concerns you may have."
            iconSrc="/static/img/24-7-icon.svg"
          />
          <FeatureCard
            title="Secure Blockchain Transactions"
            description="We use advanced security measures to ensure that all transactions on our platform are safe and secure."
            iconSrc="/static/img/secure-icon.svg"
          />
          <FeatureCard
            title="Fair Pricing"
            description="We strive to keep our pricing competitive to ensure that you get the best value for your money."
            iconSrc="/static/img/money-icon-1.svg"
          />
        </div>
      </motion.div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconSrc }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img className="mb-4 w-14 h-14" alt="Feature icon" src={iconSrc} />
      <h4 className="mb-2 text-xl text-black font-heading-4">{title}</h4>
      <p className="text-sm font-paragraph text-gray">{description}</p>
    </motion.div>
  );
};

export default WhyChooseUs;
