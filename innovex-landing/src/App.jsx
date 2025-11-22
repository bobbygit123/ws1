import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import './index.css';

function App() {
  useEffect(() => {
    // Add Google Fonts: Source Sans Pro
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '110px' }}>
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Innovex Group" style={{ height: '90px' }} />
              </Link>
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<div className="section-padding text-center"><h2>Contact Page Coming Soon</h2></div>} />
        </Routes>

        {/* Footer */}
        <footer style={{ background: '#0a0a0a', color: 'white', padding: '60px 0 20px' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <img src="/logo.png" alt="Innovex" style={{ height: '50px', filter: 'brightness(0) invert(1)', marginBottom: '1.5rem' }} />
                <p style={{ color: '#999', maxWidth: '300px' }}>
                  Turbah Hub, Office No.4, Buwsher<br />
                  Muscat, Sultanate of Oman
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Services</h4>
                <ul style={{ listStyle: 'none', color: '#999', lineHeight: '2' }}>
                  <li><Link to="/services">Industrial Engineering</Link></li>
                  <li><Link to="/services">IT Services</Link></li>
                  <li><Link to="/services">AI & Machine Learning</Link></li>
                  <li><Link to="/services">Business Development</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Connect</h4>
                <ul style={{ listStyle: 'none', color: '#999', lineHeight: '2' }}>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
              &copy; 2025 Innovex Group LLC. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
