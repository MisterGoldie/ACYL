import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/ExperimentalPage.css";
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
const MobileExperimentalContent = () => {
  return (
    <motion.div 
      className="mobile-experimental-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-experimental-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        NYC Experimental Showcase
      </motion.h1>
      
      <motion.div 
        className="mobile-experimental-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Experimental is ACYL's flagship showcase of avant-garde and boundary-pushing 
          media from emerging creators. This event series explores the intersection of 
          technology, art, and storytelling in bold new ways.
        </p>
        <p>
          Each edition features a curated selection of works that challenge conventional 
          formats and narrative structures, inviting audiences to experience media that 
          defies categorization and reimagines what's possible in digital expression.
        </p>
        <p>
          From interactive installations and immersive audio experiences to algorithmic 
          filmmaking and AI-generated art, Experimental creates space for radical innovation 
          and critical dialogue about the future of media creation and consumption.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Desktop content component
const ExperimentalContent = () => {
  return (
    <motion.div 
      className="experimental-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="experimental-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1>NYC Experimental Showcase</h1>
      </motion.div>
      
      <motion.div 
        className="experimental-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Experimental is ACYL's flagship showcase of avant-garde and boundary-pushing 
          media from emerging creators. This event series explores the intersection of 
          technology, art, and storytelling in bold new ways.
        </p>
        
        <p>
          Each edition features a curated selection of works that challenge conventional 
          formats and narrative structures, inviting audiences to experience media that 
          defies categorization and reimagines what's possible in digital expression.
        </p>
        
        <p>
          From interactive installations and immersive audio experiences to algorithmic 
          filmmaking and AI-generated art, Experimental creates space for radical innovation 
          and critical dialogue about the future of media creation and consumption.
        </p>
      </motion.div>
      
      <div className="experimental-video-container" style={{ marginTop: '40px', maxWidth: '800px', margin: '0 auto' }}>
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/experimental/2025 ACYL LIVE SCREENING.mp4"
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
              
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
                    e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {isMuted ? 'Unmute Video' : 'Mute Video'}
                </button>
              </div>
            </>
          );
        })()}
      </div>
    </motion.div>
  );
};

// Main page component
const ExperimentalPage = () => {
  return (
    <PrivyProvider
      appId="clqgp1gk500tml80fpwwjbj4p"
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
          logo: 'https://acyl.xyz/logo.png',
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
        },
      }}
    >
      <ExperimentalPageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const ExperimentalPageContent = () => {
  // Determine if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
  return (
    <motion.div 
      className="experimental-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {isMobile ? <MobileExperimentalContent /> : <ExperimentalContent />}
    </motion.div>
  );
};

export default ExperimentalPage;
