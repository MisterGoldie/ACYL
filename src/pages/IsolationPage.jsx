import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
import "../styles/MobileMenu.css";
import "../styles/IsolationPageMobile.css"; // Mobile-specific styles for Isolation page

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
              <Link to="/events" className="dropdown-item">Events</Link>
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

// Mobile-specific content component with animations that shows the same images as desktop
const MobileIsolationContent = () => {
  return (
    <motion.div 
      className="mobile-isolation-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Title image */}
      <motion.div 
        className="mobile-iso-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/isolation/isotitle.png?v=9" 
          alt="Isolation" 
          className="mobile-iso-title-image"
        />
      </motion.div>

      {/* Meditate text image */}
      <motion.div 
        className="mobile-iso-meditate"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/isolation/meditatetext.png?v=4" 
          alt="A man attempts to meditate." 
          className="mobile-iso-meditate-image"
        />
      </motion.div>

      {/* Prisoner image */}
      <motion.div 
        className="mobile-iso-prisoner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/isolation/prisoner.png?v=3" 
          alt="Prisoner meditating" 
          className="mobile-iso-prisoner-image"
        />
      </motion.div>
    </motion.div>
  );
};

const IsolationContent = () => {
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
    return <MobileIsolationContent />;
  }
  
  // Desktop version
  return (
    <div className="film-content" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      {/* Main title at the top center */}
      <div 
        className="title-container"
        style={{
          position: 'absolute',
          top: '2%',
          left: '0',
          right: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10
        }}
      >
        <div 
          className="film-headline"
          style={{ 
            width: '45%',
            maxWidth: '500px',
            opacity: 1
          }}
        >
          <OptimizedImage 
            src="/images/isolation/isotitle.png?v=9" 
            alt="Isolation" 
            style={{ 
              width: '100%',
              display: 'block'
            }}
          />
        </div>
      </div>
      
      {/* Meditate text image on the left side */}
      <div 
        className="film-description"
        style={{ 
          position: 'absolute',
          top: '35%',
          left: '15%',
          zIndex: 5,
          width: '20%',
          opacity: 1
        }}
      >
        <OptimizedImage 
          src="/images/isolation/meditatetext.png?v=4" 
          alt="A man attempts to meditate." 
          style={{ 
            width: '100%',
            display: 'block',
            marginBottom: '20px'
          }}
        />
      </div>
      
      {/* Isolation trailer video without mute button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '55%',
          left: '35%',
          transform: 'translateX(-50%)',
          zIndex: 6,
          width: '100%',
          maxWidth: '500px',
          opacity: 1
        }}
      >
        <OptimizedVideo
          src="/images/isolation/isotrailer.mp4"
          autoPlay
          loop
          muted={true}
          playsInline
          keepPlaying={true}
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>
      
      {/* Prisoner on the right */}
      <div
        style={{ 
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          zIndex: 4,
          width: '20%',
          opacity: 1
        }}
      >
        <OptimizedImage 
          src="/images/isolation/prisoner.png?v=3" 
          alt="Prisoner meditating" 
          style={{
            width: '100%',
            display: 'block'
          }}
        />
      </div>
      
      {/* Mint button and details - hidden initially */}
      <div className="film-details" style={{ display: 'none' }}>
        <div className="film-title-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Isolation (2025)</h2>
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
    </div>
  );
};

// Main page component
const IsolationPage = () => {
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
      <IsolationPageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const IsolationPageContent = () => {
  return (
    <motion.div
      className="film-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'url("/images/isolation/isobg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <Header />
      <div className="page-content">
        <IsolationContent />
      </div>
    </motion.div>
  );
};

export default IsolationPage;
