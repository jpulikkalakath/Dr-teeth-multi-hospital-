'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState(0);

  const transformations = [
    {
      category: 'Smile Makeover',
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop', // Using diverse dental stock
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: 'Teeth Whitening',
      before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-2">Real Results</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6">
            Smile Transformations
          </h3>
          <p className="text-blue-200 text-lg">
            See the life-changing results achieved by Dr. Vani Vineeth. Your perfect smile is closer than you think.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {transformations.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === idx ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30' : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              {t.category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 md:gap-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <Image 
                src={transformations[activeTab].before} 
                alt="Before" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                Before
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <Image 
                src={transformations[activeTab].after} 
                alt="After" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-teal-500/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                After
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
