// ============================================================
// ROUKI FASHION — Root App Component
// ============================================================

import { useState, useCallback, Suspense, lazy } from 'react';
import './index.css';

import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import SearchOverlay from './components/SearchOverlay';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage'));
const PremiumPage = lazy(() => import('./pages/PremiumPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleToggleWishlist = useCallback((productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = useCallback(() => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNavigate = useCallback((tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // If a product is selected, show the detail page (no bottom nav)
  if (selectedProduct) {
    return (
      <div className="app-wrapper">
        <div className="main-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Suspense fallback={<div className="loading-screen" />}>
            <ProductDetailPage
              product={selectedProduct}
              onBack={handleBack}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HomePage
              onSelectProduct={handleSelectProduct}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onNavigate={handleNavigate}
            />
            <Footer onNavigate={handleNavigate} />
          </>
        );
      case 'catalogue':
        return (
          <>
            <CataloguePage
              onSelectProduct={handleSelectProduct}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
            <Footer onNavigate={handleNavigate} />
          </>
        );
      case 'premium':
        return (
          <>
            <PremiumPage
              onSelectProduct={handleSelectProduct}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
            <Footer onNavigate={handleNavigate} />
          </>
        );
      case 'contact':
        return (
          <>
            <ContactPage />
            <Footer onNavigate={handleNavigate} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      <TopNav onSearch={() => setShowSearch(true)} />
      <main className="main-content" role="main">
        <Suspense fallback={<div className="loading-screen" />}>
          {renderPage()}
        </Suspense>
      </main>
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleNavigate}
      />
      {showSearch && (
        <SearchOverlay
          onClose={() => setShowSearch(false)}
          onSelectProduct={(p) => { setShowSearch(false); handleSelectProduct(p); }}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />
      )}
    </div>
  );
}
