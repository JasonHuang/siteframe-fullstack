'use client';

import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "欢迎来到未来主题",
  subtitle = "Future Theme",
  description = "体验现代化的设计风格",
  buttonText = "了解更多",
  buttonLink = "#",
  backgroundImage
}) => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl font-light mb-6">{subtitle}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <a 
          href={buttonLink}
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;