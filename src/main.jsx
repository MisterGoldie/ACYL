import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/mobile.css';

// Force scroll to top on page load/refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ensure we start at the top of the page
window.onload = function() {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);