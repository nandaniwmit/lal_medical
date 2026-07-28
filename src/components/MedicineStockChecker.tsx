import React, { useState, useEffect } from 'react';
import { Search, ShieldAlert, BadgePercent, Calendar, ShoppingCart, HelpCircle } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { Medicine } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick: (medicineName: string) => void;
}

export default function MedicineStockChecker({ onOrderClick }: MedicineStockCheckerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('All');

  useEffect(() => {
    // Initial display of popular/common items (first 4 items)
    setFilteredMedicines(medicineData.slice(0, 4) as Medicine[]);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setHasSearched(true);
    
    const results = (medicineData as Medicine[]).filter(med => {
      const matchSearch = med.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          med.brand.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchStatus = statusFilter === 'All' || med.status === statusFilter;
      
      return matchSearch && matchStatus;
    });
    
    setFilteredMedicines(results);
  };

  // Run search when status filter changes
  useEffect(() => {
    if (hasSearched || searchTerm !== '') {
      handleSearch();
    } else {
      // Just filter initial selection
      const results = (medicineData as Medicine[]).slice(0, 6).filter(med => statusFilter === 'All' || med.status === statusFilter);
      setFilteredMedicines(results);
    }
  }, [statusFilter]);

  const clearSearch = () => {
    setSearchTerm('');
    setHasSearched(false);
    setStatusFilter('All');
    setFilteredMedicines(medicineData.slice(0, 4) as Medicine[]);
  };

  const getStatusColor = (status: Medicine['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900/50';
      case 'Limited Stock':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900/50';
      case 'Out of Stock':
        return 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-900/50';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div id="medicine-stock-checker" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8 shadow-xl relative overflow-hidden">
      
      {/* Decorative accent background blob */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="relative z-10">
        
        {/* Component Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-full text-xs font-semibold mb-3">
            <BadgePercent className="w-3.5 h-3.5 mr-1" />
            <span>Real-time Inventory Link</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Medicine &amp; Health Device Stock Checker
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Search our digital database to check real-time stock levels of lifesaving drugs, baby foods, OTC, and monitoring devices. If available, request WhatsApp delivery instantly.
          </p>
        </div>

        {/* Search Controls */}
        <form onSubmit={handleSearch} className="space-y-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            
            {/* Search Input Box */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Generic or Brand Name (e.g., Paracetamol, Omron, Calpol)..."
                className="w-full text-sm pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="md:w-52">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full text-sm px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all font-medium"
              >
                <option value="All">All Stock Statuses</option>
                <option value="Available">Available</option>
                <option value="Limited Stock">Limited Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="bg-[#0A8F6A] hover:bg-[#087355] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-[#0A8F6A]/10 flex items-center justify-center space-x-2 shrink-0 hover:scale-[1.01] active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>Query Stock</span>
            </button>

          </div>
        </form>

        {/* Quick Suggestion Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-slate-500">
          <span className="font-semibold">Quick Search:</span>
          {['Paracetamol', 'Pantocid', 'Augmentin', 'Omron', 'Himalaya Baby'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setSearchTerm(tag);
                setHasSearched(true);
                // Trigger search directly
                const results = (medicineData as Medicine[]).filter(med => 
                  med.medicineName.toLowerCase().includes(tag.toLowerCase()) || 
                  med.brand.toLowerCase().includes(tag.toLowerCase())
                );
                setFilteredMedicines(results);
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#0A8F6A] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            >
              +{tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>
              {hasSearched ? `Search Results (${filteredMedicines.length} found)` : 'Popular Healthcare Items In Stock'}
            </span>
            {hasSearched && (
              <button 
                type="button" 
                onClick={clearSearch} 
                className="text-[#0A8F6A] hover:underline normal-case font-semibold"
              >
                Reset Search
              </button>
            )}
          </h4>

          {filteredMedicines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMedicines.map((med) => (
                <div
                  key={med.id}
                  className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-white dark:hover:bg-slate-800/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm tracking-tight leading-snug">
                          {med.medicineName}
                        </h5>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Mfg/Brand: {med.brand}</p>
                      </div>
                      
                      {/* Status Badge */}
                      <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full border ${getStatusColor(med.status)}`}>
                        {med.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/40 text-xs">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 block">Retail Price (MRP)</span>
                        <span className="font-extrabold text-[#0A8F6A] text-sm font-mono">₹{med.mrp.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 block">Expiry Date</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300 inline-flex items-center">
                          <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                          {med.expiry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/40 mt-3">
                    <span className="text-[11px] text-slate-400 italic">
                      {med.status === 'Available' ? 'Ready to dispatch' : med.status === 'Limited Stock' ? 'Hurry! Few left' : 'Awaiting fresh restock'}
                    </span>
                    {med.status !== 'Out of Stock' ? (
                      <button
                        type="button"
                        onClick={() => onOrderClick(`${med.medicineName} (Brand: ${med.brand})`)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 px-3.5 rounded-lg flex items-center space-x-1.5 transition-colors shadow-sm"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Order Now</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onOrderClick(`Special procurement request: ${med.medicineName}`)}
                        className="border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300 font-semibold text-xs py-2 px-3.5 rounded-lg flex items-center space-x-1.5 transition-colors"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Request Sourcing</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-10 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/40">
              <ShieldAlert className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800 dark:text-white">Medicine Not Listed in Live Database</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                Don&apos;t worry! We stock thousands of items. Click below to submit a custom query directly, and we will find it for you in our physical store.
              </p>
              <button
                type="button"
                onClick={() => onOrderClick(searchTerm || 'Custom Medicine Query')}
                className="mt-4 bg-[#0A8F6A] hover:bg-[#087355] text-white font-semibold text-xs py-2 px-4 rounded-lg transition-colors inline-flex items-center space-x-2"
              >
                <span>Submit Custom WhatsApp Request</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
