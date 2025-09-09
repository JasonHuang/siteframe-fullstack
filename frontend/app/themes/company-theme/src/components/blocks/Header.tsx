'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  logo?: string;
  companyName?: string;
  navigation?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  showNavigation?: boolean;
  showLogo?: boolean;
  config?: any;
}

const defaultNavigation = [
  { label: 'Home', href: '/', active: true },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact Us', href: '/contact' }
];

const Header: React.FC<HeaderProps> = ({
  logo,
  companyName = "Company Name",
  navigation = defaultNavigation,
  showCTA = true,
  ctaText = "Free Consultation",
  ctaLink = "/contact",
  showNavigation = true,
  showLogo = true
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            {showLogo && (
              <div className="logo">
                {logo ? (
                  <Image src={logo} alt={companyName} width={120} height={40} className="logo-image" />
                ) : (
                  <div className="logo-text">
                    <span className="logo-icon">🏢</span>
                    {companyName}
                  </div>
                )}
              </div>
            )}

            {/* Desktop Navigation */}
            {showNavigation && (
              <nav className="desktop-nav">
                <ul className="nav-list">
                  {navigation.map((item, index) => (
                    <li key={index} className="nav-item">
                      <a 
                        href={item.href} 
                        className={`nav-link ${item.active ? 'active' : ''}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* CTA Button */}
            {showCTA && (
              <div className="header-cta">
                <a href={ctaLink} className="cta-button">
                  {ctaText}
                </a>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {showNavigation && (
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul className="mobile-nav-list">
                {navigation.map((item, index) => (
                  <li key={index} className="mobile-nav-item">
                    <a 
                      href={item.href} 
                      className={`mobile-nav-link ${item.active ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {showCTA && (
                  <li className="mobile-nav-item">
                    <a 
                      href={ctaLink} 
                      className="mobile-cta-button"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {ctaText}
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;