import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/StreamPage.css"; // Reusing Stream page styles for now
import "../styles/PodPlayrPageMobile.css"; // Mobile-specific styles for PodPlayr page


const PodPlayrContent = () => {
  return (
    <motion.div 
      className="stream-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <motion.div 
        className="stream-headline podplayr-logo-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto 20px', textAlign: 'center' }}
      >
        <OptimizedImage 
          src="/images/podplayr/pptextlogo.webp" 
          alt="PODPLAYR" 
          className="podplayr-logo-image"
          style={{ width: '100%', maxWidth: '600px' }}
        />
      </motion.div>
      
      <motion.div 
        className="mobile-podplayr-secondary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/podplayr/ppmobile1.webp" 
          alt="PODPLAYR Mobile Image" 
          className="mobile-ppmobile1-image"
        />
      </motion.div>
      
      <motion.div
        className="podplayr-video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto 1.5rem'
        }}
      >
        <OptimizedVideo
          src="/images/podplayr/ppintrovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          keepPlaying={true}
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        />
      </motion.div>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <p>
          PODPLAYR is a comprehensive web3 media player designed for the seamless playback of NFT audio, video, and visual content across multiple blockchain platforms. With its unique global tracking system, PODPLAYR combines play counts and likes for identical content regardless of where it's minted, creating a unified web3 music ecosystem. Discover trending content, build your personal library, and enjoy a mobile-optimized experience tailored for web3 music enthusiasts. Embed PODPLAYR widgets on your own site to showcase your favorite NFT content with style.
        </p>
        
        <motion.div
          className="podplayr-video-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
            width: '100%',
            maxWidth: '800px',
            margin: '2rem auto'
          }}
        >
          <OptimizedVideo
            src="/images/podplayr/privylogin.mp4"
            autoPlay
            loop
            muted
            playsInline
            keepPlaying={true}
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
            }}
          />
        </motion.div>
        
        <motion.div 
          className="stream-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ 
            marginTop: '2rem',
            maxWidth: '800px',
            textAlign: 'left' 
          }}
        >
          <p>
            PODPLAYR offers a seamless login experience that puts you in control of your digital music collection. With a simple click, you can log in using your Farcaster account or connect your favorite crypto wallet. This hassle-free authentication keeps your liked tracks and playlists synchronized across all your devices.
          </p>
          
          <motion.div 
            className="mobile-podplayr-tertiary-image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <OptimizedImage 
              src="/images/podplayr/ppmobile2.webp" 
              alt="PODPLAYR Mobile Image 2" 
              className="mobile-ppmobile2-image"
            />
          </motion.div>
          
          <p>
            The smart login system remembers your preferences even when you switch between devices, ensuring your favorite music is always just a tap away. For Farcaster users, PODPLAYR integrates directly with your existing account, making it even easier to jump in and start listening.
          </p>
          
          <p>
            Your privacy and security remain a priority. PODPLAYR only requests the permissions it needs to provide you with a personalized music experience. Whether you're a web3 expert or just looking for great music, our login system keeps the technical details behind the scenes so you can focus on what matters most: enjoying your media
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="podplayr-cta-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem',
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center'
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          Check out PODPLAYR
        </h2>
        <a 
          href="https://podplayr.xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2.5rem',
            backgroundColor: '#6A3DE8',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(106, 61, 232, 0.3)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#7B4FFF';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#6A3DE8';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Visit PODPLAYR
        </a>
      </motion.div>
    </motion.div>
  );
};

// Main page component
const PodPlayrPage = () => {
  return (
    <motion.div 
        className="page podplayr-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(to bottom, #1E1525, #2D1B69, #4B0082)',
          minHeight: '100vh'
        }}
      >
        <PodPlayrPageContent />
      </motion.div>
  );
};

// Content wrapper that uses Privy hooks
const PodPlayrPageContent = () => {
  return (
    <>
      <SiteHeader />
      <motion.div 
        className="page-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PodPlayrContent />
      </motion.div>
    </>
  );
};

export default PodPlayrPage;
