'use client';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 text-sm font-medium text-slate-700 mb-2 md:block hidden">
        Need Help? Chat with us
      </div>
      <a 
        href="#" 
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 transition-colors hover:scale-110"
      >
        <MessageCircle size={32} />
      </a>
    </motion.div>
  );
}
