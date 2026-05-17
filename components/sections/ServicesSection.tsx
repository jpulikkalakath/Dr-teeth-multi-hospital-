'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface Service {
  title: string;
  desc: string;
  img: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    { title: 'Teeth Whitening', desc: 'Brighten your smile dramatically with our advanced painless whitening treatments.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop' },
    { title: 'Root Canal Treatment', desc: 'Save your natural tooth with our modern, comfortable, and pain-free root canal procedures.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop' },
    { title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth using the latest technology.', img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop' },
    { title: 'Braces & Aligners', desc: 'Straighten your teeth effectively with traditional braces or invisible clear aligners.', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop' },
    { title: 'Smile Makeover', desc: 'Complete cosmetic transformation designed specifically for your facial features.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop' },
    { title: 'Pediatric Dentistry', desc: 'Gentle, child-friendly care ensuring your little ones grow up with healthy smiles.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Comprehensive Dental Care
          </h3>
          <p className="text-lg text-slate-600">
            From routine checkups to complete cosmetic transformations, we offer a full spectrum of premium dental services under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 line-clamp-3">{service.desc}</p>
                </div>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:bg-transparent font-bold" onClick={() => window.location.href = '#appointment'}>
                  Book Consultation <span className="ml-2">→</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => window.location.href = '#appointment'}>
            View All Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
