import React, { useState } from 'react';
import { X, Send, Phone, Check, ClipboardList, Info, Sparkles, Upload } from 'lucide-react';

interface WhatsAppOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export default function WhatsAppOrderForm({ isOpen, onClose, initialMedicineName = '' }: WhatsAppOrderFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineRequired, setMedicineRequired] = useState(initialMedicineName);
  const [hasPrescription, setHasPrescription] = useState('Yes');
  const [message, setMessage] = useState('');
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('Immediate (2-4 hours)');
  const [isPrescriptionUploaded, setIsPrescriptionUploaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (initialMedicineName) {
      setMedicineRequired(initialMedicineName);
    }
  }, [initialMedicineName]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsPrescriptionUploaded(true);
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setIsPrescriptionUploaded(true);
      setUploadedFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !mobileNumber || !medicineRequired || !address) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message format
    const whatsappNum = '919798875991'; // WhatsApp Number: 09798875991 with 91 suffix
    const textMessage = `Hello Lal Medical, I would like to place a Medicine Order:

*Customer Name:* ${customerName}
*Phone:* ${mobileNumber}
*Email:* ${email || 'N/A'}
*Medicine Required:* ${medicineRequired}
*Prescription Attached:* ${hasPrescription}${uploadedFileName ? ` (${uploadedFileName})` : ''}
*Delivery Address:* ${address}
*Preferred Time:* ${preferredDeliveryTime}
*Additional Notes:* ${message || 'None'}`;

    const formattedUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(formattedUrl, '_blank');
      onClose();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div id="whatsapp-order-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A8F6A]/10 to-[#0A8F6A]/2 bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A8F6A] flex items-center justify-center text-white">
              <ClipboardList className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Quick WhatsApp Order Form</h2>
              <p className="text-xs text-slate-500">Order gets processed instantly via WhatsApp Chat</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-start space-x-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              <strong>Prescription Requirement:</strong> For prescription-only drugs, please ensure you check &apos;Yes&apos; for Prescription and drag/upload or share its photo with us on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={preferredDeliveryTime}
                onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all"
              >
                <option value="Immediate (2-4 hours)">Immediate (2-4 hours)</option>
                <option value="Same Day Evening (5 PM - 8 PM)">Same Day Evening (5 PM - 8 PM)</option>
                <option value="Next Day Morning (8 AM - 11 AM)">Next Day Morning (8 AM - 11 AM)</option>
                <option value="Self Pickup at Counter">Self Pickup at Counter</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicines Required <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={medicineRequired}
              onChange={(e) => setMedicineRequired(e.target.value)}
              placeholder="List medicine names with quantities. E.g.&#10;- Calpol 650mg (1 strip)&#10;- Volini Spray 40g (1 pack)"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Flat, Road, Landmarks, Gaya, Bihar 823001"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all"
            />
          </div>

          {/* Prescription Upload Area */}
          <div>
            <span className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Do you have a physical prescription?
            </span>
            <div className="flex space-x-4 mb-3">
              <label className="flex items-center space-x-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="prescription-radio"
                  checked={hasPrescription === 'Yes'}
                  onChange={() => setHasPrescription('Yes')}
                  className="text-[#0A8F6A] focus:ring-[#0A8F6A]"
                />
                <span className="text-slate-800 dark:text-slate-200">Yes, I have it</span>
              </label>
              <label className="flex items-center space-x-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="prescription-radio"
                  checked={hasPrescription === 'No'}
                  onChange={() => setHasPrescription('No')}
                  className="text-[#0A8F6A] focus:ring-[#0A8F6A]"
                />
                <span className="text-slate-800 dark:text-slate-200">No (OTC items/Wellness only)</span>
              </label>
            </div>

            {hasPrescription === 'Yes' && (
              <div 
                className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all cursor-pointer relative"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input 
                  type="file" 
                  accept="image/*,.pdf" 
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center space-y-1">
                  <div className="p-2 bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-full">
                    <Upload className="w-5 h-5" />
                  </div>
                  {isPrescriptionUploaded ? (
                    <div className="text-xs text-slate-800 dark:text-slate-200">
                      <span className="font-semibold text-emerald-600 flex items-center justify-center mb-1">
                        <Check className="w-4 h-4 mr-0.5" /> Selected:
                      </span>
                      <p className="font-mono text-slate-500 truncate max-w-xs mx-auto">{uploadedFileName}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        Drag and drop your prescription or <span className="text-[#0A8F6A] underline">browse</span>
                      </p>
                      <p className="text-[10px] text-slate-400 font-normal">Supports JPG, PNG, PDF up to 5MB</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Notes or Special Instructions <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any instructions for delivery or packaging..."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 px-5 rounded-xl transition-all shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Formatting Order...' : 'Send via WhatsApp'}</span>
            </button>
            
            <a
              href="tel:09798875991"
              className="sm:w-2/5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm py-3 px-5 rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
