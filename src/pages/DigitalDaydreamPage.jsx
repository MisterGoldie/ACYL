import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
import "../styles/MobileMenu.css";
import "../styles/DigitalDaydreamPageMobile.css"; // Mobile-specific styles for DigitalDaydream page

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
          <li><Link to="/film" className="active">Film</Link></li>
          <li><Link to="/radio">Radio</Link></li>
          <li><Link to="/stream">Stream</Link></li>
          <li className="more-dropdown">
            <Link to="#">More <span className="dropdown-arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link to="/contribute" className="dropdown-item">Contribute</Link>
              <Link to="/discover" className="dropdown-item">Discover</Link>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

const DigitalDaydreamContent = () => {
  return (
    <motion.div 
      className="film-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="film-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Digital Daydream
      </motion.h1>
      
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Digital Daydream explores the intersection of technology and imagination in our 
          increasingly connected world. Through stunning visuals and immersive storytelling, 
          this film invites viewers to question the boundaries between reality and the digital realm.
        </p>
        <p>
          As we navigate the ever-evolving landscape of virtual experiences, Digital Daydream 
          offers a thought-provoking glimpse into a future where our dreams and digital lives 
          become increasingly intertwined.
        </p>
      </motion.div>
      
      <OptimizedImage 
        src="/images/digitaldaydream/ddwithtext.png" 
        alt="Digital Daydream With Text" 
        style={{
          display: 'block',
          margin: '2.5rem auto 0 auto',
          maxWidth: '1000px',
          width: '100%'
        }}
      />
      
      <div className="film-details">
        <div className="film-title-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Digital Daydream (2025)</h2>
          <p style={{ fontSize: '1rem', color: '#333' }}>ANY COLOUR YOU LIKE</p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>NFT on Base Network</p>
            
            {/* Direct Mint Button to Manifold */}
            <a 
              href="https://app.manifold.xyz/c/digital-daydream" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none',
                margin: '20px auto',
              }}
            >
              Mint on Manifold
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main page component
const DigitalDaydreamPage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms', 'farcaster'],
        appearance: {
          theme: 'light',
          accentColor: '#0f62fe',
          showWalletLoginFirst: false,
          layout: 'modal',
          defaultView: 'login',
          logo: '/acylprivylogo.png',
          backgroundColor: '#fff',
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
          noPromptOnSignature: false,
        },
      }}
    >
      <DigitalDaydreamPageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const DigitalDaydreamPageContent = () => {
  return (
    <motion.div
      className="film-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)',
        minHeight: '100vh',
        color: '#333'
      }}
    >
      <Header />
      <div className="page-content">
        <DigitalDaydreamContent />
      </div>
    </motion.div>
  );
};

export default DigitalDaydreamPage;
