import React, { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/HomePage.css";
import "../styles/HomePageMobile.css"; // Mobile-specific fixes for homepage only


const HomeContent = () => {
  return (
    <motion.div 
      className="page-content homepage-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="acyl-description-container">
        <OptimizedImage src="/bighomepagelogo.webp" alt="ACYL Logo" className="acyl-big-logo" />
        <p className="acyl-description-body">
          Welcome to Any Colour You Like, a new age media legacy company that champions independent voices and experimental storytelling. We believe that creativity thrives when it isn’t restricted, and we’re here to amplify the ideas that mainstream media overlooks. Our platform is home for the unconventional. A space for fearless filmmakers, writers, and creators who push limits, reimagine formats, and challenge perspectives.
        </p>
        <p className="acyl-description-body">
          At ACYL we celebrate the power of risk taking in media. Whether it’s a bold documentary, an experimental series, or a genre-defying art piece, our mission is to give a platform for work that disrupts, inspires, and evolves. Dive into a world where new ideas flourish, and join us in redefining the future of media.
        </p>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  useEffect(() => {
    // More aggressive scroll reset with multiple approaches
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Force layout recalculation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  return (
    <motion.div 
        className="multicolored-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ minHeight: '100vh', height: 'auto' }}
      >
        <SiteHeader />
        <HomeContent />
      </motion.div>
  );
};

export default HomePage;
