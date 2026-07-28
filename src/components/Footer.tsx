import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, Globe, ExternalLink, MessageSquare } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    // React router location change triggers page tracking
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, [location.pathname]); // Executed whenever location pathname changes in the SPA!

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Contact info */}
          <div className="space-y-4" id="footer-col-brand">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] flex items-center justify-center text-white font-bold text-xl shadow-md">
                LM
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Lal Medical</span>
                <p className="text-xs text-[#0A8F6A] font-semibold uppercase tracking-wider">Your Trusted Pharmacy</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Providing 100% genuine medicines, orthopedic accessories, life-saving drugs, healthcare monitors, and baby products with unmatched reliability and care.
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span>Gautam Buddha Rd, Dulhingunj, Gaya, Bihar 823001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0A8F6A] shrink-0" />
                <a href="tel:09798875991" className="hover:text-white transition-colors">09798875991</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0A8F6A] shrink-0" />
                <a href="mailto:lalmedicalgaya@gmail.com" className="hover:text-white transition-colors">lalmedicalgaya@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4" id="footer-col-links">
            <h3 className="text-white text-base font-semibold tracking-wider uppercase border-b border-slate-800 pb-2">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Services & Categories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact & Directions
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <span className="text-xs font-semibold text-slate-400 block mb-2 uppercase">Connect With Us</span>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#0A8F6A] hover:text-white transition-colors" aria-label="Facebook">
                  f
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#0A8F6A] hover:text-white transition-colors" aria-label="Instagram">
                  ig
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#0A8F6A] hover:text-white transition-colors" aria-label="LinkedIn">
                  in
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#0A8F6A] hover:text-white transition-colors" aria-label="YouTube">
                  yt
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Working Hours */}
          <div className="space-y-4" id="footer-col-hours">
            <h3 className="text-white text-base font-semibold tracking-wider uppercase border-b border-slate-800 pb-2">Business Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-200">Monday - Sunday</p>
                  <p className="text-slate-400 text-xs">08:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-800">
                <p className="text-xs text-[#0A8F6A] font-bold uppercase tracking-wide flex items-center">
                  <Shield className="w-3.5 h-3.5 mr-1" /> Emergency Supply
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Need critical medicines post working hours? Reach us directly at <strong>09798875991</strong> for priority dispatch support.
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Preview */}
          <div className="space-y-4" id="footer-col-map">
            <h3 className="text-white text-base font-semibold tracking-wider uppercase border-b border-slate-800 pb-2">Find Us in Gaya</h3>
            <div className="rounded-lg overflow-hidden border border-slate-800 h-32 bg-slate-800 relative group shadow-sm">
              <iframe
                title="Lal Medical Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3235661129994!2d84.9988114!3d24.7925586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a52dfdb00b1%3A0xcf95a32b00b0f69a!2sGautam%20Buddha%20Rd%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
              <a 
                href="https://maps.google.com/?q=Lal+Medical+Gautam+Buddha+Rd+Gaya+Bihar"
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold text-white space-x-1"
              >
                <span>View Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-slate-500 italic">
              Located opposite Gautam Buddha Road, near Dulhingunj commercial area, Gaya, Bihar.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Story</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-slate-300 transition-colors">Medicines Stock</Link>
            <span>•</span>
            <span className="cursor-pointer hover:text-slate-300 transition-colors" onClick={() => alert("Privacy Policy: Lal Medical respects your privacy. All your patient history, prescriptions, and phone inquiries are confidential and used strictly for pharmaceutical compliance.")}>Privacy Policy</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-slate-300 transition-colors" onClick={() => alert("Terms of Service: All prescription orders require verification of a physical/digital prescription slip issued by a certified medical practitioner.")}>Terms of Service</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-slate-300 transition-colors" onClick={() => alert("Disclaimer: This stock checker and website is for information. Please consult a licensed doctor before taking any medication.")}>Disclaimer</span>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p>© {new Date().getFullYear()} Lal Medical. All rights reserved.</p>
            <p>
              Developed by{' '}
              <a 
                href="https://main.webmakerit.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0A8F6A] hover:underline font-semibold inline-flex items-center space-x-0.5"
              >
                <span>WMIT</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
