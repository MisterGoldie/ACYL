import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/StreamPage.css";
import "../styles/StreamPageMobile.css"; // Mobile-specific fixes for Stream page


const StreamContent = () => {
  return (
    <motion.div 
      className="stream-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="stream-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Game On. Stream On.
      </motion.h1>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          At ACYL, gaming isn't just entertainment, it's a way to connect, 
          celebrate, and explore endless virtual worlds. Whether you're a 
          hardcore gamer, a casual fan, or just curious, there's always 
          something exciting to watch.
        </p>
      </motion.div>
      <Link to="/salemtries" style={{ display: 'block', textDecoration: 'none' }}>
        <OptimizedImage 
          src="/images/stream/salemstream.webp" 
          alt="Salem Stream" 
          className="stream-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
        />
      </Link>
      <Link to="/sazon" style={{ display: 'block', textDecoration: 'none' }}>
        <OptimizedImage 
          src="/images/stream/swsstream.webp" 
          alt="SWS Stream" 
          className="stream-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
        />
      </Link>
    </motion.div>
  );
};

const StreamPage = () => {
  return (
    <motion.div 
        className="stream-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/stream/streambg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <SiteHeader />
        <StreamContent />
      </motion.div>
  );
};

export default StreamPage;
