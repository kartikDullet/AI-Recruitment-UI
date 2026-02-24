import React, { useState } from "react";
import "../Styles/about.css";

export default function About() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Message sent!");
    setData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 80px - 100px)', backgroundColor: '#0f172a', color: 'white', padding: '30px 60px' }}>
      <div style={{ flex: 1, display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '10px' }}>
          <h1 style={{ color: '#00f5ff', fontSize: '36px', marginBottom: '15px' }}>About Us</h1>
          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>We are building next-generation AI recruitment agents that automate sourcing, screening, and posting — reducing hiring cost by up to 70%.</p>
          
          <div style={{ marginTop: '15px' }}>
            <h3 style={{ color: '#00f5ff', fontSize: '16px', marginBottom: '10px' }}>Why Choose Us?</h3>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.5', paddingLeft: '20px', margin: 0, fontSize: '13px' }}>
              <li>Fully automated recruitment workflow</li>
              <li>Multi-platform job posting</li>
              <li>AI-powered candidate screening</li>
              <li>24/7 operational support</li>
              <li>Cost optimization guaranteed</li>
            </ul>
          </div>
        </div>

        <div style={{ flex: 0.8, overflowY: 'auto', paddingRight: '5px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(124, 58, 237, 0.1))', padding: '20px', borderRadius: '15px', border: '1px solid rgba(0, 245, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '15px', fontSize: '20px' }}>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', color: '#00f5ff', fontSize: '11px', marginBottom: '3px', fontWeight: '600', textTransform: 'uppercase' }}>Name</label>
              <input name="name" placeholder="Your name" onChange={handleChange} value={data.name} style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#111827', border: '1px solid #00f5ff', color: 'white', borderRadius: '6px', boxSizing: 'border-box', fontSize: '13px' }} />
              
              <label style={{ display: 'block', color: '#00f5ff', fontSize: '11px', marginBottom: '3px', fontWeight: '600', textTransform: 'uppercase' }}>Email</label>
              <input name="email" placeholder="your@email.com" onChange={handleChange} value={data.email} style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#111827', border: '1px solid #00f5ff', color: 'white', borderRadius: '6px', boxSizing: 'border-box', fontSize: '13px' }} />
              
              <label style={{ display: 'block', color: '#00f5ff', fontSize: '11px', marginBottom: '3px', fontWeight: '600', textTransform: 'uppercase' }}>Message</label>
              <textarea name="message" placeholder="Your message..." onChange={handleChange} value={data.message} style={{ width: '100%', padding: '8px', marginBottom: '10px', backgroundColor: '#111827', border: '1px solid #00f5ff', color: 'white', borderRadius: '6px', boxSizing: 'border-box', minHeight: '60px', maxHeight: '60px', resize: 'none', fontSize: '13px' }} />
              
              <button type="submit" style={{ width: '100%', padding: '10px', background: 'linear-gradient(90deg, #00f5ff, #7c3aed)', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}