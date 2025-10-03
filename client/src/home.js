import React from 'react';
import './Home.css';
import Hero from './hero'; 
import Features from './features';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      
      {/* How It Works Section */}
      <section className="how-it-works home-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple steps to connect with your loved ones through secure virtual visitations
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Account</h3>
              <p>Register and verify your identity through our secure government-integrated system</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Schedule Visit</h3>
              <p>Use our AI-powered scheduling system to find the perfect time for your virtual visit</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Connect Securely</h3>
              <p>Join the video session with end-to-end encryption and face recognition verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section home-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Transforming Prisoner-Family Connections</h2>
              <p>
                Wasl System bridges the gap between prisoners and their families through 
                secure, AI-powered virtual visitations. Our platform eliminates geographical 
                barriers while maintaining the highest security standards required by 
                correctional facilities.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Families Connected</div>
                </div>
                <div className="about-stat">
                  <div className="stat-value">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="about-stat">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              {/* This would typically contain an image or illustration */}
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.7)'
              }}>
                System Illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials home-section">
        <div className="container">
          <h2 className="section-title">What Families Say</h2>
          <p className="section-subtitle">
            Hear from families who have reunited through Wasl System
          </p>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Wasl System changed everything for our family. Being able to see my son regularly despite the distance has been incredible for his rehabilitation journey."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SA</div>
                <div className="author-info">
                  <h4>Sarah Ahmed</h4>
                  <p>Mother, Riyadh</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The face recognition and security features gave me peace of mind. The video quality is excellent and the scheduling system is very user-friendly."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div className="author-info">
                  <h4>Mohammed Khalid</h4>
                  <p>Brother, Jeddah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section home-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Connect?</h2>
            <p>
              Join thousands of families using Wasl System to stay connected with their loved ones.
              Start your journey today with our secure, government-verified platform.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary">
                Get Started Free
              </Link>
              <Link to="/login" className="cta-button secondary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;