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
      >
        <p>
          FROM MOVING OUT FOR COLLEGE TO THE BIG CITY IN 2018, CHARLES FOX DOCUMENTS HIS DISCOVERY OF THE TALENTED UNDERGROUND MUSIC SCENE IN CHICAGO. A COMMUNITY THAT SEEMS TO CONTINUE GROWING.
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          
          <div style={{ marginTop: '1rem' }}>
            {/* Direct Mint Button to Manifold */}
            <a 
              href="https://app.manifold.xyz/c/ifoundit" 
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
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          
          <div style={{ marginTop: '1rem' }}>
            {/* Direct Mint Button to Manifold */}
            <a 
              href="https://app.manifold.xyz/c/ifoundit" 
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
        className="ifoundit-video-container"
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
                src="/images/ifoundit/ifisequence1.mp4"
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
      background: 'url("/images/ifoundit/ifibg.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Header />
      <div className="page-content">
        {isMobile ? <MobileIFoundItContent /> : <IFoundItContent />}
      </div>
    </div>
  );
};

export default IFoundItPage;
