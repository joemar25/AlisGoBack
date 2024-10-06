"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

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
      <header className="sticky top-0 z-50 flex items-center justify-between py-3 px-4 bg-white dark:bg-gray-900 shadow-md w-full">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          className="h-10 w-1/3 rounded p-2 text-gray-900 dark:text-gray-100 border-none"
        />
        <div className="w-6 h-6 bg-gray-400 rounded-full" />
      </header>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between py-3 px-4 transition-colors ${scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
        }`}
    >
      <input
        type="search"
        placeholder="Search..."
        aria-label="Search"
        className="h-10 w-full max-w-xs rounded p-2 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 flex items-center justify-center rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "light" ? (
            <Sun size={24} className="text-yellow-500" />
          ) : (
            <Moon size={24} className="text-gray-400" />
          )}
        </button>
        <Image
          src={Notifications}
          alt="Notifications"
          aria-label="View Notifications"
          unoptimized
          className="w-6 h-6 cursor-pointer"
        />
        <Image
          src={Avatar}
          alt="User Avatar"
          aria-label="User Profile"
          unoptimized
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        <WalletMultiButton className="text-sm h-10 flex items-center justify-center px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors" aria-label="Connect Wallet" />
      </div>
    </header>
  );
};

export { Header };
