import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-white mb-6 block">
              DR. TEETH<span className="text-teal-500">.</span>
            </span>
            <p className="text-slate-400 mb-6 max-w-sm">
              Advanced multi-speciality dental care with painless treatments, modern technology, and personalized patient care in Kozhikode.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Clinic</a></li>
              <li><a href="#doctor" className="hover:text-teal-400 transition-colors">Dr. Vani Vineeth</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Treatments</a></li>
              <li><a href="#gallery" className="hover:text-teal-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <span>6RX4+M5, Opp. City Service Cooperative Bank, Govindapuram, Kozhikode</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-teal-500 flex-shrink-0" />
                <span>+91 90000 00000</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p>Mon - Sat: 10AM - 6PM</p>
                  <p className="text-slate-500 text-sm">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 pb-4 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DR. TEETH Multi Speciality Dental Clinic. All rights reserved.</p>
        </div>

        {/* Demo Footer Notice */}
        <div className="mt-8 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
          <p className="text-white font-bold text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            This is a Demo Website. Full ownership, source files, domain transfer, and deployment access will be provided only after payment completion.
          </p>
        </div>
      </div>
    </footer>
  );
}
