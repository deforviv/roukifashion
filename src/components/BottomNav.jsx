// ============================================================
// ROUKI FASHION — Bottom Navigation Bar
// ============================================================

import Icon from './Icon';

const tabs = [
  { id: 'home',     label: 'Accueil',  icon: 'home',  badge: null },
  { id: 'premium',  label: 'Premium',  icon: 'star',  badge: null },
  { id: 'catalogue',label: 'Catalogue',icon: 'bag',   badge: null },
  { id: 'contact',  label: 'Contact',  icon: 'user',  badge: null },
];

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Navigation principale">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          id={`nav-tab-${tab.id}`}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          aria-label={tab.label}
          aria-current={activeTab === tab.id ? 'page' : undefined}
        >
          <Icon name={tab.icon} size={22} />
          <span className="nav-tab-label">{tab.label}</span>
          {tab.badge && (
            <span className="nav-badge" aria-label={`${tab.badge} articles`}>
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}
