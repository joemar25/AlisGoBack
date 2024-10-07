"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-16 text-white bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-4 text-2xl font-heading-3">
              Stay Up to Date with <span className="text-[#fefefe]">AlisGo</span>
            </h3>
            <p className="max-w-md mb-4 opacity-50 font-paragraph">
              Subscribe to our newsletter for more updates and details on our promotions.
            </p>
          </motion.div>
          {/* Subscription Input Section */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address ..."
                className="w-full px-6 py-4 pr-24 text-black rounded-full"
              />
              <motion.button
                className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#6986f1] via-[#7e31c1] to-[#e74ed8] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="w-8 h-3"
                  alt="Arrow icon"
                  src="static/img/arrow-icon-5.svg"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Logo, Navigation, and Social Media Section */}
        <motion.div
          className="flex flex-col items-center justify-between mb-12 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Logo */}
          <h2 className="mb-4 text-4xl font-heading-2 md:mb-0">
            <span className="text-[#a70bce]">Alis.</span>
            <span className="text-[#fefefe]">Go</span>
          </h2>
          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <motion.a
              href="#"
              className="transition-opacity opacity-75 hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#"
              className="transition-opacity opacity-75 hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Creators
            </motion.a>
            <motion.a
              href="#"
              className="transition-opacity opacity-75 hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </nav>
          {/* Social Media Icon */}
          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              className="h-8"
              alt="Social media"
              src="static/img/social-media.png"
            />
          </motion.div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-between pt-8 border-t border-gray-700 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-4 text-sm opacity-50 md:mb-0">
            Copyright © Alis.Go 2024. All rights reserved.
          </p>
          <p className="text-sm opacity-50">
            Privacy Policy. Terms and Condition.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
