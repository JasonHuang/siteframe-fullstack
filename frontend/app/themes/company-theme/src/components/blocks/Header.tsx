'use client'
import React, { useEffect, useMemo, useState } from 'react';
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
  { label: 'Home', href: '/#home', active: true },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact Us', href: '/#contact' }
];

const Header: React.FC<HeaderProps> = ({
  logo,
  companyName = "Fujiess",
  navigation = defaultNavigation,
  showCTA = true,
  ctaText = "Free Consultation",
  ctaLink = "/#contact",
  showNavigation = true,
  showLogo = true
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const sectionIds = useMemo(() => {
    return navigation
      .map((nav) => nav.href.match(/#(.+)$/)?.[1])
      .filter((id): id is string => !!id);
  }, [navigation]);

  useEffect(() => {
    // Initialize from URL hash on mount
    if (typeof window !== 'undefined') {
      const initialHash = window.location.hash?.replace('#', '') || 'home';
      setActiveSection(initialHash);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // Trigger when the section top enters upper half of viewport
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.25,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without reload
        if (typeof window !== 'undefined' && window.history) {
          window.history.pushState(null, '', `/#${id}`);
        }
        setActiveSection(id);
        setIsMobileMenuOpen(false);
      }
    }
  };

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
                  {navigation.map((item, index) => {
                    const id = item.href.match(/#(.+)$/)?.[1];
                    const isActive = id ? activeSection === id : !!item.active;
                    return (
                      <li key={index} className="nav-item">
                        <a
                          href={item.href}
                          className={`nav-link ${isActive ? 'active' : ''}`}
                          onClick={(e) => handleNavClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}

            {/* CTA Button */}
            {showCTA && (
              <div className="header-cta">
                <a href={ctaLink} className="cta-button" onClick={(e) => handleNavClick(e, ctaLink)}>
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
                {navigation.map((item, index) => {
                  const id = item.href.match(/#(.+)$/)?.[1];
                  const isActive = id ? activeSection === id : !!item.active;
                  return (
                    <li key={index} className="mobile-nav-item">
                      <a
                        href={item.href}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                {showCTA && (
                  <li className="mobile-nav-item">
                    <a
                      href={ctaLink}
                      className="mobile-cta-button"
                      onClick={(e) => handleNavClick(e, ctaLink)}
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