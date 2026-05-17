'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-[3xl] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-12 md:p-16 flex flex-col justify-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block py-1 px-3 rounded-full bg-white/10 text-teal-300 font-semibold tracking-wider text-xs mb-6 uppercase">
                  Lead Dental Surgeon
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-2">Dr. Vani Vineeth</h2>
                <p className="text-blue-200 text-lg mb-8 font-medium">BDS, Dental Surgeon</p>
                
                <p className="text-blue-50 leading-relaxed mb-8 text-lg">
                  With a passion for transforming smiles and relieving pain, Dr. Vani Vineeth leads DR. TEETH with a philosophy rooted in patient comfort. Her gentle approach ensures that even the most anxious patients feel completely at ease.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex border-b border-white/10 pb-4">
                    <span className="font-bold w-1/3 text-teal-400">Specialty</span>
                    <span className="w-2/3">General & Cosmetic Dentistry</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-4">
                    <span className="font-bold w-1/3 text-teal-400">Philosophy</span>
                    <span className="w-2/3">Painless, anxiety-free, and personalized treatments.</span>
                  </div>
                </div>

                <Button variant="secondary" onClick={() => window.location.href = '#appointment'}>
                  Consult Dr. Vani
                </Button>
              </motion.div>
            </div>

            <div className="relative h-[500px] lg:h-auto order-first lg:order-last">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Vani Vineeth" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-transparent"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
