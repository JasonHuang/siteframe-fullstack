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
    name: 'David Fuji',
    position: 'Founder & CEO',
    bio: 'Renewable energy pioneer with 20+ years experience in solar technology and sustainable energy solutions.',
    avatar: '/themes/company-theme/images/team/team-01.jpg'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    position: 'Chief Engineer',
    bio: 'Solar systems expert specializing in energy storage design and installation optimization.',
    avatar: '/themes/company-theme/images/team/team-02.jpg'
  },
  {
    id: '3',
    name: 'Mark Rodriguez',
    position: 'Project Manager',
    bio: 'Experienced project coordinator ensuring seamless solar installation and customer satisfaction.',
    avatar: '/themes/company-theme/images/team/team-03.jpg'
  }
];

const defaultValues = [
  'Sustainable Energy',
  'Quality Installation',
  'Customer Satisfaction',
  'Environmental Responsibility'
];

const About: React.FC<AboutProps> = ({ 
  title = "About Fujiess",
  description = "Fujiess is a leading solar power system provider based in Saipan, specializing in residential and commercial energy storage solutions. Since our establishment, we have been committed to bringing clean, sustainable energy solutions to the Pacific region, helping families and businesses reduce their carbon footprint while achieving energy independence.",
  mission = "To accelerate the transition to sustainable energy by providing reliable, efficient solar power systems and energy storage solutions that empower our customers to harness the power of the sun.",
  vision = "To become the premier renewable energy provider in the Pacific region, creating a sustainable future through innovative solar technology and exceptional customer service.",
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