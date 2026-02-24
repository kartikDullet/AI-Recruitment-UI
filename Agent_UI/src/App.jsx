import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0a0f1c' }}>
        {/* Fixed Navigation */}
        <nav style={{ backgroundColor: '#0a0f1c', padding: '15px 40px', borderBottom: '1px solid rgba(0, 245, 255, 0.2)', display: 'flex', gap: '40px', justifyContent: 'center', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 12px rgba(0, 245, 255, 0.1)' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '600', transition: 'all 0.3s', padding: '8px 16px', borderRadius: '6px' }} onMouseEnter={(e) => e.target.style.color = '#00f5ff'} onMouseLeave={(e) => e.target.style.color = 'white'}>🏠 Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '600', transition: 'all 0.3s', padding: '8px 16px', borderRadius: '6px' }} onMouseEnter={(e) => e.target.style.color = '#00f5ff'} onMouseLeave={(e) => e.target.style.color = 'white'}>ℹ️ About</Link>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '600', transition: 'all 0.3s', padding: '8px 16px', borderRadius: '6px' }} onMouseEnter={(e) => e.target.style.color = '#00f5ff'} onMouseLeave={(e) => e.target.style.color = 'white'}>⚙️ Services</Link>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* Fixed Footer */}
        <footer style={{ backgroundColor: '#020617', borderTop: '1px solid rgba(0, 245, 255, 0.2)', padding: '25px 40px', color: '#cbd5e1', fontSize: '14px', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ margin: '0 0 10px 0' }}>© 2026 AI Recruitment Engine. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '13px' }}>
              <a href="#" style={{ color: '#00f5ff', textDecoration: 'none' }}>Privacy Policy</a>
              <span>•</span>
              <a href="#" style={{ color: '#00f5ff', textDecoration: 'none' }}>Terms of Service</a>
              <span>•</span>
              <a href="#" style={{ color: '#00f5ff', textDecoration: 'none' }}>Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}