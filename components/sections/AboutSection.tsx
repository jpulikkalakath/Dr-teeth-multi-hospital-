'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const points = [
    "Personalized dental care tailored for you",
    "Modern dental technology & equipment",
    "Comfortable and painless treatment methods",
    "Hygienic and completely sterilized environment",
    "Smile-focused premium healthcare",
    "Patient-first experience from greeting to checkout"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Dr. Teeth Clinic Interior" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-teal-600">5+</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Years of Excellence</h4>
                  <p className="text-sm text-slate-500">Creating beautiful smiles</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2">About Our Clinic</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 leading-tight">
              A New Standard in <br className="hidden md:block"/>
              <span className="text-teal-500">Premium Dental Care</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At DR. TEETH Multi Speciality Dental Clinic, we believe that going to the dentist shouldn&apos;t be an anxious experience. We&apos;ve created a calming, warm, and highly professional environment right here in Govindapuram, Kozhikode.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex flex-col items-center justify-center text-blue-600 font-bold text-xl">
                <span>100</span><span className="text-xs">%</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Commitment to Care</h4>
                <p className="text-sm text-slate-500">We prioritize your comfort above all else.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
