import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section Styles */}
      <style jsx>{`
        @font-face {
          font-family: 'NewAmsterdam-Regular';
          src: url('/fonts/NewAmsterdam-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Lato-Regular';
          src: url('/fonts/Lato-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .hero-section {
          position: relative;
          overflow: hidden;
          height: 100vh;
          background-color: #e2e2d2;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 50%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-trapezoid {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 55%;
          background-color: #c51f5d;
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-image {
          width: 80%;
          height: auto;
          max-width: 400px;
        }
      `}</style>
      
      {/* Hero Section Component */}
      <section className="hero-section">
        <div className="hero-content">
          <img 
            src="/path/to/product-pirates-logo.png" 
            alt="Product Pirates" 
            className="hero-logo h-8 mb-6"
          />
          <h1 className="hero-title" style={{ fontFamily: 'NewAmsterdam-Regular, sans-serif', color: '#141d26', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            IMPROVE YOUR<br />
            PRODUCT MANAGEMENT<br />
            CRAFT
          </h1>
          <p className="hero-description" style={{ fontFamily: 'Lato-Regular, sans-serif', color: '#243447', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Through skill-specific hands on<br />
            product management workshops<br />
            that challenge and inspire you.
          </p>
          <button className="hero-cta" style={{ 
            fontFamily: 'Lato-Regular, sans-serif', 
            backgroundColor: '#c51f5d', 
            color: '#e2e2d2', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '9999px', 
            fontSize: '1.125rem', 
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}>
            Jump aboard, pirate!
          </button>
        </div>
        <div className="hero-trapezoid">
          <img 
            src="/path/to/hook-image.png" 
            alt="Get your hands dirty. Well... your hook, I guess." 
            className="hero-image"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
