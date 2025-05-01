import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
import "../styles/MobileMenu.css";
import "../styles/GroupThinkLovePageMobile.css"; // Mobile-specific styles for GroupThinkLove page

// Mobile-specific content component with animations that shows the title and text
const MobileGroupThinkLoveContent = () => {
  return (
    <motion.div 
      className="mobile-groupthinklove-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="mobile-gtl-logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/groupthinklove/gtllogo.webp" 
          alt="Group Think Love" 
          className="mobile-gtl-logo-image"
        />
      </motion.div>
      <motion.div 
        className="mobile-gtl-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Group (Think) Love is intended as a piece of meta-satire, exploring the human condition in the age of AI. 
          An era where computers are rapidly becoming not only our intimate companions and closest confidants 
          but reflections of ourselves. It delves into the essence of artificial intelligence, highlighting its 
          role as the amalgamation of all human knowledge, creativity, and culture, and positions AI as the 
          familial successor in human evolution. Crafted entirely through AI tools, it simultaneously references 
          pivotal moments and ideas from AI culture itself, embodying the very subject it critiques.
        </p>
      </motion.div>
    </motion.div>
  );
};

const GroupThinkLoveContent = () => {
  // Check if the device is mobile
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If mobile, show simplified content
  if (isMobile) {
    return <MobileGroupThinkLoveContent />;
  }
  
  // Desktop version
  return (
    <motion.div 
      className="film-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="film-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ maxWidth: '400px', margin: '0 auto 20px' }}
      >
        <OptimizedImage 
          src="/images/groupthinklove/gtllogo.webp" 
          alt="Group Think Love" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>
      
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Group (Think) Love is intended as a piece of meta-satire, exploring the human condition in the age of AI. 
          An era where computers are rapidly becoming not only our intimate companions and closest confidants 
          but reflections of ourselves. It delves into the essence of artificial intelligence, highlighting its 
          role as the amalgamation of all human knowledge, creativity, and culture, and positions AI as the 
          familial successor in human evolution. Crafted entirely through AI tools, it simultaneously references 
          pivotal moments and ideas from AI culture itself, embodying the very subject it critiques.
        </p>
      </motion.div>
      
      <OptimizedImage 
        src="/images/groupthinklove/gtlwithtext.png" 
        alt="Group Think Love With Text" 
        style={{
          display: 'block',
          margin: '2.5rem auto 0 auto',
          maxWidth: '1000px',
          width: '100%'
        }}
      />
      
      <div className="film-details">
        <div className="film-title-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Group (Think) Love (2025)</h2>
          <p style={{ fontSize: '1rem', color: '#ccc' }}>ANY COLOUR YOU LIKE</p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>$5.00</p>
            <button 
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
          <img src="/circleheaderlogo.png" alt="ACYL Logo" className="circle-header-logo" />
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

// Main page component
const GroupThinkLovePage = () => {
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
      <GroupThinkLovePageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const GroupThinkLovePageContent = () => {
  return (
    <motion.div
      className="film-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'url("/images/groupthinklove/gtlbg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <Header />
      <div className="page-content">
        <GroupThinkLoveContent />
      </div>
    </motion.div>
  );
};

export default GroupThinkLovePage;
