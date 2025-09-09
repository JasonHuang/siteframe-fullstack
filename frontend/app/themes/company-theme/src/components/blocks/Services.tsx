'use client'
import React from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
  columns?: 2 | 3 | 4;
  config?: any;
}

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'Professional Consulting',
    description: 'Providing professional industry consulting services to help enterprises develop strategies and solutions.',
    icon: '💼',
    image: '/themes/company-theme/images/services/service-01.jpg'
  },
  {
    id: '2',
    title: 'Technical Development',
    description: 'Our professional technical team provides customized software development services for clients.',
    icon: '⚙️',
    image: '/themes/company-theme/images/services/service-02.jpg'
  },
  {
    id: '3',
    title: 'Project Management',
    description: 'Experienced project management team ensuring projects are completed on time and with quality.',
    icon: '📊',
    image: '/themes/company-theme/images/services/service-03.jpg'
  },
  {
    id: '4',
    title: 'After-sales Support',
    description: 'Comprehensive after-sales support services to ensure customer satisfaction.',
    icon: '🛠️',
    image: '/themes/company-theme/images/services/service-04.jpg'
  }
];

const Services: React.FC<ServicesProps> = ({ 
  title = "Our Services",
  subtitle = "Providing comprehensive professional services for you",
  services = defaultServices,
  columns = 3
}) => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">{title}</h2>
          {subtitle && (
            <p className="services-subtitle">{subtitle}</p>
          )}
        </div>
        
        <div className={`services-grid services-grid-${columns}`}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {service.image && (
                <div className="service-image">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              {service.icon && (
                <div className="service-icon">
                  {service.icon}
                </div>
              )}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {service.link && (
                <a href={service.link} className="service-link">
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;