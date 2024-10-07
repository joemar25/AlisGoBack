"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ: React.FC = () => {
  return (
    <section className="w-full max-w-3xl px-4 py-16 mx-auto">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="w-8 h-8 mx-auto mb-4"
          alt="Sparkle icon"
          src="static/img/sparkle-icon-6.svg"
        />
        <h3 className="mb-2 text-2xl text-black font-heading-3">Frequently Asked</h3>
        <h2 className="text-4xl text-black font-heading-1">QUESTIONS</h2>
      </motion.div>

      <div className="space-y-4">
        <FAQItem
          question="What is an NFT?"
          answer="NFT stands for Non-Fungible Token, which is a unique digital asset that is stored on a blockchain and represents ownership of a particular piece of content."
        />
        <FAQItem
          question="What kind of digital art can I buy on AlisGo?"
          answer="On AlisGo, you can buy a wide variety of travel-themed digital art NFTs, including landscapes, landmarks, cultural experiences, and more."
        />
        <FAQItem
          question="How can I sell my travel-themed NFTs on AlisGo?"
          answer="To sell your NFTs on AlisGo, you need to create an account, connect your wallet, and then upload your digital art. Our platform will guide you through the process of minting and listing your NFT for sale."
        />
        <FAQItem
          question="Can I buy NFTs with traditional currency?"
          answer="Currently, NFTs on AlisGo are purchased using cryptocurrency. However, we're working on integrating traditional payment methods in the future."
        />
        <FAQItem
          question="What happens if I buy an NFT and the creator deletes it?"
          answer="Once you purchase an NFT, it's stored on the blockchain and linked to your wallet. Even if the creator deletes the original file, your ownership of the NFT remains intact on the blockchain."
        />
        <FAQItem
          question="Can I resell NFT art that I have bought on AlisGo?"
          answer="Yes, you can resell NFTs you've purchased on AlisGo. Our platform supports secondary sales, allowing you to list your owned NFTs for resale."
        />
        <FAQItem
          question="How long does an auction last on AlisGo?"
          answer="Auction durations on AlisGo can vary. Creators can set their preferred auction length, typically ranging from 24 hours to 7 days."
        />
        <FAQItem
          question="How do I know if an NFT is authentic?"
          answer="All NFTs on AlisGo are verified on the blockchain, ensuring their authenticity. You can always check the contract address and token ID to verify an NFT's legitimacy."
        />
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg text-black font-heading-4">{question}</h4>
        <motion.img
          className="w-6 h-6"
          alt="Toggle icon"
          src="/static/img/sparkle-icon-7.svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="pb-4 font-paragraph text-gray"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
