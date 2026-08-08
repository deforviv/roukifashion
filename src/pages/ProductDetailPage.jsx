// ============================================================
// ROUKI FASHION — Product Detail Page
// ============================================================

import Icon from '../components/Icon';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data';

export default function ProductDetailPage({ product, onBack }) {

  // Construit l'URL absolue de l'image du modèle
  const imageUrl = new URL(product.image, window.location.origin).href;

  // Message WhatsApp avec lien direct vers l'image du modèle
  const message =
    `Bonjour Rouki Fashion 👋\n\n` +
    `Je suis intéressée par ce modèle :\n\n` +
    `👗 *${product.name}*\n` +
    `📁 Catégorie : ${product.categoryLabel}\n\n` +
    `🖼️ Voir le modèle : ${imageUrl}\n\n` +
    `Pouvez-vous me donner plus d'informations sur ce modèle et les tarifs ?`;

  const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

  return (
    <div className="detail-page page-enter">

      {/* Hero Image */}
      <div className="detail-hero">
        <img src={product.image} alt={product.name} />
        <div className="detail-hero-overlay" />

        <button
          className="detail-back-btn"
          id="btn-back-detail"
          onClick={onBack}
          aria-label="Retour"
        >
          <Icon name="arrow-left" size={20} />
        </button>
      </div>

      {/* Body */}
      <div className="detail-body">
        <span className="detail-tag">{product.categoryLabel}</span>

        <h1 className="detail-name">{product.name}</h1>

        <div className="detail-divider" />

        <p className="detail-section-label">Description</p>
        <p className="detail-description">{product.description}</p>

        <div className="detail-divider" />

        <p className="detail-section-label">Détails</p>
        <div className="detail-specs">
          {Object.entries(product.specs).map(([key, val]) => (
            <div key={key} className="detail-spec">
              <p className="detail-spec-label">{key}</p>
              <p className="detail-spec-value">{val}</p>
            </div>
          ))}
        </div>

        {/* How to order info */}
        <div
          style={{
            background: 'var(--brand-orange-pale)',
            borderRadius: '16px',
            padding: '16px',
            borderLeft: '4px solid var(--brand-orange)',
          }}
        >
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--brand-orange)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '6px',
            }}
          >
            Comment commander ?
          </p>
          <p style={{ fontSize: '0.84rem', color: 'var(--brand-gray-dark)', lineHeight: 1.7 }}>
            Cliquez sur le bouton — un message avec le lien du modèle sera envoyé directement à Rouki Fashion sur WhatsApp.
          </p>
        </div>
      </div>

      {/* Fixed CTA Bar */}
      <div className="detail-cta-bar">
        <a
          className="cta-whatsapp"
          id={`btn-whatsapp-${product.id}`}
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Commander via WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Commander via WhatsApp
        </a>
        <a
          className="cta-call"
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          aria-label="Appeler Rouki Fashion"
        >
          <Icon name="phone" size={22} />
        </a>
      </div>
    </div>
  );
}
