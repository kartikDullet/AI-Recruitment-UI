import React from "react";
import "../Styles/services.css";

export default function Services() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 80px - 100px)', backgroundColor: '#020617', color: 'white', padding: '40px 60px', overflowY: 'auto' }}>
      <h1 style={{ color: '#00f5ff', fontSize: '42px', marginBottom: '15px', textAlign: 'center' }}>What We Do</h1>

      <p style={{ maxWidth: '900px', margin: '0 auto 30px auto', color: '#cbd5e1', lineHeight: '1.6', fontSize: '16px', textAlign: 'center' }}>
        Our AI agents automate the complete recruitment pipeline — from job description generation to candidate sourcing and posting across multiple hiring platforms.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '30px', maxWidth: '900px', margin: '0 auto 40px auto' }}>
        <div style={{ background: 'rgba(0, 245, 255, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
          <h3 style={{ color: '#00f5ff', margin: '0 0 10px 0' }}>🤖 AI JD Generation</h3>
          <p style={{ color: '#cbd5e1', margin: 0, fontSize: '14px' }}>Automatically generate job descriptions based on role requirements</p>
        </div>
        <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
          <h3 style={{ color: '#7c3aed', margin: '0 0 10px 0' }}>📢 Multi-platform Posting</h3>
          <p style={{ color: '#cbd5e1', margin: 0, fontSize: '14px' }}>Post jobs to Naukri, LinkedIn, Indeed, and Foundit automatically</p>
        </div>
        <div style={{ background: 'rgba(0, 245, 255, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
          <h3 style={{ color: '#00f5ff', margin: '0 0 10px 0' }}>🎯 Smart Filtering</h3>
          <p style={{ color: '#cbd5e1', margin: 0, fontSize: '14px' }}>AI-powered candidate screening and intelligent matching</p>
        </div>
        <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
          <h3 style={{ color: '#7c3aed', margin: '0 0 10px 0' }}>💰 Cost Optimization</h3>
          <p style={{ color: '#cbd5e1', margin: 0, fontSize: '14px' }}>Reduce hiring costs by up to 70% with automation</p>
        </div>
      </div>

      <h2 style={{ color: '#00f5ff', fontSize: '32px', marginBottom: '25px', textAlign: 'center' }}>Pricing Plans</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(0, 245, 255, 0.2)', textAlign: 'center' }}>
          <h3 style={{ color: 'white' }}>Starter</h3>
          <h2 style={{ color: '#00f5ff', fontSize: '28px', margin: '10px 0' }}>₹1999</h2>
          <p style={{ color: '#cbd5e1', margin: '10px 0' }}>/month</p>
          <p style={{ color: '#cbd5e1', fontSize: '14px' }}>Basic AI sourcing</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(0, 245, 255, 0.1))', padding: '25px', borderRadius: '12px', border: '2px solid #7c3aed', textAlign: 'center', transform: 'scale(1.05)' }}>
          <span style={{ background: '#7c3aed', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>POPULAR</span>
          <h3 style={{ color: 'white', marginTop: '10px' }}>Professional</h3>
          <h2 style={{ color: '#7c3aed', fontSize: '28px', margin: '10px 0' }}>₹4999</h2>
          <p style={{ color: '#cbd5e1', margin: '10px 0' }}>/month</p>
          <p style={{ color: '#cbd5e1', fontSize: '14px' }}>End-to-end AI recruitment</p>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(0, 245, 255, 0.2)', textAlign: 'center' }}>
          <h3 style={{ color: 'white' }}>Enterprise</h3>
          <h2 style={{ color: '#00f5ff', fontSize: '28px', margin: '10px 0' }}>Custom</h2>
          <p style={{ color: '#cbd5e1', margin: '10px 0' }}>Pricing</p>
          <p style={{ color: '#cbd5e1', fontSize: '14px' }}>Full automation + integrations</p>
        </div>
      </div>
    </div>
  );
}