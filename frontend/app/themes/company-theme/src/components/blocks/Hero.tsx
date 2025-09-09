'use client'
import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  config?: any;
}

const Hero: React.FC<HeroProps> = ({ 
  title = "Fujiess Solar Power Systems",
  subtitle = "Clean Energy · Sustainable Future · Reliable Solutions",
  description = "Leading solar power system provider in Saipan. We specialize in residential and commercial energy storage solutions, helping you harness the power of the sun for a sustainable future.",
  ctaText = "Get Solar Quote",
  ctaLink = "/contact",
  backgroundImage = "/themes/company-theme/images/hero/hero-01.jpg"
}) => {
  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {subtitle && (
              <p className="hero-subtitle">{subtitle}</p>
            )}
            <h1 className="hero-title">{title}</h1>
            {description && (
              <p className="hero-description">{description}</p>
            )}
            {ctaText && ctaLink && (
              <div className="hero-actions">
                <a href={ctaLink} className="btn btn-primary btn-lg">
                  {ctaText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;