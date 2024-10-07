"use client";

import React from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Header from "../components/ui-landing/l-header";
import Hero from "../components/ui-landing/l-hero";
import Categories from "../components/ui-landing/l-categories";
import FeaturedArtists from "../components/ui-landing/l-featuredartists";
import NewestSouvenirs from "../components/ui-landing/l-newestsouvenirs";
import WhyChooseUs from "../components/ui-landing/l-whychooseus";
import FAQ from "../components/ui-landing/l-faq";
import Footer from "../components/ui-landing/l-footer";
import CollectionsAndAuctions from "../components/ui-landing/l-collectandauct";

export const Landing = () => {
  return (
    <div className="bg-[#fefefe] flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-full relative">
        <Header />

        {/* Hero Section */}
        <ScrollRevealSection marginTop="0">
          <Hero />
        </ScrollRevealSection>

        {/* Categories Section */}
        <ScrollRevealSection marginTop="750px">
          <Categories />
        </ScrollRevealSection>

        {/* Featured Artists Section */}
        <ScrollRevealSection marginTop="20px">
          <FeaturedArtists />
        </ScrollRevealSection>

        {/* Collections and Auctions Section */}
        <ScrollRevealSection marginTop="20px">
          <CollectionsAndAuctions />
        </ScrollRevealSection>

        {/* Newest Souvenirs Section */}
        <ScrollRevealSection marginTop="20px">
          <NewestSouvenirs />
        </ScrollRevealSection>

        {/* Why Choose Us Section */}
        <ScrollRevealSection marginTop="20px">
          <WhyChooseUs />
        </ScrollRevealSection>

        {/* FAQ Section */}
        <ScrollRevealSection marginTop="20px">
          <FAQ />
        </ScrollRevealSection>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

// Helper component for wrapping each section with scroll effect and custom margin
const ScrollRevealSection: React.FC<{ children: React.ReactNode; marginTop: string }> = ({ children, marginTop }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      style={{ marginTop }} // Use inline style to handle marginTop correctly
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // Ensure that the animation triggers correctly when in view
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default Landing;
