// ============================================================
// ROUKI FASHION — Premium Page
// ============================================================

import { useState, useRef, useEffect, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { products } from '../data';

const ITEMS_PER_PAGE = 12;
const PICKS_PER_CATEGORY = 10;

// Select top N from each category then interleave them
function buildPremiumSelection(allProducts, perCat) {
  const byCategory = {};
  allProducts.forEach((p) => {
    if (!byCategory[p.category]) byCategory[p.category] = [];
    byCategory[p.category].push(p);
  });

  const groups = Object.values(byCategory).map((g) => g.slice(0, perCat));
  const indices = new Array(groups.length).fill(0);
  const result = [];

  while (true) {
    let added = false;
    for (let g = 0; g < groups.length; g++) {
      if (indices[g] < groups[g].length) {
        result.push(groups[g][indices[g]]);
        indices[g]++;
        added = true;
      }
    }
    if (!added) break;
  }
  return result;
}

export default function PremiumPage({ onSelectProduct, wishlist, onToggleWishlist }) {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  const premiumProducts = useMemo(
    () => buildPremiumSelection(products, PICKS_PER_CATEGORY),
    []
  );

  const totalPages = Math.ceil(premiumProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = premiumProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  };

  return (
    <div className="page-enter">
      {/* Hero Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--brand-dark) 0%, #2d1000 100%)',
          margin: '20px 20px 0',
          borderRadius: '24px',
          padding: '28px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', background: 'var(--brand-gold)', borderRadius: '50%', opacity: 0.12 }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-20px', width: '120px', height: '120px', background: 'var(--brand-gold)', borderRadius: '50%', opacity: 0.08 }} />

        <h1
          className="page-title"
          style={{ color: 'white', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          Collection Premium <Icon name="star" size={24} color="var(--brand-gold)" />
        </h1>
        <p
          className="page-subtitle"
          style={{ color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 1, marginTop: '8px', lineHeight: 1.5 }}
        >
          Découvrez nos créations exclusives et nos modèles haut de gamme, confectionnés pour les grandes occasions.
        </p>
        <p
          style={{ color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1, marginTop: '6px', fontSize: '0.78rem' }}
        >
          {premiumProducts.length} création{premiumProducts.length > 1 ? 's' : ''} sélectionnée{premiumProducts.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Products Grid */}
      <div
        ref={gridRef}
        className="products-grid"
        style={{ paddingTop: '20px', paddingBottom: totalPages > 1 ? '10px' : '30px' }}
      >
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
            wishlist={wishlist}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            className="pagination-btn pagination-nav"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Page précédente"
          >
            <Icon name="arrow-left" size={16} />
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    className={`pagination-btn pagination-num ${page === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="pagination-ellipsis">...</span>;
              }
              return null;
            })}
          </div>

          <button
            className="pagination-btn pagination-nav"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Page suivante"
          >
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
