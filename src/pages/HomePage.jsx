// ============================================================
// ROUKI FASHION — Home Page
// ============================================================

import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { categories, products } from '../data';

export default function HomePage({ onSelectProduct, wishlist, onToggleWishlist, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="page-enter">
      {/* Hero Carousel */}
      <HeroBanner />

      {/* Categories */}
      <section className="categories-section" aria-label="Catégories">
        <div className="categories-scroll">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-${cat.id}`}
              className={`category-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              aria-label={`Catégorie: ${cat.label}`}
            >
              <div className="category-icon-wrap">
                <Icon name={cat.icon} size={26} />
              </div>
              <span className="category-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="products-section" aria-label="Nos créations">
        <div className="section-header">
          <h2 className="section-title">Nos Créations</h2>
          <button 
            className="section-link" 
            aria-label="Voir toutes les créations"
            onClick={() => onNavigate('catalogue')}
          >
            Voir tout
          </button>
        </div>

        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: 'var(--brand-gray)',
              fontSize: '0.9rem',
            }}
          >
            Aucune création dans cette catégorie pour l'instant.
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                wishlist={wishlist}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
