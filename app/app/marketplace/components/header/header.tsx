"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Notifications from "./images/Notifications.svg";
import Avatar from "./images/Avatar.svg";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 py-3 bg-white shadow-md dark:bg-gray-900">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 bg-gray-400 rounded-full" />
        </div>
      </header>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between py-3 px-6 transition-colors ${scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex items-center">
        <p className="relative top-1 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-transparent text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
          <span className="text-[#a70bce] font-heading-4 [font-style:var(--heading-4-font-style)] font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
            Alis.
          </span>
          <span className="text-[#24282b] font-heading-4 [font-style:var(--heading-4-font-style)] font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
            Go
          </span>
        </p>
      </div>
      <div className="flex items-center space-x-6">
        {/* <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {theme === "light" ? (
            <Sun size={24} className="text-yellow-500" />
          ) : (
            <Moon size={24} className="text-gray-400" />
          )}
        </button> */}
        <Image
          src={Notifications}
          alt="Notifications"
          aria-label="View Notifications"
          unoptimized
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Image
          src={Avatar}
          alt="User Avatar"
          aria-label="User Profile"
          unoptimized
          className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80"
        />
        <WalletMultiButton className="flex items-center justify-center h-10 px-4 py-2 text-sm text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700" aria-label="Connect Wallet" />
      </div>
    </header>
  );
};

export { Header };
