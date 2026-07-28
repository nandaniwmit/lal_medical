import React, { useState } from 'react';
import { 
  Eye, 
  X, 
  Filter, 
  ShoppingCart, 
  ZoomIn, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { galleryItems } from '../data/mockData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOrderClick: (itemName: string) => void;
}

export default function Gallery({ onOrderClick }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items based on category
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Storefront & Counters' },
    { id: 'medicines', label: 'Medicines & Shelves' },
    { id: 'products', label: 'Healthcare Products' },
    { id: 'equipment', label: 'Medical Devices' }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
  };

  return (
    <div id="gallery-page-container" className="pt-24 pb-16 space-y-12 bg-slate-50/10 dark:bg-slate-900/10">
      
      {/* 1. Page Header */}
      <section id="gallery-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A8F6A] to-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">Visual Tour</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">Our Gallery Showcase</h1>
            <p className="text-sm sm:text-base md:text-lg text-emerald-50 max-w-2xl font-light">
              Take an interactive digital walk through Lal Medical. View our storefront, alphabetical medicine organization, cold-storage refrigerators, and healthcare device cabinets.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Photo Category Filters */}
      <section id="gallery-filters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">
          <Filter className="w-3.5 h-3.5 text-[#0A8F6A]" />
          <span>Filter Photos:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null); // Clear lightbox on filter change
              }}
              className={`px-4.5 py-2 text-xs font-bold rounded-xl border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0A8F6A] text-white border-[#0A8F6A] shadow-md shadow-emerald-500/15'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-100 dark:border-slate-800 hover:border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Photo Grid */}
      <section id="gallery-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-4/3 bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider bg-black/60 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Micro interaction link */}
                  <div className="pt-3 border-t border-slate-50 dark:border-slate-800/40 flex justify-between items-center text-xs">
                    <span className="text-[#0A8F6A] font-bold group-hover:underline inline-flex items-center space-x-1">
                      <span>Expand Image</span>
                      <ZoomIn className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Verify Authenticity</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900">
            <p className="text-slate-500">No photos available in this category.</p>
          </div>
        )}
      </section>

      {/* 4. Quality Certifications and Trust Section */}
      <section id="gallery-compliance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/40 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Hygienic &amp; Temperature Audited Store</h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              We comply strictly with storage safety guidelines. Cold storage temperature checklists are documented twice daily. Any customer is welcome to request active logs at our Gaya retail counter.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Popup Lightbox with Actions */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-150 dark:border-slate-800 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image viewport area */}
            <div className="relative bg-slate-950 flex-1 flex items-center justify-center h-64 sm:h-96 md:h-auto">
              <img 
                src={filteredItems[lightboxIndex].imageUrl} 
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
              
              {/* Close Button on Image */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 left-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors md:hidden"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation overlay arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2.5 hover:bg-black/70 hover:scale-105 active:scale-95 transition-all"
                aria-label="Previous photo"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2.5 hover:bg-black/70 hover:scale-105 active:scale-95 transition-all"
                aria-label="Next photo"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Information Sidebar */}
            <div className="p-6 md:w-80 flex flex-col justify-between bg-white dark:bg-slate-900 shrink-0">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#0A8F6A]/10 text-[#0A8F6A] text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    className="hidden md:block text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-[10px] text-slate-400 leading-snug">
                  Interested in these items? Snap or name them to place a prompt order.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const itemName = filteredItems[lightboxIndex!].title;
                    setLightboxIndex(null);
                    onOrderClick(`Inquiry regarding item: ${itemName}`);
                  }}
                  className="w-full bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Order / Inquire Now</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
