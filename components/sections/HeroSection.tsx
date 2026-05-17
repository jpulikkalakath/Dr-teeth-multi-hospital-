'use client';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Phone, Calendar, ShieldCheck, Smile } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Dental Clinic"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 font-semibold tracking-wider text-sm mb-6 border border-teal-500/30 backdrop-blur-sm">
              PREMIUM DENTAL CARE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Healthy Smiles <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-white">
                Begin at DR. TEETH.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
              Advanced multi-speciality dental care with painless treatments, modern technology, and personalized patient care in Kozhikode.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="shadow-xl shadow-blue-900/30 text-base" onClick={() => window.location.href = '#appointment'}>
                <Calendar className="mr-2" size={20} />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base">
                <Phone className="mr-2" size={20} />
                Call Clinic
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 md:gap-12 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <ShieldCheck className="text-teal-400" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Painless</span>
                  <span className="text-xs text-blue-200">Treatments</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Smile className="text-teal-400" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Makeovers</span>
                  <span className="text-xs text-blue-200">Cosmetic Smiles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave/Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </section>
  );
}
