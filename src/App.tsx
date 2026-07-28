import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Phone, ArrowUp, MessageCircle, RefreshCw } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';

// Lazy loading all pages for optimized bundle size & fast initial loads
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Component to handle auto scroll-to-top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for Back-To-Top visibility
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const openOrderForm = (medicineName = '') => {
    setPrefilledMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Premium loading spinner
  const pageLoader = (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>
        <RefreshCw className="w-12 h-12 text-[#0A8F6A] absolute inset-0 animate-spin" />
      </div>
      <div className="text-center">
        <p className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">Lal Medical Gaya</p>
        <p className="text-xs text-slate-400 mt-1">Dispensing care and authenticity...</p>
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      
      {/* Root Layout wrapper */}
      <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
        
        {/* Sticky Header/Navigation */}
        <Navbar onOrderClick={() => openOrderForm('')} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Suspense fallback={pageLoader}>
            <Routes>
              <Route path="/" element={<Home onOrderClick={openOrderForm} />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services onOrderClick={openOrderForm} />} />
              <Route path="/gallery" element={<Gallery onOrderClick={openOrderForm} />} />
              <Route path="/contact" element={<Contact onOrderClick={() => openOrderForm('')} />} />
              {/* Fallback route for solid SPA handling */}
              <Route path="*" element={<Home onOrderClick={openOrderForm} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Shared Global Footer with Tracking Hook */}
        <Footer />

        {/* Floating WhatsApp Order Modal Form */}
        <WhatsAppOrderForm 
          isOpen={isOrderModalOpen} 
          onClose={() => setIsOrderModalOpen(false)} 
          initialMedicineName={prefilledMedicine}
        />

        {/* Floating Action Triggers */}
        <div id="floating-actions" className="fixed bottom-6 right-6 z-30 flex flex-col space-y-3 items-center">
          
          {/* 1. Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={handleScrollToTop}
              className="w-11 h-11 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 active:scale-95"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* 2. Floating Direct Phone Call Button */}
          <a
            href="tel:09798875991"
            className="w-13 h-13 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 border border-slate-800"
            aria-label="Directly call Lal Medical"
            title="Call Store Manager"
          >
            <Phone className="w-5.5 h-5.5" />
          </a>

          {/* 3. Floating WhatsApp Order Trigger */}
          <button
            onClick={() => openOrderForm('')}
            className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all hover:scale-105 hover:rotate-3 active:scale-95 border border-emerald-500"
            aria-label="Open WhatsApp prescription upload form"
            title="Order Medicines via WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </button>

        </div>

      </div>
    </Router>
  );
}
