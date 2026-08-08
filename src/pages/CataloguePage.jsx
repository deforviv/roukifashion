// ============================================================
// ROUKI FASHION — Catalogue Page
// ============================================================

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data';

export default function CataloguePage({ onSelectProduct, wishlist, onToggleWishlist }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? [...products]
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="page-enter">
      <div className="page-header">
        <h1 className="page-title">Notre Catalogue</h1>
        <p className="page-subtitle">
          {filtered.length} création{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Category filter */}
      <div className="categories-scroll" style={{ padding: '0 20px', marginBottom: '16px' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`cat-catalogue-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
            style={{
              flexShrink: 0,
              padding: '8px 18px',
              borderRadius: '999px',
              border: activeCategory === cat.id ? '2px solid var(--brand-orange)' : '2px solid var(--brand-border)',
              background: activeCategory === cat.id ? 'var(--brand-orange)' : 'white',
              color: activeCategory === cat.id ? 'white' : 'var(--brand-gray-dark)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-main)',
              whiteSpace: 'nowrap',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="products-grid" style={{ paddingBottom: '30px' }}>
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
    </div>
  );
}
