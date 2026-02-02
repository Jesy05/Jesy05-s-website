// app/page.tsx
"use client"; // Necesario para usar animaciones y botones

import { motion } from "framer-motion"; //

export default function Home() {
  return (
    <main className="min-h-screen bg-y2k-navy text-white flex flex-col overflow-hidden font-sans">
      
      {/* SECCIÓN SUPERIOR: EL ACUARIO */}
      <div className="h-[45vh] bg-gradient-to-b from-y2k-blue/30 to-y2k-navy relative flex flex-col items-center justify-center border-b-2 border-y2k-blue/20">
        
        {/* Tu Icono Central Animado */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} // Efecto de flotar
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative group cursor-pointer"
        >
          {/* El contenedor circular de tu dibujo */}
          <div className="w-40 h-40 rounded-full border-4 border-y2k-lavender bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(162,210,255,0.3)] overflow-hidden">
            {/* Cuando tengas tu dibujo, reemplaza este texto por <img src="/tu-dibujo.png" /> */}
            <span className="text-y2k-blue font-bold text-center p-4">Tu Arte Aquí</span>
          </div>

          {/* Un pequeño adorno flotante */}
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-y2k-pink rounded-full blur-xl opacity-50 animate-pulse" />
        </motion.div>

        <h1 className="mt-6 text-2xl font-bold tracking-widest text-y2k-blue drop-shadow-lg">
          JESY GONZÁLEZ
        </h1>
      </div>

      {/* SECCIÓN INFERIOR: PRÓXIMAMENTE LOS WIDGETS */}
      <div className="h-[55vh] p-10 flex items-center justify-center opacity-40 italic">
        (Próximo paso: Integrar tus burbujas de links y los widgets de Paint)
      </div>

    </main>
  );
}