'use client';

export default function DemoOverlay() {
  return (
    <>
      {/* Top Header Notice */}
      <div className="fixed top-0 left-0 w-full z-[100] h-10 md:h-12 bg-amber-600/95 backdrop-blur-md text-white flex items-center justify-center px-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.3)] border-b border-amber-700">
        <p className="font-extrabold text-[10px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 uppercase">
          <span className="text-lg pb-0.5">⚠️</span> 
          <span>DEMO WEBSITE — FULL OWNERSHIP TRANSFER AFTER PAYMENT COMPLETION</span>
        </p>
      </div>

      {/* Floating Badge */}
      <div className="fixed bottom-24 left-6 z-[90] bg-slate-900/90 backdrop-blur-lg text-white px-5 py-2.5 rounded-full shadow-2xl border border-white/10 animate-[pulse_3s_ease-in-out_infinite] hidden lg:block hover:bg-slate-900 cursor-default transition-colors">
        <span className="font-bold text-xs tracking-widest uppercase text-amber-400">Demo Preview</span>
      </div>

      {/* Full Page Watermark Pattern */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex flex-wrap justify-center items-center opacity-[0.05] select-none mix-blend-overlay">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="text-black font-black text-5xl md:text-7xl transform -rotate-[30deg] p-12 whitespace-nowrap"
          >
            DEMO VERSION
          </div>
        ))}
      </div>
    </>
  );
}
