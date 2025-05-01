import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/StreamPage.css"; // Reusing Stream page styles for now
import "../styles/MobileMenu.css";
import "../styles/PodPlayrPageMobile.css"; // Mobile-specific styles for PodPlayr page

// Header component that uses Privy hooks
const Header = () => {
  return (
    <motion.header 
      className="site-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-logo">
        <Link to="/">
          <OptimizedImage src="/circleheaderlogo.png" alt="ACYL Logo" className="circle-header-logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/tv">TV</Link></li>
          <li><Link to="/film">Film</Link></li>
          <li><Link to="/radio">Radio</Link></li>
          <li><Link to="/stream">Stream</Link></li>
          <li className="more-dropdown">
            <Link to="#">More <span className="dropdown-arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link to="/contribute" className="dropdown-item">Contribute</Link>
              <Link to="/discover" className="dropdown-item">Discover</Link>
              <Link to="/podplayr" className="dropdown-item active">PODPLAYR</Link>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

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
        style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}
      >
        <OptimizedImage 
          src="/images/podplayr/pptextlogo.webp" 
          alt="PODPLAYR" 
          className="podplayr-logo-image"
          style={{ width: '100%', maxWidth: '600px' }}
        />
      </motion.div>
      
      <motion.div
        className="podplayr-video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
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
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        >
          <source src="/images/podplayr/ppintrovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <p>
          PODPLAYR is our innovative platform for podcast discovery and enjoyment. 
          Designed for both casual listeners and podcast enthusiasts, PODPLAYR offers 
          a seamless experience for exploring and enjoying audio content from creators around the world.
        </p>
        <p>
          With curated collections, personalized recommendations, and an intuitive interface, 
          PODPLAYR makes it easy to find your next favorite show. Stay connected with your 
          favorite creators and discover new voices in the ever-expanding podcast universe.
        </p>
      </motion.div>
      
      <motion.div
        className="widget-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          marginTop: '3rem',
          marginBottom: '3rem',
          maxWidth: '800px',
          width: '100%',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '1.5rem',
          background: 'rgba(20, 10, 30, 0.3)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
        }}
      >
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
          letterSpacing: '1px',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>FEATURED SECTION MEDIA</h3>
        
        <iframe 
          src="https://podplayr.xyz/widget?contract=0x79428737e60a8a8db494229638eaa5e52874b6fb&tokenId=79428737ea&theme=dark&size=large" 
          width="100%" 
          height="120px" 
          frameBorder="0" 
          scrolling="no"
          allow="autoplay; encrypted-media" 
          title="PODPLAYR Widget"
          style={{
            border: 'none',
            overflow: 'hidden',
            background: 'transparent',
            borderRadius: '12px'
          }}
        ></iframe>
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
      <Header />
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
