import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span>Secure • Reliable • Government Verified</span>
          </div>
          
          <h1 className="hero-title">
            Connecting Families Through
            <span className="highlight"> Secure Virtual Visitations</span>
          </h1>
          
          <p className="hero-description">
            Wasl System revolutionizes prisoner-family communication with AI-powered, 
            secure virtual visitations that eliminate travel barriers and enhance 
            emotional connections while maintaining strict security protocols.
          </p>
          
          <div className="hero-actions">
            <a
              className="cta-button primary"
              href="https://github.com/ali1636/wasl-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repository
            </a>
            <button className="cta-button secondary">
              Schedule a Demo
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available</div>
            </div>
            <div className="stat">
              <div className="stat-number">AI</div>
              <div className="stat-label">Powered</div>
            </div>
            <div className="stat">
              <div className="stat-number">Gov</div>
              <div className="stat-label">Verified</div>
            </div>
          </div>
        </div>
        
        {/* Visual Elements */}
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">👨‍👩‍👧‍👦</div>
            <h4>Family Visits</h4>
            <p>Virtual connections</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🔐</div>
            <h4>Secure</h4>
            <p>Encrypted sessions</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🤖</div>
            <h4>AI Powered</h4>
            <p>Smart scheduling</p>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">🏛️</div>
            <h4>Government</h4>
            <p>Absher integrated</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;