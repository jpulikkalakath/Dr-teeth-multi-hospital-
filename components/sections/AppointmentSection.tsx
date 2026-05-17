'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Phone, MessageCircle } from 'lucide-react';

export default function AppointmentSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking
    setTimeout(() => {
      setLoading(false);
      alert('Thank you! We will contact you shortly to confirm your appointment.');
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-blue-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-bl-full z-0 opacity-50 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
            
            <div>
              <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2">Book Now</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                Schedule Your <br />Premium Consultation
              </h3>
              <p className="text-slate-600 mb-8">
                Take the first step towards a healthier, perfect smile. Fill out the form or reach out directly for immediate assistance.
              </p>

              <div className="space-y-4 mb-8">
                <Button className="w-full sm:w-auto h-14 text-lg justify-start px-8 shadow-lg">
                  <Phone className="mr-3" size={24} /> 
                  +91 90000 00000
                </Button>
                <Button variant="outline" className="w-full sm:w-auto h-14 text-lg justify-start px-8 border-green-500 text-green-600 hover:bg-green-50 focus:ring-green-500">
                  <MessageCircle className="mr-3" size={24} /> 
                  WhatsApp Chat
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="+91" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>General Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Root Canal</option>
                    <option>Implants</option>
                    <option>Cosmetic Makeover</option>
                    <option>Emergency</option>
                  </select>
                </div>

                <Button type="submit" className="w-full h-14 text-lg shadow-xl" disabled={loading}>
                  {loading ? 'Processing...' : 'Request Appointment'}
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">We will call you to confirm the exact time and date.</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
