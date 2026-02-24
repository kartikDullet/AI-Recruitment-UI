import React, { useState } from "react";
import "../Styles/home.css";

export default function Home() {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    min_exp: "",
    max_exp: "",
    salary_min: "",
    salary_max: "",
    location: "",
    description: "",
    hiring_platform: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8000/generate-and-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Requirement submitted successfully 🚀");
      setFormData({
        company: "",
        title: "",
        min_exp: "",
        max_exp: "",
        salary_min: "",
        salary_max: "",
        location: "",
        description: "",
        hiring_platform: "",
      });
    } catch (err) {
      alert("Error submitting requirement");
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    backgroundColor: '#111827',
    border: '1px solid #00f5ff',
    color: 'white',
    borderRadius: '6px',
    boxSizing: 'border-box',
    fontSize: '13px',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    color: '#00f5ff',
    fontSize: '12px',
    marginBottom: '3px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 80px - 100px)', backgroundColor: '#0a0f1c', color: 'white', padding: '30px 60px' }}>
      <div style={{ flex: 1, display: 'flex', gap: '40px', alignItems: 'center' }}>
        {/* Left side - Paragraph */}
        <div style={{ flex: 1, paddingRight: '10px' }}>
          <h1 style={{ color: 'white', fontSize: '36px', marginBottom: '15px', lineHeight: '1.2' }}>AI Recruitment <span style={{ background: 'linear-gradient(90deg, #00f5ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Engine</span></h1>
          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', textAlign: 'justify', marginBottom: '15px' }}>
            AI agents remove the traditional middleman in recruitment by automating the entire hiring workflow. Instead of relying on agencies to search and filter candidates, our AI directly analyzes job requirements, scans multiple hiring platforms, and intelligently matches the best-fit talent. It handles screening, communication, and scheduling automatically.
          </p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
            <div style={{ borderLeft: '3px solid #00f5ff', paddingLeft: '15px' }}>
              <h3 style={{ color: '#00f5ff', fontSize: '18px', margin: '0 0 5px 0' }}>70%</h3>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '12px' }}>Cost Reduction</p>
            </div>
            <div style={{ borderLeft: '3px solid #7c3aed', paddingLeft: '15px' }}>
              <h3 style={{ color: '#7c3aed', fontSize: '18px', margin: '0 0 5px 0' }}>10x</h3>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '12px' }}>Faster Hiring</p>
            </div>
            <div style={{ borderLeft: '3px solid #00f5ff', paddingLeft: '15px' }}>
              <h3 style={{ color: '#00f5ff', fontSize: '18px', margin: '0 0 5px 0' }}>24/7</h3>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '12px' }}>Automation</p>
            </div>
          </div>
        </div>

        {/* Right side - Creative Form */}
        <div style={{ flex: 0.85, display: 'flex', justifyContent: 'center', height: '100%', overflowY: 'auto', paddingRight: '5px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(124, 58, 237, 0.1))', padding: '20px', borderRadius: '15px', border: '1px solid rgba(0, 245, 255, 0.3)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 245, 255, 0.1)', width: '100%', maxWidth: '380px' }}>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <h2 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '20px' }}>Post Job</h2>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '11px' }}>AI will handle the rest</p>
            </div>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {/* Company and Title take full width */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Company</label>
                <input type="text" name="company" placeholder="ABC Tech" onChange={handleChange} value={formData.company} style={inputStyle} />
              </div>
              
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Job Title</label>
                <input type="text" name="title" placeholder="Python Developer" onChange={handleChange} value={formData.title} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Min Exp</label>
                <input type="number" name="min_exp" placeholder="2" onChange={handleChange} value={formData.min_exp} style={inputStyle} />
              </div>
              
              <div>
                <label style={labelStyle}>Max Exp</label>
                <input type="number" name="max_exp" placeholder="5" onChange={handleChange} value={formData.max_exp} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Min Salary</label>
                <input type="number" name="salary_min" placeholder="50000" onChange={handleChange} value={formData.salary_min} style={inputStyle} />
              </div>
              
              <div>
                <label style={labelStyle}>Max Salary</label>
                <input type="number" name="salary_max" placeholder="120000" onChange={handleChange} value={formData.salary_max} style={inputStyle} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Location</label>
                <input type="text" name="location" placeholder="Bangalore" onChange={handleChange} value={formData.location} style={inputStyle} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Description</label>
                <textarea name="description" placeholder="Job details..." onChange={handleChange} value={formData.description} style={{ ...inputStyle, minHeight: '40px', maxHeight: '40px', resize: 'none' }} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Platform</label>
                <select name="hiring_platform" onChange={handleChange} value={formData.hiring_platform} required style={inputStyle}>
                  <option value="">Select Platform</option>
                  <option value="naukri">Naukri</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indeed">Indeed</option>
                  <option value="foundit">Foundit</option>
                </select>
              </div>

              <button type="submit" style={{ gridColumn: '1 / -1', padding: '10px', background: 'linear-gradient(90deg, #00f5ff, #7c3aed)', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s' }}>Post & Automate</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}