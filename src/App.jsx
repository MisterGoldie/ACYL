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
import "./styles/transitions.css";

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;