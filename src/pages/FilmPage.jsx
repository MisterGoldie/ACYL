import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/FilmPage.css";
import "../styles/MobileMenu.css";
import "../styles/FilmPageMobile.css"; // Mobile-specific fixes for film page

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
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

const FilmContent = () => {
  return (
    <motion.div 
      className="film-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="film-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Independent Stories. Boundless Creativity
      </motion.h1>
      
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          The ACYL Film catalog is a curated collection of bold, diverse, and visionary 
          films crafted by independent creators from around the globe.
        </p>
        <p>
          Every film in our catalog is a testament to the power of storytelling. Raw, 
          authentic, and uninhibited by convention. From compelling animations and 
          thought-provoking documentaries to experimental shorts, this is where 
          creativity and originality take center stage.
        </p>
        <p>
          Discover fresh voices, celebrate untold stories, and support the independent 
          creators who are reshaping the art of filmmaking. Whether you're an avid film 
          enthusiast, an industry professional, or simply curious, the ACYL Film catalog 
          invites you to dive into a world of cinematic brilliance that thrives outside the 
          mainstream.
        </p>
      </motion.div>
      <div className="film-posters-grid">
        <Link to="/isolation" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/isoposter.png" 
            alt="Isolation" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/ifoundit" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/ifiposter.png" 
            alt="I Found It" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/digitaldaydream" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/ddposter.png" 
            alt="Digital Daydream" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/groupthinklove" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/gtlposter.png" 
            alt="Group Think Love" 
            className="film-poster-image"
          />
        </Link>
      </div>
    </motion.div>
  );
};

const FilmPage = () => {
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
        className="film-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/film/filmbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <FilmContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default FilmPage;
