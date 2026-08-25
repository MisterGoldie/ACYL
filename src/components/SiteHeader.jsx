import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import MobileMenu from "./MobileMenu";
import OptimizedImage from "./OptimizedImage";
import "../styles/MobileMenu.css";

const navClass = ({ isActive }) => (isActive ? "active" : undefined);
const dropdownClass = ({ isActive }) =>
  isActive ? "dropdown-item active" : "dropdown-item";

function SiteHeader() {
  const { pathname } = useLocation();
  const isPodPlayr = pathname === "/podplayr";

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-logo">
        <Link to="/">
          <OptimizedImage
            src={isPodPlayr ? "/ppheaderlogo.webp" : "/circleheaderlogo.webp"}
            alt={isPodPlayr ? "PODPLAYR Logo" : "ACYL Logo"}
            className="circle-header-logo"
          />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><NavLink to="/tv" className={navClass}>TV</NavLink></li>
          <li><NavLink to="/film" className={navClass}>Film</NavLink></li>
          <li><NavLink to="/radio" className={navClass}>Radio</NavLink></li>
          <li><NavLink to="/stream" className={navClass}>Stream</NavLink></li>
          <li className="more-dropdown">
            <Link to="#">More <span className="dropdown-arrow">▼</span></Link>
            <div className="dropdown-menu">
              <NavLink to="/contribute" className={dropdownClass}>Contribute</NavLink>
              <NavLink to="/discover" className={dropdownClass}>Discover</NavLink>
              <NavLink to="/events" className={dropdownClass}>Events</NavLink>
              <NavLink to="/podplayr" className={dropdownClass}>PODPLAYR</NavLink>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
}

export default SiteHeader;
