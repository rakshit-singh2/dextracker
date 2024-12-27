import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="page-content-wrapper" className="page-content-wrapper homepage">
      <div className="centercontent container-fluid main-content px-2">
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to DexTracker</h1>
          <p>Your one-stop platform for live trading charts, insights, and market analysis.</p>
          <div className="cta-buttons">
            <Link to="/services/newpairs" className="cta-button">Discover New Pairs</Link>
            <Link to="/services/multicharts" className="cta-button">Launch Multi-Charts</Link>
          </div>
          <hr></hr>
        </div>
        <div className="hero-image">
          
        </div>
      </header>

      <section className="features-section">
        <h2>Why Choose DexTracker?</h2>
        <div className="features">
          <div className="feature">
            <h3>Real-Time Data</h3>
            <p>Stay updated with live charts and market movements across multiple chains and swaps.</p>
          </div>
          <div className="feature">
           
            <h3>Custom Alerts</h3>
            <p>Set alerts for price changes, new token launches, and more, directly to your dashboard.</p>
          </div>
          <div className="feature">
            
            <h3>Portfolio Tracking</h3>
            <p>Track your investments and manage your portfolio with ease across multiple blockchains.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
           
            <h3> <span className="step-number">1</span> Connect Your Wallet</h3>
            <p>Securely connect your wallet to access personalized data and trading tools.</p>
          </div>
          <div className="step">
            
            <h3><span className="step-number">2</span> Analyze the Market</h3>
            <p>Use our advanced charting tools to analyze trends and make informed decisions.</p>
          </div>
          <div className="step">
           
            <h3> <span className="step-number">3</span> Trade Smart</h3>
            <p>Execute trades and track your performance in real-time with our powerful tools.</p>
          </div>
        </div>
      </section>

     
    </div>
    </div>
    </div>
  );
};

export default Home;
