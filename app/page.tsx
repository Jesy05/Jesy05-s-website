// app/page.tsx
"use client";
import { motion } from "framer-motion";
import BubbleLink from "./components/BubbleLink"; // Ahora el error desaparecerá

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      
      {/* 🌊 SECCIÓN SUPERIOR: CELESTE */}
      <div className="h-[40vh] bg-y2k-blue relative flex flex-col items-center justify-center border-b-4 border-y2k-navy">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full border-4 border-y2k-navy bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-[6px_6px_0px_rgba(27,38,59,1)]"
        >
          <span className="text-y2k-navy font-bold">Tu Arte</span>
        </motion.div>
        <h1 className="mt-4 text-y2k-navy font-black tracking-tighter text-2xl uppercase">
          Jesy González
        </h1>
      </div>

      {/* 🖥️ SECCIÓN INFERIOR: BLANCO */}
      <div className="h-[60vh] bg-white relative p-10 flex flex-col items-center gap-8">
        
        {/* Burbujas Flotantes */}
        <div className="flex gap-4">
          <BubbleLink text="GitHub" href="#" color="bg-y2k-lavender" />
          <BubbleLink text="LinkedIn" href="#" color="bg-y2k-pink" delay={0.5} />
        </div>

        {/* Widget Estilo Paint */}
        <div className="w-full max-w-sm bg-[#C0C0C0] border-2 border-y2k-navy shadow-[6px_6px_0px_rgba(27,38,59,1)]">
          <div className="bg-y2k-navy text-white px-2 py-1 text-xs font-bold flex justify-between">
            <span>Status.exe</span>
            <span>X</span>
          </div>
          <div className="p-4 text-y2k-navy font-mono text-sm">
            Ready to build something cute & secure.
          </div>
        </div>

      </div>
    </main>
  );
}