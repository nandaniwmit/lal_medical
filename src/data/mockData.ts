import { ServiceCategory, Review, FAQItem, GalleryItem, HealthTip } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'prescription',
    title: 'Prescription Medicines',
    description: '100% genuine prescription medications sourced directly from certified pharmaceutical companies. Expert pharmacists double-check all dosages.',
    iconName: 'FileText',
    items: ['Cardiology', 'Diabetology', 'Antibiotics', 'Neurology', 'Gastroenterology', 'Respiratory']
  },
  {
    id: 'otc',
    title: 'OTC Medicines',
    description: 'Over-the-counter daily healthcare items, pain relievers, cold and cough remedies, antacids, and skin treatments available instantly.',
    iconName: 'Sparkles',
    items: ['Pain Relievers', 'Cough & Cold', 'Antacids', 'Allergy Relief', 'Digestive Health', 'Ointments']
  },
  {
    id: 'devices',
    title: 'Health Devices & Equipment',
    description: 'Reliable and calibrated digital monitoring devices for diagnostic monitoring and daily checking at home.',
    iconName: 'Activity',
    items: ['Blood Pressure Monitors', 'Glucometers', 'Digital Thermometers', 'Pulse Oximeters', 'Nebulizers', 'Vaporizers']
  },
  {
    id: 'baby-care',
    title: 'Baby Care & Essentials',
    description: 'Hypoallergenic baby foods, skin-friendly baby wipes, dermatologically tested lotions, diapers, and baby grooming supplies.',
    iconName: 'Baby',
    items: ['Baby Milk & Food', 'Premium Diapers', 'Gentle Wipes', 'Baby Lotions & Powders', 'Baby Oils', 'Feeding Bottles']
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene',
    description: 'Daily hygiene products, hair care, premium skin care, dental hygiene, oral healthcare, and organic body essentials.',
    iconName: 'Heart',
    items: ['Oral Care', 'Skin Care', 'Hair Nourishment', 'Sanitizers & Washes', 'Deodorants', 'First Aid Kits']
  },
  {
    id: 'supplements',
    title: 'Supplements & Wellness',
    description: 'Wide selection of multivitamins, dietary supplements, protein shakes, herbal immunity boosters, and health drinks.',
    iconName: 'Apple',
    items: ['Multivitamins', 'Calcium & Vitamin D', 'Protein Powders', 'Omega-3 Fish Oil', 'Ayurvedic Boosters', 'Herbal Teas']
  }
];

