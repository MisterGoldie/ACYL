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
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          
          <div style={{ marginTop: '1rem' }}>
            {/* Direct Mint Button to Manifold */}
            <a 
              href="https://app.manifold.xyz/c/groupthinklove" 
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
                margin: '20px auto'
              }}
            >
              Mint on Manifold
            </a>
          </div>
        </div>
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
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          
          <div style={{ marginTop: '1rem' }}>
            {/* Direct Mint Button to Manifold */}
            <a 
              href="https://app.manifold.xyz/c/groupthinklove" 
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
                margin: '20px auto'
              }}
            >
              Mint on Manifold
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="groupthinklove-video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3rem',
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '800px',
          margin: '3rem auto'
        }}
      >
        {/* Video with sound control - the useState for muted state */}
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/groupthinklove/gtltrailer1.mp4"
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
      </motion.div>

      {/* Secondary videos side by side */}
      <motion.div
        className="groupthinklove-secondary-videos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '3rem',
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '800px',
          margin: '3rem auto'
        }}
      >
        <div style={{
          width: 'calc(50% - 10px)',
          minWidth: '300px',
          flex: '1 1 auto'
        }}>
          <OptimizedVideo
            src="/images/groupthinklove/gtltrailer2.mp4"
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
        </div>

        <div style={{
          width: 'calc(50% - 10px)',
          minWidth: '300px',
          flex: '1 1 auto'
        }}>
          <OptimizedVideo
            src="/images/groupthinklove/gtltrailer3.mp4"
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
        </div>
      </motion.div>
      
      {/* Spotify Playlist Widget */}
      <motion.div
        className="groupthinklove-spotify-widget"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '800px',
          margin: '3rem auto',
          padding: '0 15px'
        }}
      >
        <iframe 
          style={{ borderRadius: '12px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }} 
          src="https://open.spotify.com/embed/album/5wHRZCFMhWTk399TLXkdBi?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          title="Group Think Love Soundtrack"
        ></iframe>
      </motion.div>
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
  
  return (
    <div style={{ 
      background: 'url("/images/groupthinklove/gtlbg.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Header />
      <div className="page-content">
        {isMobile ? <MobileGroupThinkLoveContent /> : <GroupThinkLoveContent />}
      </div>
    </div>
  );
};

export default GroupThinkLovePage;
