'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  items?: GalleryItem[];
  columns?: 2 | 3 | 4;
  showModal?: boolean;
  config?: any;
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/themes/company-theme/images/business/business-01.jpg',
    alt: 'Business Meeting',
    title: 'Professional Meetings',
    description: 'Strategic business discussions and planning sessions'
  },
  {
    id: '2',
    src: '/themes/company-theme/images/business/business-04.jpg',
    alt: 'Team Collaboration',
    title: 'Team Collaboration',
    description: 'Collaborative work environment and teamwork'
  },
  {
    id: '3',
    src: '/themes/company-theme/images/business/business-05.jpg',
    alt: 'Office Environment',
    title: 'Modern Office',
    description: 'Contemporary workspace and office facilities'
  },
  {
    id: '4',
    src: '/themes/company-theme/images/business/business-06.jpg',
    alt: 'Business Presentation',
    title: 'Presentations',
    description: 'Professional presentations and knowledge sharing'
  },
  {
    id: '5',
    src: '/themes/company-theme/images/business/business-07.jpg',
    alt: 'Business Growth',
    title: 'Business Growth',
    description: 'Strategic planning and business development'
  },
  {
    id: '6',
    src: '/themes/company-theme/images/business/business-10.jpg',
    alt: 'Innovation',
    title: 'Innovation',
    description: 'Creative thinking and innovative solutions'
  }
];

const Gallery: React.FC<GalleryProps> = ({ 
  title = "Our Work Gallery",
  subtitle = "Showcasing our professional environment and achievements",
  items = defaultGalleryItems,
  columns = 3,
  showModal = true
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    if (showModal) {
      setSelectedImage(item);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">{title}</h2>
          {subtitle && (
            <p className="gallery-subtitle">{subtitle}</p>
          )}
        </div>
        
        <div className={`gallery-grid gallery-grid-${columns}`}>
          {items.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openModal(item)}
            >
              <div className="gallery-image-wrapper">
                <Image 
                  src={item.src} 
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    {item.title && (
                      <h3 className="gallery-item-title">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="gallery-item-description">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="gallery-modal-image">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="modal-image"
              />
            </div>
            <div className="gallery-modal-info">
              {selectedImage.title && (
                <h3 className="modal-title">{selectedImage.title}</h3>
              )}
              {selectedImage.description && (
                <p className="modal-description">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;