import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import TVPage from "./pages/TVPage";
import FilmPage from "./pages/FilmPage";
import RadioPage from "./pages/RadioPage";
import StreamPage from "./pages/StreamPage";
import ContributePage from "./pages/ContributePage";
import DiscoverPage from "./pages/DiscoverPage";
import GroupThinkLovePage from "./pages/GroupThinkLovePage";
import IsolationPage from "./pages/IsolationPage";
import IFoundItPage from "./pages/IFoundItPage";
import DigitalDaydreamPage from "./pages/DigitalDaydreamPage";
import SalemTriesPage from "./pages/SalemTriesPage";
import SazonPage from "./pages/SazonPage";
import PodPlayrPage from "./pages/PodPlayrPage";
import EventsPage from "./pages/EventsPage";
import BrushstrokesPage from "./pages/BrushstrokesPage";
import ExperimentalPage from "./pages/ExperimentalPage";
import DecentralympicsPage from "./pages/DecentralympicsPage";
import CyberJamPage from "./pages/CyberJamPage";
import CAFPage from "./pages/CAFPage";
import { preloadAllAssets } from "./utils/preloadAssets";
import "./styles/transitions.css";

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Check for redirect path in sessionStorage (for handling page refreshes)
  React.useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/' && location.pathname === '/') {
      // Clear the redirect path from sessionStorage
      sessionStorage.removeItem('redirectPath');
      // Navigate to the stored path
      window.history.replaceState(null, '', redirectPath);
      // Force a re-render without a full page reload
      window.dispatchEvent(new Event('popstate'));
    }
  }, [location]);
  
  // Reset scroll position on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [location.pathname]);
  
  return (
    <div className="page-transition-container">
      <div className="full-height-container">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tv" element={<TVPage />} />
            <Route path="/film" element={<FilmPage />} />
            <Route path="/radio" element={<RadioPage />} />
            <Route path="/stream" element={<StreamPage />} />
            <Route path="/contribute" element={<ContributePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/groupthinklove" element={<GroupThinkLovePage />} />
            <Route path="/isolation" element={<IsolationPage />} />
            <Route path="/ifoundit" element={<IFoundItPage />} />
            <Route path="/digitaldaydream" element={<DigitalDaydreamPage />} />
            <Route path="/salemtries" element={<SalemTriesPage />} />
            <Route path="/sazon" element={<SazonPage />} />
            <Route path="/podplayr" element={<PodPlayrPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/brushstrokes" element={<BrushstrokesPage />} />
            <Route path="/experimental" element={<ExperimentalPage />} />
            <Route path="/decentralympics" element={<DecentralympicsPage />} />
            <Route path="/cyberjam" element={<CyberJamPage />} />
            <Route path="/CAF" element={<CAFPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Main app component
const App = () => {
  // State to track preloading status
  const [assetsPreloaded, setAssetsPreloaded] = React.useState(false);
  // Ref to prevent duplicate preloading in StrictMode
  const preloadingStartedRef = React.useRef(false);
  
  // Preload assets when the app first mounts
  React.useEffect(() => {
    // Prevent duplicate preloading in development mode
    if (preloadingStartedRef.current) return;
    preloadingStartedRef.current = true;
    
    const preloadAssets = async () => {
      try {
        await preloadAllAssets();
        setAssetsPreloaded(true);
        console.log('All assets preloaded successfully');
      } catch (error) {
        console.warn('Asset preloading had some issues:', error);
        // Still set to true so the app continues even if some assets fail
        setAssetsPreloaded(true);
      }
    };
    
    preloadAssets();
  }, []);
  
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;