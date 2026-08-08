// ============================================================
// ROUKI FASHION — Product Card
// ============================================================

import { useState, memo } from 'react';

const ProductCard = memo(({ product, onSelect }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article
      className="product-card"
      id={`product-card-${product.id}`}
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      aria-label={`Voir ${product.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(product)}
    >
      <div className="product-img-wrap">
        {/* Skeleton while loading */}
        {!imgLoaded && (
          <div
            className="skeleton"
            style={{ position: 'absolute', inset: 0, borderRadius: 0 }}
          />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
        />

        {product.badge && (
          <span className="product-badge" aria-label={`Badge: ${product.badge}`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-category-tag">{product.categoryLabel}</p>
        <div className="product-footer" style={{ marginTop: '6px' }}>
          <span style={{ 
            fontSize: '0.75rem', 
            padding: '6px 12px', 
            background: 'var(--brand-orange-pale)', 
            color: 'var(--brand-orange)', 
            borderRadius: '999px', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.5px', 
            width: '100%', 
            textAlign: 'center',
            transition: 'var(--transition-fast)'
          }}>
            Voir le modèle
          </span>
        </div>
      </div>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
