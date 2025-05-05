import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/RadioPage.css";
import "../styles/MobileMenu.css";
import "../styles/RadioPageMobile.css"; // Mobile-specific fixes for radio page

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
          <li><Link to="/radio" className="active">Radio</Link></li>
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

const RadioContent = () => {
  return (
    <motion.div 
      className="radio-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <OptimizedImage 
        src="/images/radio/radiologo.png" 
        alt="Radio Logo" 
        style={{
          display: 'block',
          margin: '0 auto 1.5rem auto',
          maxWidth: '900px',
          width: '96vw'
        }}
      />
      <motion.div
        className="radio-logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
      </motion.div>
      
      <motion.h1 
        className="radio-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Broadcasting freedom.<span className="line-break"></span> Building community.
      </motion.h1>
      
      <motion.div 
        className="radio-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p>
          At ACYL Radio, we're more than just a radio station. We're a hub for creativity, a 
          source for local voices, and a connection to the heartbeat of our community. 
          Independently owned and operated, we champion authentic programming, 
          unfiltered conversations, and music that resonates with your soul.
        </p>
        <p>
          By supporting ACYL Radio, you're keeping the spirit of independence alive and 
          thriving. So, whether you're tuning in during your morning coffee, your daily 
          grind, or your late-night musings, know that you're part of something real, raw, 
          and truly independent.
        </p>
      </motion.div>
      <motion.div 
        className="radio-gif-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          margin: '2.5rem auto 0 auto',
          maxWidth: '1200px'
        }}
      >
        <OptimizedImage 
          src="/images/radio/latasha.gif" 
          alt="Latasha" 
          className="radio-feature-image"
          style={{
            maxWidth: '350px',
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        />
        <OptimizedImage 
          src="/images/radio/will.gif" 
          alt="Will" 
          className="radio-feature-image"
          style={{
            maxWidth: '350px',
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        />
        <OptimizedImage 
          src="/images/radio/sazon.gif" 
          alt="Sazon" 
          className="radio-feature-image"
          style={{
            maxWidth: '350px',
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        />
      </motion.div>
      
      <motion.div
        className="mixcloud-widget-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '3rem auto 2rem auto',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
        }}
      >
        <iframe 
          width="100%" 
          height="180" 
          src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FACYLstudio%2Fplaylists%2Facyl-radio%2F" 
          frameBorder="0" 
          allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
          title="ACYL Radio Mixcloud Player"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

const RadioPage = () => {
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
        className="radio-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/radio/radiobg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <RadioContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default RadioPage;
