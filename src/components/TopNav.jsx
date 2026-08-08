// ============================================================
// ROUKI FASHION — Top Navigation Bar
// ============================================================

import Icon from './Icon';
import logoRouki from '../assets/images/logo_rouki.png';

export default function TopNav({ onSearch }) {
  return (
    <nav className="top-nav">
      {/* Logo image réel fourni par le client */}
      <div className="logo-wrapper">
        <img
          src={logoRouki}
          alt="Rouki Fashion — Centre de Stylisme Parakou"
          style={{
            /* Le PNG est 1024×1024 avec beaucoup d'espace blanc interne.
               On agrandit l'image et on rogne visuellement via overflow hidden + margin négatif. */
            width: '180px',
            height: 'auto',
            display: 'block',
            /* Compensation de l'espace blanc interne du PNG (~20% de chaque côté) */
            marginLeft: '-18px',
            marginTop: '-4px',
            marginBottom: '-4px',
          }}
        />
      </div>

      <div className="nav-actions">
        <button
          className="nav-icon-btn"
          id="btn-search"
          aria-label="Rechercher"
          onClick={onSearch}
        >
          <Icon name="search" size={20} />
        </button>
      </div>
    </nav>
  );
}
