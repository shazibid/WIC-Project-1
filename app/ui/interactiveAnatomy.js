'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function InteractiveAnatomy({ title, imageSrc, imageAlt, anatomyParts }) {
  const [selectedPart, setSelectedPart] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handlePartClick = (part, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top - 10;
    
    if (selectedPart === part.id) {
      setSelectedPart(null);
    } else {
      setSelectedPart(part.id);
      setTooltipPosition({ x, y });
    }
  };

  return (
    <div className="anatomy-section">
      <h2 className="anatomy-title">{title}</h2>
      <p className="anatomy-instruction">Click on different parts of the {title.toLowerCase()} to learn more!</p>
      
      <div className="anatomy-container">
        <div className="anatomy-image-wrapper">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="anatomy-image"
          />
          
          {/* Clickable areas */}
          {anatomyParts.map((part) => (
            <button
              key={part.id}
              className={`anatomy-part ${selectedPart === part.id ? 'active' : ''}`}
              style={{
                left: `${part.x}%`,
                top: `${part.y}%`,
              }}
              onClick={(e) => handlePartClick(part, e)}
              aria-label={part.name}
            >
              <span className="anatomy-part-marker"></span>
            </button>
          ))}
        </div>

        {/* Tooltip/Definition Display */}
        {selectedPart && (
          <div 
            className="anatomy-tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            {anatomyParts.find(p => p.id === selectedPart) && (
              <>
                <h3 className="tooltip-title">
                  {anatomyParts.find(p => p.id === selectedPart).name}
                </h3>
                <p className="tooltip-description">
                  {anatomyParts.find(p => p.id === selectedPart).description}
                </p>
                <button 
                  className="tooltip-close"
                  onClick={() => setSelectedPart(null)}
                  aria-label="Close tooltip"
                >
                  ×
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Parts list below */}
      <div className="anatomy-parts-list">
        <h3>Anatomy Parts:</h3>
        <div className="parts-grid">
          {anatomyParts.map((part) => (
            <button
              key={part.id}
              className={`part-button ${selectedPart === part.id ? 'active' : ''}`}
              onClick={() => {
                const element = document.querySelector(`.anatomy-part[aria-label="${part.name}"]`);
                if (element) {
                  const rect = element.getBoundingClientRect();
                  setSelectedPart(part.id);
                  setTooltipPosition({
                    x: rect.left + rect.width / 2,
                    y: rect.top - 10
                  });
                }
              }}
            >
              {part.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

