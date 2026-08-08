// ============================================================
// ROUKI FASHION — Contact Page
// ============================================================

import Icon from '../components/Icon';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../data';

const contacts = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+229 01 43 27 18 03',
    href: `${WHATSAPP_LINK}?text=${encodeURIComponent('Bonjour Rouki Fashion ! Je souhaite en savoir plus sur vos créations.')}`,
    icon: 'whatsapp',
    iconBg: 'linear-gradient(135deg, #25D366, #128C7E)',
    external: true,
  },
  {
    id: 'phone',
    label: 'Téléphone',
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
    icon: 'phone',
    iconBg: 'linear-gradient(135deg, #1A73E8, #1565C0)',
    external: false,
  },
  {
    id: 'location',
    label: 'Adresse',
    value: 'Quartier Dépôt, Von de Charles Toko',
    href: 'https://maps.google.com/?q=Parakou,Benin',
    icon: 'mappin',
    iconBg: 'linear-gradient(135deg, #FF4D00, #FF6B2B)',
    external: true,
  },
  {
    id: 'hours',
    label: 'Horaires',
    value: 'Lun – Sam : 8h00 – 19h00',
    href: null,
    icon: 'clock',
    iconBg: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="contact-hero">
        <p
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '6px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Parlons couture
        </p>
        <h1 className="contact-hero-title">Contactez-nous</h1>
        <p className="contact-hero-sub">
          Une question ? Une commande sur mesure ?<br />
          Nous sommes à votre disposition.
        </p>
      </div>

      {/* Contact cards */}
      <div className="contact-cards">
        {contacts.map((c) => {
          const CardTag = c.href ? 'a' : 'div';
          const linkProps = c.href
            ? {
                href: c.href,
                ...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
              }
            : {};

          return (
            <CardTag
              key={c.id}
              id={`contact-${c.id}`}
              className="contact-card"
              aria-label={`${c.label}: ${c.value}`}
              {...linkProps}
            >
              <div
                className="contact-card-icon"
                style={{ background: c.iconBg }}
              >
                <Icon name={c.icon} size={22} />
              </div>
              <div className="contact-card-body">
                <p className="contact-card-label">{c.label}</p>
                <p className="contact-card-value">{c.value}</p>
              </div>
              {c.href && (
                <div className="contact-card-arrow">
                  <Icon name="arrow-right" size={16} />
                </div>
              )}
            </CardTag>
          );
        })}
      </div>

      {/* Map/address card */}
      <div className="contact-map-section">
        <div className="map-card">
          <p className="map-label">📍 Notre Atelier</p>
          <p className="map-address">Quartier Dépôt, Von de Charles Toko</p>
          <p className="map-city">Parakou, Bénin</p>

          <div className="map-icon-row">
            <div className="map-dot" />
            <p className="map-open-text">Ouvert aujourd'hui · 8h00 – 19h00</p>
          </div>
        </div>

        {/* About brand */}
        <div
          style={{
            marginTop: '16px',
            background: 'white',
            borderRadius: '20px',
            padding: '22px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                background: 'var(--brand-orange)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'white', fontFamily: 'var(--font-main)', letterSpacing: '-1px' }}>R</span>
            </div>
            <div>
              <p style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--brand-dark)' }}>Rouki Fashion</p>
              <p style={{ fontSize: '0.72rem', fontFamily: 'var(--font-cursive)', color: 'var(--brand-orange)' }}>Centre de Stylisme</p>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--brand-gray-dark)', lineHeight: 1.7 }}>
            Rouki Fashion est un centre de stylisme et couture haut de gamme dédié à la femme africaine. Nous créons des pièces uniques qui célèbrent l'élégance, le savoir-faire et l'identité culturelle à Parakou, Bénin.
          </p>
        </div>
      </div>
    </div>
  );
}
