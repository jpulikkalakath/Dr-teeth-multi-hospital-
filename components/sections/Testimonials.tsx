'use client';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Arjun M.",
      text: "I was always scared of dentists, but Dr. Vani completely changed that. The root canal was absolutely painless, and the clinic is so clean and premium. Highly recommend!",
      rating: 5
    },
    {
      name: "Sneha P.",
      text: "Got my smile makeover done here. The results are phenomenal! The attention to detail is just superb. Worth every penny.",
      rating: 5
    },
    {
      name: "Rahul T.",
      text: "Took my 5-year-old daughter for her first checkup. The staff and doctor were so patient and friendly. She loved the experience!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2">Patient Stories</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Smiles We&apos;ve Brightened
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-100 opacity-50" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-amber-400 text-amber-400" size={18} />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 relative z-10">&quot;{review.text}&quot;</p>
              <div className="font-bold text-blue-900">{review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
