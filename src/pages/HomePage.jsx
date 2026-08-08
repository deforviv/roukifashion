// ============================================================
// ROUKI FASHION — Home Page
// ============================================================

import { useState, useMemo } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { categories, products } from '../data';

const MAX_HOME_PRODUCTS = 45;

// Shuffle and cap the product list once — mix all categories
function getSampledProducts(allProducts, limit) {
  // Interleave by category so the mix is balanced
  const byCategory = {};
  allProducts.forEach((p) => {
    if (!byCategory[p.category]) byCategory[p.category] = [];
    byCategory[p.category].push(p);
  });
  const cats = Object.values(byCategory);
  const interleaved = [];
  const maxRounds = Math.ceil(limit / cats.length);
  for (let i = 0; i < maxRounds; i++) {
    cats.forEach((group) => {
      if (group[i]) interleaved.push(group[i]);
    });
  }
  return interleaved.slice(0, limit);
}

export default function HomePage({ onSelectProduct, wishlist, onToggleWishlist, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Stable interleaved sample — computed once
  const sampledProducts = useMemo(() => getSampledProducts(products, MAX_HOME_PRODUCTS), []);

  const filtered =
    activeCategory === 'all'
      ? sampledProducts
      : sampledProducts.filter((p) => p.category === activeCategory);

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
