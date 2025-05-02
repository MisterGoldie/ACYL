import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
import "../styles/MobileMenu.css";
import "../styles/IFoundItPageMobile.css"; // Mobile-specific styles for IFoundIt page

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
              <Link to="/podplayr" className="dropdown-item">PODPLAYR</Link>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

// Mobile-specific content component with logo image and animations
const MobileIFoundItContent = () => {
  return (
    <motion.div 
      className="mobile-ifoundit-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="mobile-ifoundit-logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/ifoundit/ifilogo.webp" 
          alt="I Found It" 
          className="mobile-ifi-logo-image"
        />
      </motion.div>
      <motion.div 
        className="mobile-ifoundit-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      ></motion.div>
    </motion.div>
  );
};

const IFoundItContent = () => {
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
    return <MobileIFoundItContent />;
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}
      >
        <OptimizedImage 
          src="/images/ifoundit/ifilogo.webp" 
          alt="I Found It" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>
      
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          FROM MOVING OUT FOR COLLEGE TO THE BIG CITY IN 2018, CHARLES FOX DOCUMENTS HIS DISCOVERY OF THE TALENTED UNDERGROUND MUSIC SCENE IN CHICAGO. A COMMUNITY THAT SEEMS TO CONTINUE GROWING.
        </h1>
        
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginTop: '3rem',
          marginBottom: '3rem',
          textTransform: 'uppercase'
        }}>
          AVAILABLE NOW
        </h2>
      </motion.div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <OptimizedImage 
          src="/images/ifoundit/ifiwithtext.png" 
          alt="I Found It With Text" 
          style={{
            display: 'block',
            maxWidth: '400px',
            width: '100%'
          }}
        />
        
        <div className="film-details" style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>I Found It (2025)</h2>
          <p style={{ fontSize: '1rem', color: '#ccc', display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              marginRight: '0.5rem' 
            }}>
              <span style={{ color: 'black', fontSize: '0.7rem' }}>A</span>
            </span>
            ANY COLOUR YOU LIKE
          </p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>$5.00</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#ccc' }}>
                <span>4 / 1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main page component
const IFoundItPage = () => {
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
      <IFoundItPageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const IFoundItPageContent = () => {
  return (
    <motion.div
      className="film-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'url("/images/ifoundit/ifibg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <Header />
      <div className="page-content">
        <IFoundItContent />
      </div>
    </motion.div>
  );
};

export default IFoundItPage;
