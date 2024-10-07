"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.div 
      className="absolute w-[1246px] h-[1788px] top-[17px] left-[97px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-[1250px] h-[728px] top-28 left-0">
        <div className="absolute w-[1205px] h-[390px] top-0 left-px">
          <TextAnimation text="Join the" className="top-0 left-0" delay={0.2} />
          <TextAnimation text="New Travel" className="top-0 left-[507px]" delay={0.4} />
          <TextAnimation text="AlisGo" className="top-48 left-[935px]" delay={0.6} />
          <TextAnimation text="Revolution with" className="top-24 left-[417px]" delay={0.8} />
          
          <motion.p 
            className="absolute top-[330px] left-[344px] font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Your platform to discover, buy, and sell unique travel-themed NFTs.
            <br />
            From travelers, by travelers, for travelers.
          </motion.p>
          
          <motion.img
            src="/static/img/image-placeholder-22.png"
            alt="Placeholder 22"
            className="absolute w-[132px] h-[68px] top-3.5 left-[351px] object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.img
            src="/static/img/image-placeholder-23.png"
            alt="Placeholder 23"
            className="absolute w-72 h-[68px] top-[206px] left-[630px] object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
        </div>
        <motion.div 
          className="absolute w-[166px] h-[86px] top-[101px] left-[1076px]"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <div className="relative h-[86px]">
            <div className="absolute w-[86px] h-[86px] top-0 left-[57px] rounded-[43px] border border-solid border-black" />
            <div className="absolute w-[47px] h-[86px] top-0 left-[119px] rounded-[23.5px/43px] border border-solid border-black" />
            <img
              className="absolute w-[100px] h-[7px] top-[39px] left-0 object-cover"
              alt="Vector"
              src="static/img/vector.svg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <FeaturedItem
            imageSrc="/static/img/image-placeholder-24.png"
            title="Mayon Volcano view at Cagsawa Ruins"
            timeLeft="01 : 08 : 25 : 12"
            className="w-[297px] top-[132px] left-0 absolute h-[398px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <FeaturedItem
            imageSrc="/static/img/image-placeholder-25.png"
            title="Donsol Whale Shark Interaction Center"
            price="0.60 SOL"
            className="w-[299px] top-[330px] left-[951px] absolute h-[398px]"
          />
        </motion.div>
        <motion.div 
          className="absolute w-[237px] h-14 top-[430px] left-[660px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-[235px] h-14 rounded-[50px] border border-black flex items-center justify-center cursor-pointer">
            <div className="[font-family:'Syne',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
              Sell Your Creation
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute w-[289px] h-14 top-[430px] left-[345px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-[287px] h-14 rounded-[50px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)] flex items-center justify-center cursor-pointer">
            <div className="left-6 absolute top-[13px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-white text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              Explore Collection
            </div>
            <img
              className="absolute w-[41px] h-[15px] top-[21px] left-[223px]"
              alt="Arrow icon"
              src="static/img/arrow-icon-6.svg"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TextAnimation: React.FC<{ text: string; className: string; delay: number }> = ({ text, className, delay }) => (
  <motion.div 
    className={`absolute ${className} text-[length:var(--heading-1-font-size)] leading-[var(--heading-1-line-height)] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black tracking-[var(--heading-1-letter-spacing)] whitespace-nowrap [font-style:var(--heading-1-font-style)]`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    {text}
  </motion.div>
);

interface FeaturedItemProps {
  imageSrc: string;
  title: string;
  timeLeft?: string;
  price?: string;
  className: string;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({ imageSrc, title, timeLeft, price, className }) => {
  return (
    <motion.div 
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative w-[295px] h-[398px] bg-white rounded-[25px] shadow-drop-shadow-1">
        <img
          src={imageSrc}
          alt={title}
          className="absolute w-[263px] h-[235px] top-4 left-4 rounded-[25px] object-cover"
        />
        <div className="absolute w-[265px] h-[115px] top-[267px] left-4">
          <p className="absolute w-[258px] top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
            {title}
          </p>
          {timeLeft && (
            <div className="absolute w-[265px] h-10 top-[75px] left-0">
              <div className="relative w-[263px] h-10 rounded-[50px] border border-solid border-black">
                <p className="absolute top-px left-[63px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                  {timeLeft}
                </p>
              </div>
            </div>
          )}
          {price && (
            <div className="absolute w-full h-10 top-[75px] left-0 flex justify-between items-center">
              <div className="font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                {price}
              </div>
              <div className="w-[87px] h-[34px]">
                <div className="relative w-[85px] h-[34px] rounded-[10px] border border-solid border-gray">
                  <div className="absolute top-px left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    BID
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;