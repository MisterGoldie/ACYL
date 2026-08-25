import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/TVPage.css";
import "../styles/TVPageMobile.css"; // Mobile-specific fixes for TV page


const TVContent = () => {
  return (
    <motion.div 
      className="tv-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="tv-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        A Network by Creators, for Creators
      </motion.h1>
      
      <motion.div 
        className="tv-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          At Any Colour You Like we're redefining television as a space where creativity 
          knows no bounds. Built by creators, for creators, we are a platform that celebrates 
          bold ideas, diverse perspectives, and groundbreaking stories.
        </p>
        <p>
          Here, content isn't dictated by formulas or trends. It's driven by passion and 
          innovation. We empower creators to share their vision with audiences who crave 
          fresh, authentic perspectives. From compelling dramas and laugh-out-loud 
          comedies to thought-provoking documentaries and experimental formats, we're 
          giving creators the freedom to make the stories they want to tell.
        </p>
        <p>
          This isn't just a network, it's a creative community. Join us as we revolutionize 
          television, amplify independent voices, and bring creator-driven content to the 
          forefront.
        </p>
      </motion.div>
      
      <motion.div 
        className="coming-soon"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2>Coming Soon</h2>
        {/* Arthouse image removed */}
        <OptimizedImage 
          src="/images/tv/afuerafont.webp" 
          alt="Afuera Font Logo" 
          className="tv-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const TVPage = () => {
  return (
    <motion.div 
        className="tv-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/tv/tvbg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <SiteHeader />
        <TVContent />
      </motion.div>
  );
};

export default TVPage;
