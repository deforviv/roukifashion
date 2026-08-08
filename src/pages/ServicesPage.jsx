// ============================================================
// ROUKI FASHION — Services Page
// ============================================================

import Icon from '../components/Icon';
import { services } from '../data';

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <h1 className="page-title">Nos Services</h1>
        <p className="page-subtitle">Ce que nous faisons pour vous</p>
      </div>

      {/* Intro card */}
      <div
        style={{
          margin: '0 20px 24px',
          background: 'linear-gradient(135deg, var(--brand-orange) 0%, #ff6b2b 100%)',
          borderRadius: '24px',
          padding: '28px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '120px',
            height: '120px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-10px',
            width: '90px',
            height: '90px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: '1.4rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '8px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Rouki Fashion
        </p>
        <h2
          style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.3,
            marginBottom: '10px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          L'excellence de la couture africaine à Parakou
        </h2>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.6,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Couture sur mesure, stylisme personnalisé et créations exclusives pour femme.
          Notre atelier est situé au quartier Dépôt, Von de Charles Toko, Parakou.
        </p>
      </div>

      {/* Services list */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card" id={`service-${service.id}`}>
            <div
              className="service-icon-wrap"
              style={{ background: service.bg }}
            >
              <Icon name={service.icon} size={26} />
            </div>
            <div className="service-content">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc || service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
