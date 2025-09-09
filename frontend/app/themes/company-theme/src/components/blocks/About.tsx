'use client'
import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface AboutProps {
  title?: string;
  description?: string;
  mission?: string;
  vision?: string;
  values?: string[];
  teamMembers?: TeamMember[];
  showTeam?: boolean;
  companyImage?: string;
  config?: any;
}

const defaultTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Zhang',
    position: 'Chief Executive Officer',
    bio: 'With 15 years of industry experience, dedicated to driving enterprise innovation and development.',
    avatar: '/themes/company-theme/images/team/team-01.jpg'
  },
  {
    id: '2',
    name: 'Lisa Li',
    position: 'Chief Technology Officer',
    bio: 'Senior technical expert responsible for company technology strategy planning and implementation.',
    avatar: '/themes/company-theme/images/team/team-02.jpg'
  },
  {
    id: '3',
    name: 'Michael Wang',
    position: 'Chief Marketing Officer',
    bio: 'Marketing expert specializing in brand building and market expansion.',
    avatar: '/themes/company-theme/images/team/team-03.jpg'
  }
];

const defaultValues = [
  'Integrity First',
  'Customer Focused',
  'Continuous Innovation',
  'Team Collaboration'
];

const About: React.FC<AboutProps> = ({ 
  title = "About Us",
  description = "We are a professional enterprise focused on providing high-quality services to our clients. Since our establishment, we have always adhered to customer-oriented approach and technology-driven innovation, providing comprehensive solutions for clients across various industries.",
  mission = "Through professional services and innovative solutions, we help clients achieve their business goals and create greater value.",
  vision = "To become the industry-leading service provider, winning customer trust through excellent quality and service.",
  values = defaultValues,
  teamMembers = defaultTeamMembers,
  showTeam = true,
  companyImage = "/themes/company-theme/images/about/about-01.jpg"
}) => {
  return (
    <section className="about-section">
      <div className="container">
        {/* Company Introduction */}
        <div className="about-intro">
          <div className="about-content">
            <h2 className="about-title">{title}</h2>
            <p className="about-description">{description}</p>
            
            <div className="about-details">
              <div className="detail-item">
                <h3>Our Mission</h3>
                <p>{mission}</p>
              </div>
              
              <div className="detail-item">
                <h3>Our Vision</h3>
                <p>{vision}</p>
              </div>
              
              <div className="detail-item">
                <h3>Core Values</h3>
                <div className="values-grid">
                  {values.map((value, index) => (
                    <div key={index} className="value-item">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            {companyImage ? (
              <Image 
                src={companyImage} 
                alt="About our company"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            ) : (
              <div className="image-placeholder">
                <span>Company Image</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Team Introduction */}
        {showTeam && teamMembers.length > 0 && (
          <div className="team-section">
            <h3 className="team-title">Our Team</h3>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-avatar">
                    {member.avatar ? (
                      <Image src={member.avatar} alt={member.name} width={80} height={80} className="rounded-full" />
                    ) : (
                      <div className="avatar-placeholder">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-position">{member.position}</p>
                  {member.bio && (
                    <p className="member-bio">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;