'use client'
import React from 'react';

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
  services?: Array<{
    label: string;
    href: string;
  }>;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  showSocial?: boolean;
  showCopyright?: boolean;
  config?: any;
}

const defaultQuickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' }
];

const defaultServices = [
  { label: 'Business Consulting', href: '/services/consulting' },
  { label: 'Technical Development', href: '/services/development' },
  { label: 'Digital Marketing', href: '/services/marketing' },
  { label: 'Brand Design', href: '/services/design' },
  { label: 'Operational Support', href: '/services/support' }
];

const defaultSocialLinks = [
  { platform: 'WeChat', url: '#', icon: '💬' },
  { platform: 'Weibo', url: '#', icon: '📱' },
  { platform: 'LinkedIn', url: '#', icon: '💼' },
  { platform: 'Email', url: 'mailto:info@company.com', icon: '📧' }
];

const Footer: React.FC<FooterProps> = ({
  companyName = "Company Name",
  companyDescription = "We are a professional business service provider, committed to providing high-quality solutions and services to our clients.",
  contactInfo = {
    address: "Business Center, Chaoyang District, Beijing",
    phone: "+86 400-123-4567",
    email: "info@company.com"
  },
  quickLinks = defaultQuickLinks,
  services = defaultServices,
  socialLinks = defaultSocialLinks,
  showSocial = true,
  showCopyright = true
}) => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Company Information */}
            <div className="footer-section company-info">
              <div className="company-logo">
                <span className="logo-icon">🏢</span>
                <h3>{companyName}</h3>
              </div>
              <p className="company-description">{companyDescription}</p>
              
              {/* Contact Information */}
              <div className="contact-info">
                {contactInfo.address && (
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>{contactInfo.address}</span>
                  </div>
                )}
                {contactInfo.phone && (
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>{contactInfo.phone}</span>
                  </div>
                )}
                {contactInfo.email && (
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>{contactInfo.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="section-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="section-title">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="footer-link">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            {showSocial && (
              <div className="footer-section">
                <h4 className="section-title">Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="social-link"
                      aria-label={social.platform}
                      title={social.platform}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-label">{social.platform}</span>
                    </a>
                  ))}
                </div>
                
                {/* QR Code */}
                <div className="qr-code">
                  <div className="qr-placeholder">
                    <span>📱</span>
                    <p>Scan to Follow</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Copyright */}
          {showCopyright && (
            <div className="footer-bottom">
              <div className="copyright">
                <p>&copy; 2024 {companyName}. All rights reserved.</p>
              </div>
              <div className="footer-bottom-links">
                <a href="/privacy" className="bottom-link">Privacy Policy</a>
                <a href="/terms" className="bottom-link">Terms of Service</a>
                <a href="/sitemap" className="bottom-link">Sitemap</a>
              </div>
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;