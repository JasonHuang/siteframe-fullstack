'use client'
import React, { useState } from 'react';

interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: string;
  website?: string;
}

interface ContactProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
  showForm?: boolean;
  showMap?: boolean;
  config?: any;
}

const defaultContactInfo: ContactInfo = {
  address: '1 Jianguomenwai Avenue, Chaoyang District, Beijing',
  phone: '+86 10 1234 5678',
  email: 'contact@company.com',
  workingHours: 'Monday to Friday 9:00-18:00',
  website: 'www.company.com'
};

const Contact: React.FC<ContactProps> = ({ 
  title = "Contact Us",
  subtitle = "We look forward to working with you",
  contactInfo = defaultContactInfo,
  showForm = true,
  showMap = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Should call actual API here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">{title}</h2>
          {subtitle && (
            <p className="contact-subtitle">{subtitle}</p>
          )}
        </div>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-items">
              {contactInfo.address && (
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <strong>Address</strong>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
              )}
              
              {contactInfo.phone && (
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-details">
                    <strong>Phone</strong>
                    <p>{contactInfo.phone}</p>
                  </div>
                </div>
              )}
              
              {contactInfo.email && (
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-details">
                    <strong>Email</strong>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
              )}
              
              {contactInfo.workingHours && (
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-details">
                    <strong>Working Hours</strong>
                    <p>{contactInfo.workingHours}</p>
                  </div>
                </div>
              )}
              
              {contactInfo.website && (
                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div className="info-details">
                    <strong>Website</strong>
                    <p>{contactInfo.website}</p>
                  </div>
                </div>
              )}
            </div>
            
            {showMap && (
              <div className="map-placeholder">
                <p>Map Location</p>
              </div>
            )}
          </div>
          
          {/* Contact Form */}
          {showForm && (
            <div className="contact-form">
              <h3>Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  ✅ Message sent successfully! We will contact you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  ❌ Failed to send, please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="form-row full-width">
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Please select inquiry type</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row full-width">
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      disabled={isSubmitting}
                      placeholder="Please describe your requirements in detail..."
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;