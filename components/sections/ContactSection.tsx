'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2">Get in touch</h2>
              <h3 className="text-3xl font-extrabold text-blue-900 mb-6">Contact Us</h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Clinic Address</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    6RX4+M5, Opp. City Service Cooperative Bank,<br />
                    Govindapuram, Kozhikode,<br />
                    Kerala 673016
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone</h4>
                  <p className="text-slate-600 text-sm mt-1">+91 90000 00000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Opening Hours</h4>
                  <p className="text-slate-600 text-sm mt-1">Monday – Saturday: 10:00 AM – 6:00 PM</p>
                  <p className="text-red-500 text-sm font-medium mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              {/* Note: IFrame placeholder for Google Maps */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.061413840656!2d75.8037145!3d11.2568603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65be1b4f420e1%3A0x6a2c2628461cdb53!2sGovindapuram%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
