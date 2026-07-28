import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Check, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';

interface ContactProps {
  onOrderClick: () => void;
}

export default function Contact({ onOrderClick }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Prescription Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Prescription Inquiry',
        message: ''
      });
      // Clear success indicator after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact-page-container" className="pt-24 pb-16 space-y-16 bg-slate-50/10 dark:bg-slate-900/10">
      
      {/* 1. Page Header */}
      <section id="contact-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A8F6A] to-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">Get In Touch</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">Contact &amp; Support</h1>
            <p className="text-sm sm:text-base md:text-lg text-emerald-50 max-w-2xl font-light">
              Have questions about drug availability, dosages, delivery zones, or pricing? Feel free to contact us via form, direct phone call, or secure WhatsApp order.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards Grid */}
      <section id="contact-cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Address */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Store Location</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Gautam Buddha Rd, Dulhingunj, Gaya, Bihar 823001
            </p>
            <a 
              href="https://maps.google.com/?q=Lal+Medical+Gautam+Buddha+Rd+Gaya+Bihar"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-[#0A8F6A] font-bold hover:underline pt-2"
            >
              <span>Get Directions Map</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Call Support</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Reach our active retail counter for instant inquiries.
            </p>
            <div className="pt-2">
              <a 
                href="tel:09798875991" 
                className="inline-flex items-center justify-center bg-[#0A8F6A]/5 hover:bg-[#0A8F6A] hover:text-white text-[#0A8F6A] font-bold text-xs py-2 px-4 rounded-lg transition-colors"
              >
                <span>Call 09798875991</span>
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp Order */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center mx-auto">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">WhatsApp Order</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Quickly dispatch and format prescription slips directly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOrderClick}
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-lg transition-colors shadow-sm"
              >
                <span>Open Order Form</span>
              </button>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Store Timings</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Monday - Sunday
            </p>
            <p className="text-xs font-bold text-[#0A8F6A] pt-2">
              08:00 AM - 10:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* 3. Form & Map Section */}
      <section id="form-map-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Send a Secure Online Inquiry
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Have special therapeutic queries? Use our direct secure form.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {isSubmitted && (
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-900/40 p-4 rounded-xl text-xs sm:text-sm flex items-center space-x-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Your inquiry was submitted! We will respond shortly on phone.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@gmail.com"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject Matter
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  >
                    <option value="General Prescription Inquiry">General Prescription Inquiry</option>
                    <option value="Medicine Stock Request">Medicine Stock Request</option>
                    <option value="Diagnostic Device Inquiry">Diagnostic Device Inquiry</option>
                    <option value="Home Delivery Coordination">Home Delivery Coordination</option>
                    <option value="Feedback / Complaints">Feedback / Complaints</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry or medicine names in detail..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                </button>

              </form>
            </div>
            <p className="text-[10px] text-slate-400 mt-6 pt-4 border-t border-slate-50 dark:border-slate-850/40">
              🔒 Security Guard: We never share your prescription records, name, or phone number with third parties.
            </p>
          </div>

          {/* Interactive Google Map Panel */}
          <div className="lg:col-span-6 bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden relative shadow-sm min-h-[350px] flex flex-col">
            <div className="absolute inset-0 z-0 h-full">
              <iframe
                title="Lal Medical Store Gaya Interactive Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3235661129994!2d84.9988114!3d24.7925586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a52dfdb00b1%3A0xcf95a32b00b0f69a!2sGautam%20Buddha%20Rd%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

            {/* Float map header overlay */}
            <div className="relative z-10 m-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border border-white/20 dark:border-slate-800 shadow-md max-w-sm mt-auto space-y-3">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Find Lal Medical easily</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mt-1">
                  We are centrally located in Dulhingunj on Gautam Buddha Road, nearby major clinics and local medical practitioner centers in Gaya.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://maps.google.com/?q=Lal+Medical+Gautam+Buddha+Rd+Gaya+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#0A8F6A] hover:bg-[#087355] text-white text-center font-bold text-xs py-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
