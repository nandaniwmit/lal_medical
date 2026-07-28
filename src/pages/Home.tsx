import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  HelpCircle, 
  Mail, 
  Sparkles, 
  HeartHandshake, 
  ArrowUpRight,
  Search,
  Calendar
} from 'lucide-react';
import { serviceCategories, customerReviews, faqItems, healthTips } from '../data/mockData';
import medicineData from '../data/medicineStock.json';

interface HomeProps {
  onOrderClick: (medicineName?: string) => void;
}

export default function Home({ onOrderClick }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [quickSearch, setQuickSearch] = useState('');

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Get first 3 featured services
  const featuredServices = serviceCategories.slice(0, 3);
  
  // Get first 4 popular medicines for quick showcase
  const featuredProducts = medicineData.slice(0, 4);

  // Get first 3 reviews
  const previewReviews = customerReviews.slice(0, 3);

  // Get first 3 FAQs
  const previewFaqs = faqItems.slice(0, 3);

  // Get first 2 health tips
  const previewTips = healthTips.slice(0, 2);

  // Live filtering for the quick-checker on the right column
  const filteredQuickStock = quickSearch.trim() === ''
    ? medicineData.slice(0, 3)
    : medicineData.filter(med => 
        med.medicineName.toLowerCase().includes(quickSearch.toLowerCase()) || 
        med.brand.toLowerCase().includes(quickSearch.toLowerCase())
      ).slice(0, 3);

  return (
    <div id="home-page-container" className="pt-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* 1. High Density Hero & Stock Checker Column Layout */}
      <section id="hero-dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Hero & Services Overview */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-6">
            
            {/* Hero Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex-1 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-[#0A8F6A] dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest">
                  Gaya&apos;s Premier Pharmacy
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Your Trusted Medical Store for <span className="text-[#0A8F6A]">Genuine Medicines</span> &amp; Healthcare Needs
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl leading-relaxed">
                  Providing healthcare products, surgical supplies, baby care, and daily medical essentials at affordable prices. All medicines are 100% genuine and verified.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 relative z-10">
                <a 
                  href="tel:09798875991"
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-850 dark:bg-slate-800 dark:hover:bg-slate-750 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>09798875991</span>
                </a>
                <button 
                  onClick={() => onOrderClick()}
                  className="flex items-center gap-2 bg-emerald-100 dark:bg-[#0A8F6A]/20 text-[#0A8F6A] dark:text-emerald-300 px-5 py-3 rounded-xl text-sm font-bold border border-emerald-200 dark:border-[#0A8F6A]/30 hover:bg-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order Form</span>
                </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-full pointer-events-none"></div>
            </div>

            {/* Micro Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg flex items-center justify-center text-[#0A8F6A] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white leading-tight">Prescription Meds</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">100% Genuine Certified</p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg flex items-center justify-center text-[#0A8F6A] mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white leading-tight">Baby Care</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Premium Brands Only</p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg flex items-center justify-center text-[#0A8F6A] mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white leading-tight">Personal Care</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Daily Hygiene Essentials</p>
              </div>
            </div>

          </div>

          {/* Right Column: Stock Checker & Micro Location */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-6">
            
            {/* Stock Checker Widget */}
            <div className="bg-[#0A8F6A] rounded-3xl p-5 sm:p-6 text-white shadow-md flex flex-col justify-between flex-1 relative overflow-hidden">
              <div className="relative z-10 flex-grow flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold tracking-tight">Medicine Stock Checker</h2>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                      Live Inventory
                    </span>
                  </div>

                  {/* Quick search input */}
                  <div className="relative mb-4">
                    <input 
                      type="text" 
                      value={quickSearch}
                      onChange={(e) => setQuickSearch(e.target.value)}
                      placeholder="Search medicine name..." 
                      className="w-full bg-white/15 border border-white/20 rounded-xl py-2.5 pl-9 pr-4 text-xs text-white placeholder-white/60 focus:outline-none focus:bg-white/25 focus:ring-1 focus:ring-white/40 transition-all"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-3 text-white/60" />
                  </div>

                  {/* Stock list */}
                  <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                    {filteredQuickStock.length > 0 ? (
                      filteredQuickStock.map((med, index) => (
                        <div key={index} className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between text-xs hover:bg-white/15 transition-all">
                          <div>
                            <p className="font-bold leading-tight">{med.medicineName}</p>
                            <p className="text-[10px] text-white/70 leading-none mt-0.5">{med.brand}</p>
                          </div>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                            med.status === 'Available' 
                              ? 'bg-emerald-400 text-emerald-950' 
                              : med.status === 'Limited Stock' 
                              ? 'bg-amber-400 text-amber-950' 
                              : 'bg-rose-400 text-rose-950'
                          }`}>
                            {med.status.toUpperCase()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-xs text-white/60">
                        No matches found. Submit order below to inquire!
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <Link 
                    to="/services"
                    className="w-full inline-flex items-center justify-center bg-white text-[#0A8F6A] hover:bg-slate-100 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm"
                  >
                    Check Full Inventory
                  </Link>
                </div>

              </div>
            </div>

            {/* Contact Micro-Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                Gaya Store Location
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal mb-3">
                Gautam Buddha Rd, Dulhingunj, Gaya, Bihar 823001
              </p>
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-700 dark:text-slate-300 font-bold">Open Now until 10:00 PM</span>
                </span>
                <span>Est. 2012</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Short About Preview */}
      <section id="about-preview" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" 
                  alt="About Lal Medical"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-400">Pharmacy Storefront</p>
                  <p className="text-sm font-semibold">Gautam Buddha Road, Gaya, Bihar</p>
                </div>
              </div>
              {/* Decorative design cards */}
              <div className="absolute -bottom-6 -right-6 bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900/50 p-4 rounded-xl hidden sm:flex items-center space-x-3 shadow-md max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#0A8F6A] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Govt. Licensed Store</p>
                  <p className="text-[10px] text-slate-500">100% compliant pharma guidelines</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block">About Our Pharmacy</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Serving Gaya with Authentic Medications and Dedicated Care
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded with a solid commitment to make authentic medications accessible, Lal Medical has grown to become the premier pharmaceutical retailer in Dulhingunj, Gaya. We stand as a pillar of reliability, offering temperature-controlled storage and direct sourcing from authenticated distributors.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our customer-first approach is reflected in our convenient features: from digital stock verification and quick WhatsApp ordering to rapid doorsteps delivery within Gaya city boundaries.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <span>Licensed Pharmacists</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <span>Cold Chain Refrigeration</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <span>Clear Computerized Billing</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <span>Local Delivery Dispatch</span>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#0A8F6A] hover:text-[#087355] transition-colors group"
                >
                  <span>Learn More About Our Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Services (Max 6) */}
      <section id="featured-services" className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
            <div>
              <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">What We Do</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Our Specialized Healthcare Categories
              </h2>
            </div>
            <Link 
              to="/services" 
              className="inline-flex items-center text-xs font-bold text-[#0A8F6A] hover:underline mt-2 sm:mt-0"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-xl flex items-center justify-center mb-4">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{cat.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cat.items.slice(0, 3).map((sub, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-semibold rounded-md border border-slate-100 dark:border-slate-700">
                        {sub}
                      </span>
                    ))}
                    {cat.items.length > 3 && (
                      <span className="px-2 py-1 bg-[#0A8F6A]/5 text-[#0A8F6A] text-[10px] font-bold rounded-md">
                        +{cat.items.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 dark:border-slate-850/40 flex justify-between items-center">
                  <button 
                    onClick={() => onOrderClick(`Inquiry regarding ${cat.title}`)}
                    className="text-xs font-bold text-[#0A8F6A] hover:underline"
                  >
                    Inquire Now
                  </button>
                  <Link to="/services" className="text-xs text-slate-400 hover:text-slate-600 flex items-center space-x-1">
                    <span>Full List</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Our USPs</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Why Doctors &amp; Families Trust Lal Medical
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              We stand apart through our strict quality benchmarks and fast, digital services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '100% Genuine Inventory',
                desc: 'Every drug, device, and accessory is directly sourced with traceable batch records. Zero counterfiet risks.',
                icon: ShieldCheck
              },
              {
                title: 'Cold-Chain Compliant',
                desc: 'Insulin, vaccines, and sensitive syrups are stored in dedicated refrigeration systems to retain efficacy.',
                icon: Clock
              },
              {
                title: 'Instant WhatsApp Order',
                desc: 'Avoid long queues. Snapshot your prescription, fill details, and get it processed over secure WhatsApp.',
                icon: MessageSquare
              },
              {
                title: 'Convenient Gaya Location',
                desc: 'Centrally located at Gautam Buddha Road with prompt home delivery across major local sectors.',
                icon: MapPin
              }
            ].map((usp, i) => (
              <div key={i} className="space-y-3 p-5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center font-bold">
                  <usp.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{usp.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Products & Live Stock Checker Preview */}
      <section id="featured-products" className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Interactive Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Popular Items &amp; Diagnostics in Stock
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Check out sample healthcare devices and vital medicines currently on shelves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((med) => (
              <div 
                key={med.id}
                className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-850 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{med.brand}</span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      med.status === 'Available' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {med.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 min-h-10 leading-snug">
                    {med.medicineName}
                  </h3>
                  <div className="mt-3 flex items-baseline justify-between pt-3 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-xs text-slate-400">MRP Value:</span>
                    <span className="text-sm font-extrabold text-[#0A8F6A] font-mono">₹{med.mrp.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOrderClick(med.medicineName)}
                  className="mt-4 w-full bg-[#0A8F6A]/5 hover:bg-[#0A8F6A] hover:text-white text-[#0A8F6A] font-bold text-xs py-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Quick Order</span>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Launch Live Inventory Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Customer Reviews Preview */}
      <section id="reviews-preview" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              What Our Community Says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((rev) => (
              <div key={rev.id} className="p-6 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-sm uppercase shadow-sm">
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-none">{rev.author}</h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">Verified Customer • {rev.date}</span>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex space-x-0.5 text-amber-400 mb-3 text-xs">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/about" className="text-xs font-extrabold text-[#0A8F6A] hover:underline inline-flex items-center">
              <span>Read Store Story &amp; Client Feedback</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ Preview */}
      <section id="faq-preview" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Common Questions</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Frequently Asked Queries</h2>
          </div>

          <div className="space-y-3.5">
            {previewFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-850 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 dark:text-white flex justify-between items-center select-none"
                  >
                    <span>{faq.question}</span>
                    <HelpCircle className={`w-4 h-4 text-[#0A8F6A] shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-50 dark:border-slate-850/40 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-slate-800/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link to="/contact" className="text-xs font-bold text-[#0A8F6A] hover:underline">
              Have different questions? Contact Store Manager directly ›
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Prescription Upload CTA Bar */}
      <section id="prescription-cta" className="py-12 bg-[#0A8F6A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Ready to Order Medicines?</h3>
              <p className="text-sm text-emerald-100 max-w-xl">
                Just upload your prescription or list your medical essentials using our automated digital order portal. Let us process the rest.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <button 
                onClick={() => onOrderClick()}
                className="bg-white text-[#0A8F6A] hover:bg-emerald-50 font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Upload Prescription via Form</span>
              </button>
              <a 
                href="tel:09798875991"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Agent</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Latest Health Tips Preview */}
      <section id="health-tips-preview" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Education</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Latest Health &amp; Wellness Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {previewTips.map((tip) => (
              <div 
                key={tip.id}
                className="p-6 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3">
                    <span>{tip.category}</span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {tip.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] text-slate-400">Published: {tip.date}</span>
                  <Link to="/about" className="text-xs font-bold text-[#0A8F6A] hover:underline inline-flex items-center">
                    <span>Read Full Guide</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Newsletter Form */}
      <section id="newsletter-form" className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-[#0A8F6A] flex items-center justify-center mx-auto shadow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Stay Updated on Vital Health Bulletins</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Subscribe to receive regular alerts about new medicine arrivals, critical vaccine updates, and vital diagnostic health tips from our certified pharmacologists.
          </p>
          <form 
            onSubmit={(e) => { e.preventDefault(); alert("Subscription registered successfully! Thank you for staying connected with Lal Medical."); }} 
            className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your active email address"
              className="flex-1 text-sm px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            />
            <button
              type="submit"
              className="bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-slate-400">We care about your privacy. Unsubscribe anytime in one click.</p>
        </div>
      </section>

    </div>
  );
}
