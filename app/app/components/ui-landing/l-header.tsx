"use client";
import React from "react";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1250px] mx-auto px-4 h-20 flex items-center justify-between">
        <motion.p
          className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-[#a70bce]">Alis.</span>
          <span className="text-[#24282b]">Go</span>
        </motion.p>
        <nav className="flex items-center space-x-8">
          <NavItem text="Products" />
          <NavItem text="Creators" />
          <NavItem text="Contact" />
        </nav>
        {/*
        <motion.div
          className="w-40 h-14 bg-black rounded-[50px] flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="font-heading-7 font-[number:var(--heading-7-font-weight)] text-white text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
            My Wallet
          </div>
        </motion.div>
        */}
        <motion.div
          className="w-40 h-14 bg-black rounded flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <WalletMultiButton className="" aria-label="Connect Wallet" />
        </motion.div>
      </div>
    </motion.header>
  );
};

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <motion.div
    className="opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)] cursor-pointer"
    whileHover={{ scale: 1.1, opacity: 1 }}
    whileTap={{ scale: 0.95 }}
  >
    {text}
  </motion.div>
);

export default Header;