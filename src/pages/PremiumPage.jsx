// ============================================================
// ROUKI FASHION — Premium Page
// ============================================================

import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { products } from '../data';

export default function PremiumPage({ onSelectProduct, wishlist, onToggleWishlist }) {
  // Filter only products marked as Premium or Exclusif
  const premiumProducts = products.filter(
    (p) => p.badge === 'Premium' || p.badge === 'Exclusif' || parseInt(p.price.replace(/\D/g, ''), 10) >= 60000
  );

  return (
    <div className="page-enter">
      <div className="page-header" style={{
        background: 'linear-gradient(135deg, var(--brand-dark) 0%, #2d1000 100%)',
        margin: '20px 20px 0',
        borderRadius: '24px',
        padding: '28px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', background: 'var(--brand-gold)', borderRadius: '50%', opacity: 0.12 }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-20px', width: '120px', height: '120px', background: 'var(--brand-gold)', borderRadius: '50%', opacity: 0.08 }} />
        
        <h1 className="page-title" style={{ color: 'white', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          Collection Premium <Icon name="star" size={24} color="var(--brand-gold)" />
        </h1>
        <p className="page-subtitle" style={{ color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 1, marginTop: '8px', lineHeight: 1.5 }}>
          Découvrez nos créations exclusives et nos modèles haut de gamme, confectionnés pour les grandes occasions.
        </p>
      </div>

      {premiumProducts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" style={{ background: 'var(--brand-gray-light)' }}>
            <Icon name="star" size={36} color="var(--brand-gold)" />
          </div>
          <h2 className="empty-title">Aucune création premium pour l'instant</h2>
          <p className="empty-desc">
            Nos créations exclusives seront bientôt disponibles ici.
          </p>
        </div>
      ) : (
        <div className="products-grid" style={{ paddingTop: '20px', paddingBottom: '30px' }}>
          {premiumProducts.map((product) => (
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
    </div>
  );
}
