// ============================================================
// ROUKI FASHION — Footer Component
// ============================================================

import logoRouki from '../assets/images/logo_rouki.png';
import { WHATSAPP_LINK } from '../data';

const YEAR = new Date().getFullYear();

const navLinks = [
  { label: 'Accueil',   tab: 'home' },
  { label: 'Catalogue', tab: 'catalogue' },
  { label: 'Premium',   tab: 'premium' },
  { label: 'Contact',   tab: 'contact' },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      {/* Top band */}
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src={logoRouki}
            alt="Rouki Fashion"
            className="footer-logo"
          />
          <p className="footer-tagline">
            L'élégance africaine sur‑mesure.<br />Centre de stylisme & couture pour femme.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h3 className="footer-col-title">Navigation</h3>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.tab}>
                <button
                  className="footer-link-btn"
                  onClick={() => onNavigate(l.tab)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contact</h3>
          <ul className="footer-links">
            <li>
              <a
                className="footer-link-btn"
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Bonjour Rouki Fashion ! Je souhaite en savoir plus sur vos créations.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a className="footer-link-btn" href="tel:+2290143271803">
                +229 01 43 27 18 03
              </a>
            </li>
          </ul>

          <h3 className="footer-col-title" style={{ marginTop: '20px' }}>Adresse</h3>
          <p className="footer-address">
            Quartier Dépôt,<br />
            Von de Charles Toko,<br />
            Parakou, Bénin
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {YEAR} Rouki Fashion. Tous droits réservés.
        </p>
        <p className="footer-legal">
          Couture &amp; Stylisme · Parakou, Bénin
        </p>
      </div>
    </footer>
  );
}
