'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function InfoModal({ isOpen, onClose, title, summary, bullets, imageSrc, imageAlt }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="modal-backdrop" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="modal-content">
          {/* Left side - Image */}
          <div className="modal-image-container">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={400}
              className="modal-image"
            />
          </div>
          
          {/* Right side - Text */}
          <div className="modal-text-container">
            <h2 id="modal-title" className="modal-title">{title}</h2>
            <p className="modal-summary">{summary}</p>
            <ul className="modal-bullets">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

