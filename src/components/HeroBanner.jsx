// ============================================================
// ROUKI FASHION — Hero Banner Carousel
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import Icon from './Icon';
import { banners } from '../data';

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % banners.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="hero-section">
      <div className="hero-banner" role="region" aria-label="Promotions en vedette">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`banner-slide ${index === current ? 'active' : ''}`}
            style={{ background: banner.bg }}
          >
            {/* Background blurred image */}
            <img
              className="banner-bg-image"
              src={banner.image}
              alt=""
              aria-hidden="true"
              fetchpriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              style={{ filter: 'blur(2px) brightness(0.4)', objectPosition: 'top' }}
            />

            <div className="banner-overlay" />

            {/* Foreground model */}
            <img
              className="banner-model-preview"
              src={banner.modelImage}
              alt="Modèle Rouki Fashion"
              fetchpriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
            />

            <div className="banner-content">
              <span className="banner-welcome">Bienvenue chez Rouki Fashion</span>
              <h2 className="banner-title" style={{ whiteSpace: 'pre-line' }}>
                {banner.title}
              </h2>
              <p className="banner-subtitle">{banner.subtitle}</p>
            </div>

            <button className="banner-cta" aria-label="Voir la collection">
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        ))}

        {/* Navigation dots */}
        <div className="banner-dots" role="tablist" aria-label="Diapositives">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              role="tab"
              aria-selected={index === current}
              aria-label={`Diapositive ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