export const customerReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Rajiv Kumar',
    rating: 5,
    date: 'July 15, 2026',
    comment: 'Lal Medical has been our family pharmacy for years in Gaya. They always have the prescribed medicines. If something is out of stock, they arrange it within a day. Prompt, courteous, and highly reliable service!',
    isVerified: true,
    avatarLetter: 'R'
  },
  {
    id: 'rev-2',
    author: 'Anjali Sharma',
    rating: 5,
    date: 'June 28, 2026',
    comment: 'I highly appreciate their WhatsApp order system. It is incredibly convenient. I just snap a photo of my grandmother’s prescription, send it on WhatsApp, and they get it ready immediately. Very genuine medicines with valid expiry dates.',
    isVerified: true,
    avatarLetter: 'A'
  },
  {
    id: 'rev-3',
    author: 'Dr. S. K. Prasad',
    rating: 5,
    date: 'May 12, 2026',
    comment: 'As a medical professional practicing near Gautam Buddha Road, I frequently recommend Lal Medical to my patients. Their inventory of specialized cardiovascular and diabetic drugs is impressive, and they adhere strictly to pharmacy storage guidelines.',
    isVerified: true,
    avatarLetter: 'S'
  },
  {
    id: 'rev-4',
    author: 'Amit Sen',
    rating: 4,
    date: 'April 03, 2026',
    comment: 'Excellent and honest pricing. They provide bill for every purchase and are very helpful in suggesting the correct alternative if a brand is unavailable. Clean store layout as well.',
    isVerified: true,
    avatarLetter: 'A'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I place an order via WhatsApp?',
    answer: 'It is simple! Use our WhatsApp Order Form on the website or click the floating WhatsApp icon. Provide your name, phone number, and a list of medicines or upload a photo of your prescription. We will verify the stock, format the invoice, and confirm your order over WhatsApp.',
    category: 'Orders'
  },
  {
    id: 'faq-2',
    question: 'Is a prescription required for all medicines?',
    answer: 'Prescriptions are legally required for Scheduled drugs, antibiotics, and special therapeutic medications. However, standard over-the-counter (OTC) products, baby care items, healthcare devices, and wellness supplements do not require a doctor’s prescription.',
    category: 'Prescriptions'
  },
  {
    id: 'faq-3',
    question: 'Do you deliver medicines at home in Gaya?',
    answer: 'Yes! We offer home delivery for senior citizens and residents across Gaya, particularly around Gautam Buddha Road, Dulhingunj, GB Road, and nearby neighborhoods. Standard deliveries are completed within 2 to 4 hours.',
    category: 'Delivery'
  },
  {
    id: 'faq-4',
    question: 'Are all your medicines genuine and licensed?',
    answer: 'Absolutely. Lal Medical operates under strict pharmaceutical licenses issued by the government. We procure our products exclusively from authorized distributors and verified manufacturers. Every batch is thoroughly inspected for storage temperature and expiration dates.',
    category: 'Trust'
  },
  {
    id: 'faq-5',
    question: 'What are the payment options available?',
    answer: 'We accept cash on delivery/pickup, UPI payments (GPay, PhonePe, Paytm), and major credit/debit cards at our store counter.',
    category: 'Payment'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Lal Medical Storefront',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
    description: 'Our primary retail storefront located at Gautam Buddha Road, Gaya. Clean, bright, and easily accessible.'
  },
  {
    id: 'gal-2',
    title: 'Temperature-Controlled Medicine Storage',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b295f826?auto=format&fit=crop&q=80&w=800',
    description: 'Strict cold-chain and temperature-controlled storage cabinets for insulin, vaccines, and sensitive life-saving drugs.'
  },
  {
    id: 'gal-3',
    title: 'Healthcare & Wellness Counters',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8f30413736?auto=format&fit=crop&q=80&w=800',
    description: 'Surgical supplies, daily health monitors, premium supplements, and orthopedic supports section.'
  },
  {
    id: 'gal-4',
    title: 'Surgical and Diagnostic Devices',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'We stock modern blood pressure monitors, glucose checks, pulse oximeters, and nebulizers from trusted global brands like Omron.'
  },
  {
    id: 'gal-5',
    title: 'Prescription Medicine Counter',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Systematically organized medicine shelves categorized alphabetically and therapeutically for prompt service.'
  },
  {
    id: 'gal-6',
    title: 'Baby Care & Hygiene Products',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eb2?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive baby care range including formula food, eco-friendly diapers, hygiene wipes, and gentle body care.'
  }
];

export const healthTips: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Understanding Prescription Expiry Dates',
    excerpt: 'Is it safe to consume medicine on its expiry month? Learn how chemical stability affects therapeutic benefits.',
    content: 'Pharmaceutical expiry dates signify the final day the manufacturer guarantees full potency and safety. Consuming medicines beyond this date can be ineffective or even harmful as active compounds break down. Always audit your medical cabinet twice a year and discard expired medicines safely.',
    category: 'Safety',
    readTime: '3 min read',
    date: 'July 24, 2026'
  },
  {
    id: 'tip-2',
    title: 'Managing Blood Pressure Daily At Home',
    excerpt: 'Tips on taking accurate digital readings at home for diabetic and hypertensive patients.',
    content: 'To get an accurate BP reading at home: sit quietly for 5 minutes, keep your arm supported at heart level, place the cuff directly on bare skin, and do not talk during the measurement. Avoid caffeine, exercise, and smoking for 30 minutes before taking a reading. Always record the numbers to share with your physician.',
    category: 'Wellness',
    readTime: '4 min read',
    date: 'July 18, 2026'
  },
  {
    id: 'tip-3',
    title: 'First-Aid Box: 10 Essentials Every Home Needs',
    excerpt: 'Be prepared for emergencies. These are the crucial elements your home first aid kit must have.',
    content: 'Every domestic first aid kit should include antiseptic solution (like Dettol), sterile cotton rolls, adhesive bandages of varying sizes, medical adhesive tape, analgesic tablets (Paracetamol), digital thermometer, surgical scissors, burn ointment, ORS packs, and sterile gauze pads. Store the kit in a cool, dry place out of reach of children.',
    category: 'First Aid',
    readTime: '5 min read',
    date: 'July 10, 2026'
  }
];
