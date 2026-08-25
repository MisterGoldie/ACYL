import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/FilmPage.css";
import "../styles/FilmPageMobile.css"; // Mobile-specific fixes for film page


// Mobile-specific content component with animations
const MobileFilmContent = () => {
  return (
    <motion.div 
      className="mobile-film-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-film-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Independent Stories. Boundless Creativity
      </motion.h1>
      
      <motion.div 
        className="mobile-film-description"
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
      
      <motion.div 
        className="mobile-film-posters-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link to="/isolation" className="mobile-film-poster-link">
          <OptimizedImage 
            src="/images/film/isoposter.webp" 
            alt="Isolation" 
            className="mobile-film-poster-image"
          />
        </Link>
        <Link to="/ifoundit" className="mobile-film-poster-link">
          <OptimizedImage 
            src="/images/film/ifiposter.webp" 
            alt="I Found It" 
            className="mobile-film-poster-image"
          />
        </Link>
        <Link to="/digitaldaydream" className="mobile-film-poster-link">
          <OptimizedImage 
            src="/images/film/ddposter.webp" 
            alt="Digital Daydream" 
            className="mobile-film-poster-image"
          />
        </Link>
        <Link to="/groupthinklove" className="mobile-film-poster-link">
          <OptimizedImage 
            src="/images/film/gtlposter.webp" 
            alt="Group Think Love" 
            className="mobile-film-poster-image"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

// Desktop content component
const FilmContent = () => {
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

  // Render different components based on device
  if (isMobile) {
    return <MobileFilmContent />;
  }
  
  // Desktop version
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
            src="/images/film/isoposter.webp" 
            alt="Isolation" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/ifoundit" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/ifiposter.webp" 
            alt="I Found It" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/digitaldaydream" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/ddposter.webp" 
            alt="Digital Daydream" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/groupthinklove" className="film-poster-link">
          <OptimizedImage 
            src="/images/film/gtlposter.webp" 
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
    <motion.div 
        className="film-bg film-page-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/film/filmbg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <SiteHeader />
        <FilmContent />
      </motion.div>
  );
};

export default FilmPage;
