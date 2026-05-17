'use client';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Stethoscope, Sparkles, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: <Stethoscope size={32} />, title: "Experienced Surgeon", desc: "Expert care led by Dr. Vani Vineeth." },
    { icon: <Heart size={32} />, title: "Painless Treatments", desc: "Anxiety-free, gentle procedures." },
    { icon: <Sparkles size={32} />, title: "Advanced Tech", desc: "State-of-the-art dental equipment." },
    { icon: <ShieldCheck size={32} />, title: "Sterilized Environment", desc: "100% strict hygiene protocols." },
    { icon: <Award size={32} />, title: "Child-Friendly", desc: "Specialized care for young smiles." },
    { icon: <Clock size={32} />, title: "No Long Waits", desc: "Respecting your time always." },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2">Why DR. TEETH</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
            The Preferred Choice in Kozhikode
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h4>
              <p className="text-slate-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
