// ============================================================
// ROUKI FASHION — Catalogue Page
// ============================================================

import { useState, useRef, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { categories, products } from '../data';

const ITEMS_PER_PAGE = 12;

export default function CataloguePage({ onSelectProduct, wishlist, onToggleWishlist }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  // When category changes, reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filtered =
    activeCategory === 'all'
      ? [...products]
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of the catalog grid instantly
    if (gridRef.current) {
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  };

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
      <div ref={gridRef} className="products-grid" style={{ paddingBottom: totalPages > 1 ? '10px' : '30px' }}>
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
              // Show current, first, last, and pages around current (simple logic for mobile)
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
              } else if (
                page === currentPage - 2 ||
                page === currentPage + 2
              ) {
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
