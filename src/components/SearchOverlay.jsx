// ============================================================
// ROUKI FASHION — Search Overlay
// ============================================================

import { useState, useEffect, useRef } from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';

export default function SearchOverlay({ onClose, onSelectProduct, wishlist, onToggleWishlist }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Auto-focus the input when overlay opens
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const results = query.trim().length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelect = (product) => {
    onClose();
    onSelectProduct(product);
  };

  return (
    <div
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="search-panel">
        {/* Search bar */}
        <div className="search-bar-row">
          <div className="search-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-gray)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              className="search-input"
              placeholder="Rechercher un modèle, une catégorie…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              spellCheck="false"
              id="search-input-field"
            />
            {query && (
              <button className="search-clear-btn" onClick={() => setQuery('')} aria-label="Effacer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
          <button className="search-cancel-btn" onClick={onClose}>Annuler</button>
        </div>

        {/* Results */}
        <div className="search-results-area">
          {query.trim().length < 2 && (
            <div className="search-hint">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p>Tapez au moins 2 caractères pour lancer la recherche</p>
            </div>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="search-hint">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p>Aucun modèle trouvé pour <strong>"{query}"</strong></p>
            </div>
          )}

          {results.length > 0 && (
            <>
              <p className="search-count">
                {results.length} résultat{results.length > 1 ? 's' : ''} pour <strong>"{query}"</strong>
              </p>
              <div className="products-grid" style={{ padding: '0 16px 100px' }}>
                {results.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={handleSelect}
                    wishlist={wishlist}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
