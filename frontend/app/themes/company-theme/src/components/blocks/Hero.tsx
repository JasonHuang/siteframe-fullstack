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
  title = "Welcome to Our Enterprise",
  subtitle = "Professional · Innovative · Reliable",
  description = "We are committed to providing our clients with the highest quality products and services, leveraging professional expertise and innovative concepts to drive your business success.",
  ctaText = "Learn More",
  ctaLink = "/about",
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