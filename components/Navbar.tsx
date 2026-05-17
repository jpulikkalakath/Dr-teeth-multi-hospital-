'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Dr. Vani', href: '#doctor' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="bg-blue-900 text-white text-xs md:text-sm py-2.5 px-4 hidden md:flex justify-between items-center z-50 relative mt-10 md:mt-12">
        <div className="flex items-center gap-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-teal-400" />
            <span>Govindapuram, Kozhikode</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-teal-400" />
            <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 top-10 md:top-12' 
            : 'bg-transparent py-5 top-10 md:top-[88px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>
                DR. TEETH<span className="text-teal-500">.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm transition-colors hover:text-teal-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm" onClick={() => window.location.href = '#appointment'}>
                Book Appointment
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-blue-900'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium text-lg border-b border-slate-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full mt-2" onClick={() => {
              setMobileMenuOpen(false);
              window.location.href = '#appointment';
            }}>
              Book Appointment
            </Button>
          </motion.div>
        )}
      </header>
    </>
  );
}
