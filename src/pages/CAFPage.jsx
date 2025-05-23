import React, { useState, useEffect } from "react";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/CAFPage.css";
import "../styles/CAFPageMobile.css";
import "../styles/MobileMenu.css";

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

// Mobile-specific content component with animations
const MobileCAFContent = () => {
  return (
    <motion.div 
      className="mobile-caf-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-caf-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        CTRL + ALT + FILM
      </motion.h1>
      
      <motion.div
        className="mobile-caf-secondary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/caf/cafmobile1.webp" 
          alt="Chicago Art Fair Image 1" 
          className="mobile-cafmobile1-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-caf-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          In collaboration with W3W
        </p>
        <p>
          CTRL + ALT + FILM was more than a meetup, it was a reset. Held in Chicago, the event brought together local voices from the Web3 community for an evening of networking, conversation, and shared vision.
        </p>
        <p>
          The night centered around a panel featuring Any Colour You Like and PODPLAYR, where we explored how blockchain technology can empower independent creators. Not just financially, but structurally. From ownership and distribution to sustainability and creative freedom, the conversation challenged how we think about media, and how we can build a more equitable future for film-makers and storytellers.
        </p>
        <p>
          It was the start of a bigger conversation and just a glimpse of where we're headed next.
        </p>
      </motion.div>
      
      <motion.div
        className="mobile-caf-tertiary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/caf/cafmobile2.webp" 
          alt="Chicago Art Fair Image 2" 
          className="mobile-cafmobile2-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-caf-description-second"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p>
          Any Colour You Like was proud to document this celebration of creative expression, capturing the energy and inspiration that flows when artists and audiences connect in meaningful ways. Through our lens, we preserved the moments where art transcends the ordinary and reminds us of the power of human imagination.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Desktop content component
const CAFContent = () => {
  return (
    <motion.div 
      className="caf-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="caf-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1>CTRL + ALT + FILM</h1>
      </motion.div>
      
      <motion.div 
        className="caf-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          In collaboration with W3W
        </p>
        <p>
          CTRL + ALT + FILM was more than a meetup, it was a reset. Held in Chicago, the event brought together local voices from the Web3 community for an evening of networking, conversation, and shared vision.
        </p>
        <p>
          The night centered around a panel featuring Any Colour You Like and PODPLAYR, where we explored how blockchain technology can empower independent creators. Not just financially, but structurally. From ownership and distribution to sustainability and creative freedom, the conversation challenged how we think about media, and how we can build a more equitable future for film-makers and storytellers.
        </p>
        <p>
          It was the start of a bigger conversation and just a glimpse of where we're headed next.
        </p>
      </motion.div>
      
      <div className="caf-video-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '3rem',
        marginBottom: '3rem',
        width: '100%',
        maxWidth: '800px',
        margin: '3rem auto'
      }}>
        {/* Video with sound control */}
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/caf/CTRL ALT FILM EVENT RECAP VIDEO.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                keepPlaying={true}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              />
              
              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1.5rem',
                  padding: '0.6rem 1.2rem',
                  backgroundColor: 'rgba(50, 50, 50, 0.8)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(100, 100, 100, 0.5)',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(70, 70, 70, 0.9)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
                }}
              >
                {isMuted ? '🔇 Unmute Audio' : '🔊 Mute Audio'}
              </button>
            </>
          );
        })()}
      </div>
    </motion.div>
  );
};

// Main page component with Privy integration
const CAFPageContent = () => {
  const { login, logout, authenticated, user, ready } = usePrivy();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
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
  
  return (
    <div className="caf-page">
      <Header />
      {isMobile ? <MobileCAFContent /> : <CAFContent />}
    </div>
  );
};

// Wrapper component with Privy provider
const CAFPage = () => {
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
      <CAFPageContent />
    </PrivyProvider>
  );
};

export default CAFPage;
