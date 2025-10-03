import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Scheduling</h3>
            <p>AI-powered visit scheduling with optimal time recommendations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👁️</div>
            <h3>Face Recognition</h3>
            <p>Biometric authentication for secure prisoner identification</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Government Verified</h3>
            <p>Absher integration for secure identity verification</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Admin Dashboard</h3>
            <p>Comprehensive monitoring and reporting tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;