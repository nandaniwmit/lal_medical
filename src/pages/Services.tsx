import React from 'react';
import { 
  FileText, 
  Sparkles, 
  Activity, 
  Baby, 
  Heart, 
  Apple, 
  ArrowRight, 
  ShoppingCart, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import MedicineStockChecker from '../components/MedicineStockChecker';
import { serviceCategories } from '../data/mockData';

interface ServicesProps {
  onOrderClick: (medicineName?: string) => void;
}

export default function Services({ onOrderClick }: ServicesProps) {
  
  // Icon selector helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Baby':
        return <Baby className="w-6 h-6" />;
      case 'Heart':
        return <Heart className="w-6 h-6" />;
      case 'Apple':
        return <Apple className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div id="services-page-container" className="pt-24 pb-16 space-y-20 bg-slate-50/20 dark:bg-slate-900/10">
      
      {/* 1. Page Header */}
      <section id="services-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600 to-[#0A8F6A] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">Live Inventory &amp; Services</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">Our Pharmaceutical Services</h1>
            <p className="text-sm sm:text-base md:text-lg text-emerald-50 max-w-2xl font-light">
              Explore our comprehensive medicine categories, therapeutic classes, baby foods, OTC supplies, and digital diagnostic checkers. Use our interactive checker below to check immediate stock levels.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Medicine Stock Checker Component Section */}
      <section id="stock-checker-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Live Medicine Stock &amp; Availability Checker
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Type your prescribed generic or brand names to instantly query our real-time stock levels.
          </p>
        </div>
        <MedicineStockChecker onOrderClick={onOrderClick} />
      </section>

      {/* 3. Category-wise Detailed Services */}
      <section id="category-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Our Product Range</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Explore Category-wise Medical Solutions
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Every item sits in dedicated storage environments to guarantee chemical and clinical efficacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top edge bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-[#0A8F6A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] flex items-center justify-center font-bold">
                  {getIcon(cat.iconName)}
                </div>
                
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">{cat.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{cat.description}</p>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">Featured in Store:</span>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {cat.items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-50 dark:border-slate-800/60">
                <button
                  type="button"
                  onClick={() => onOrderClick(`Order Inquiry: ${cat.title}`)}
                  className="w-full bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm shadow-[#0A8F6A]/10"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Order from {cat.title}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. Support Services CTA & Sourcing */}
      <section id="special-procurement" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider block">Special Sourcing</span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">Need Rare Critical Medications?</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              If any oncology, rheumatology, or advanced antiviral medication is not found in our live search, please click below to submit your prescription. We procure specialized therapies directly from international brands within 24-48 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => onOrderClick("Special Drug Sourcing Request")}
                className="bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                Submit Sourcing Request
              </button>
              <a 
                href="tel:09798875991" 
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors border border-slate-700"
              >
                Call Store Manager
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
