import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/DecentralympicsPage.css";
import "../styles/DecentralympicsPageMobile.css";
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
const MobileDecentralympicsContent = () => {
  return (
    <motion.div 
      className="mobile-decentralympics-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-decentralympics-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Decentralympics
      </motion.h1>
      
      <motion.div
        className="mobile-decentralympics-collaboration"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p>In collaboration with Keep It Crypto</p>
      </motion.div>
      
      <motion.div
        className="mobile-decentralympics-secondary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/decentralympics/decentmobile1.webp" 
          alt="Decentralympics Event Image 1" 
          className="mobile-decentmobile1-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-decentralympics-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          On a rooftop in the heart of Chicago's Northside, ACYL teamed up with Keep It Crypto to host Decentralympics, an
          evening of games, grill smoke, and good chaos with the city's Web3 community. Teams went head-to-head in challenges
          inspired by Web3 trivia, culture, and community-building, all under an open sky and backed by BBQ plates and rooftop
          energy. It was a chance to ditch the screens, link up IRL, and flex your blockchain brain. No tokens required.
        </p>
      </motion.div>
      
      <motion.div
        className="mobile-decentralympics-tertiary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/decentralympics/decentmobile2.webp" 
          alt="Decentralympics Event Image 2" 
          className="mobile-decentmobile2-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-decentralympics-video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{ marginTop: '30px', marginBottom: '100px', width: '100%', padding: '0 20px' }}
      >
        <OptimizedVideo
          src="/images/decentralympics/2025 DECENTRALYMPICS SEGMENT.mp4"
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
    </motion.div>
  );
};

// Desktop content component
const DecentralympicsContent = () => {
  return (
    <motion.div 
      className="decentralympics-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="decentralympics-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1>Decentralympics</h1>
      </motion.div>
      
      <motion.div
        className="decentralympics-collaboration"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p>In collaboration with Keep It Crypto</p>
      </motion.div>
      
      <motion.div 
        className="decentralympics-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          On a rooftop in the heart of Chicago's Northside, ACYL teamed up with Keep It Crypto to host Decentralympics, an
          evening of games, grill smoke, and good chaos with the city's Web3 community. Teams went head-to-head in challenges
          inspired by Web3 trivia, culture, and community-building, all under an open sky and backed by BBQ plates and rooftop
          energy. It was a chance to ditch the screens, link up IRL, and flex your blockchain brain. No tokens required.
        </p>
      </motion.div>
      
      <div className="decentralympics-video-container" style={{ marginTop: '40px', maxWidth: '800px', margin: '0 auto' }}>
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/decentralympics/2025 DECENTRALYMPICS SEGMENT.mp4"
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
                  {isMuted ? '🔇 Unmute Video' : '🔊 Mute Video'}
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
const DecentralympicsPage = () => {
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
      <motion.div 
        className="decentralympics-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        {isMobile ? <MobileDecentralympicsContent /> : <DecentralympicsContent />}
      </motion.div>
    </PrivyProvider>
  );
};

export default DecentralympicsPage;
