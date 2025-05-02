import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/StreamPage.css"; // Reusing Stream page styles for now
import "../styles/MobileMenu.css";
import "../styles/SazonPageMobile.css"; // Mobile-specific styles for Sazon page

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
          <li><Link to="/stream" className="active">Stream</Link></li>
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

const SazonContent = () => {
  return (
    <motion.div 
      className="stream-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="stream-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <OptimizedImage 
          src="/images/sazon/swslogo.png" 
          alt="Seasoning With Sazon" 
          style={{ maxWidth: '80%', margin: '0 auto' }}
        />
      </motion.div>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
      >
        <OptimizedImage 
          src="/images/sazon/swsbanner.png" 
          alt="Mr. Sazon profile and description" 
          style={{ width: '100%', margin: '0 auto' }}
        />
      </motion.div>
      
      {/* Add the swstrailer1.mp4 video */}
      <motion.div
        className="sazon-video-container"
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
        {/* Video with sound control */}
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/sazon/swstrailer1.mp4"
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
const SazonPage = () => {
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
      <SazonPageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const SazonPageContent = () => {
  return (
    <motion.div
      className="stream-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'url("/images/sazon/swsbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <Header />
      <div className="page-content">
        <SazonContent />
      </div>
    </motion.div>
  );
};

export default SazonPage;
