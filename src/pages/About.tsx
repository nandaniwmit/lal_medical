import React from 'react';
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Sparkles, 
  Smile 
} from 'lucide-react';
import { customerReviews, healthTips } from '../data/mockData';

export default function About() {
  return (
    <div id="about-page-container" className="pt-24 pb-16 space-y-20 bg-slate-50/30 dark:bg-slate-900/10">
      
      {/* 1. Page Header */}
      <section id="about-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A8F6A] to-[#087355] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-200">Our Profile</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">About Lal Medical</h1>
            <p className="text-sm sm:text-base md:text-lg text-emerald-50 max-w-2xl font-light">
              Trusted for over a decade, we are dedicated to providing the residents of Gaya, Bihar with genuine medicines and authentic healthcare products directly under pharmaceutical license protocols.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Business Story & Owner Message */}
      <section id="about-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block">The Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Journey of Health and Trust in Gaya
            </h2>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Lal Medical was founded with a singular, clear mission: to resolve the critical challenge of counterfeit medications and unreliable supply chains in the Gaya district. Recognizing the absolute importance of medicine authenticity in health recovery, our founders set out to build a modern retail pharmacy that source products strictly from licensed, verified manufacturers and multi-national pharmaceutical distributors.
              </p>
              <p>
                Over the years, we have grown from a small neighborhood shop into a highly trusted healthcare destination on Gautam Buddha Road, Dulhingunj. Through continuous adaptations, we have modernized our catalog, integrated advanced cold-chain storage systems, and built digital inventory management pipelines that minimize out-of-stock scenarios.
              </p>
              <p>
                Whether it is vital diabetic supplies, special cardiovascular formulations, pediatric nutrition, or daily personal hygiene essentials, Lal Medical delivers uncompromising quality and precise computerized documentation for every purchase.
              </p>
            </div>
          </div>

          {/* Owner Message Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl relative">
              <div className="absolute top-6 right-6 text-6xl text-slate-100 dark:text-slate-800 font-serif leading-none select-none">“</div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Message from the Store Director</h3>
                <blockquote className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;A pharmacy is not merely a retail transaction point; it is a critical safeguard for human life. When families visit Lal Medical, they do not just buy medicines — they place their trust in our hands. That is why we ensure that every pill, syrup, and health monitor on our shelves meets the absolute highest standard of pharmaceutical integrity.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#0A8F6A] font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">D. K. Lal &amp; Family</p>
                    <p className="text-xs text-slate-400">Founding Directors, Lal Medical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission, Vision, and Values */}
      <section id="about-mission-vision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To improve health outcomes in our community by ensuring that 100% genuine medicines, life-saving therapies, and diagnostics are accessible, transparently priced, and stored correctly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To be the gold standard pharmacy of Gaya, blending physical retail excellence with modern digital convenience such as live stock checkers and WhatsApp ordering.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Authenticity above all, storage compliance, absolute professional honesty, transparent computerized bills, and rapid assistance to emergency calls.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Journey / Store Timeline */}
      <section id="about-timeline" className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-850">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Our History</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">The Growth of Lal Medical</h2>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-700 ml-4 md:ml-32 space-y-12">
            {[
              {
                year: '2012',
                title: 'The Inception',
                desc: 'Lal Medical opens its first physical counter on Gautam Buddha Road, Gaya, focused on introducing computerized billing and strict batch expiration tracking.'
              },
              {
                year: '2016',
                title: 'Refrigeration System Upgrade',
                desc: 'Installed advanced temperature logging refrigerator units to store life-saving insulin, pediatric drops, and critical cardiovascular injectables correctly.'
              },
              {
                year: '2020',
                title: 'COVID-19 Support Leadership',
                desc: 'Operated 24/7 as an essential hub, managing the procurement of rare antivirals, oxygen monitors, and sterile protection kits for over 15,000 local citizens.'
              },
              {
                year: '2024',
                title: 'Digital Portal & Stock Checker',
                desc: 'Launched the searchable inventory database and high-performing WhatsApp ordering to serve Gaya residents right at their doorstep.'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8 group">
                {/* Year tag for md and above */}
                <span className="hidden md:block absolute -left-28 top-0.5 text-right font-extrabold text-sm text-[#0A8F6A] w-20">
                  {step.year}
                </span>
                
                {/* Visual marker dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#0A8F6A] border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform"></div>
                
                <div className="space-y-1.5">
                  <span className="block md:hidden font-extrabold text-sm text-[#0A8F6A]">{step.year}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Achievements & Store Overview */}
      <section id="about-achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block">Quality Benchmarks</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              A Glimpse into Our Certified Pharmaceutical Operations
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We maintain rigorous compliance with the Drugs and Cosmetics Act of India. Our store undergoes periodic government quality checks, ensuring that we never trade in substandard or expired medications.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-slate-100 text-sm">Certified Drug License Holders</h4>
                  <p className="text-xs text-slate-400">Strictly authorized to dispense Schedule H, H1, and specialized narcotic formulations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-slate-100 text-sm">Distributor-Direct Sourcing</h4>
                  <p className="text-xs text-slate-400">No third-party middlemen. Straight from authorized channels of Cipla, Sun Pharma, GSK, Abbott, etc.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#0A8F6A] block">25k+</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Patients Served</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-normal">Across Gaya, Dulhingunj, and neighboring villages</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#0A8F6A] block">4,200+</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Medicines Cataloged</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-normal">Critical care, oncology, diabetic, baby, and general care</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#0A8F6A] block">100%</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Cold-Chain Storage</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-normal">Constant active temperature tracking logs</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#0A8F6A] block">2 Hrs</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Average Delivery</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-normal">Within municipal boundaries of Gaya</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Complete Customer Reviews Section */}
      <section id="about-reviews" className="py-16 bg-white dark:bg-slate-900 border-t border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Feedback Log</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Verified Patient Experiences</h2>
            <p className="text-sm text-slate-400 mt-2">Read honest testimonials from families who rely on us for their daily health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customerReviews.map((rev) => (
              <div key={rev.id} className="p-6 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#0A8F6A] text-white flex items-center justify-center font-bold uppercase shadow-sm">
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-none">{rev.author}</h4>
                      <span className="text-[10px] text-slate-400 mt-1 block">Verified Customer • {rev.date}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
                <div className="flex items-center space-x-1 text-[10px] text-emerald-600 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Invoice Verified Purchase</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comprehensive Educational Health Tips */}
      <section id="about-health-tips" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#0A8F6A] uppercase tracking-widest block mb-1">Wellness Guides</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Full Health Education Guides</h2>
          <p className="text-sm text-slate-400 mt-2">Expert advice compiled by our team to help you manage wellness correctly at home.</p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {healthTips.map((tip) => (
            <article 
              key={tip.id} 
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] rounded-md font-bold">
                  {tip.category}
                </span>
                <div className="flex space-x-4 mt-2 sm:mt-0">
                  <span>{tip.date}</span>
                  <span>•</span>
                  <span>{tip.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {tip.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium italic border-l-4 border-[#0A8F6A] pl-4">
                {tip.excerpt}
              </p>

              <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-4 pt-2">
                <p>{tip.content}</p>
                <p className="text-xs text-[#0A8F6A] font-bold">
                  💡 Lal Medical Health Tip: Always keep your pharmacist informed about all concurrent medications to avoid harmful drug-drug interactions.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
