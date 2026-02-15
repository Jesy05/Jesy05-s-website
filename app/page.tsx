"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BubbleLink from "./components/BubbleLink";
import DraggableWidget from "./components/DraggableWidget";

export default function Home() {
  // Estados para abrir/cerrar ventanas
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Estado para las posiciones de las burbujas
  const [bubblePositions, setBubblePositions] = useState<number[]>([]);

  useEffect(() => {
    // TUS POSICIONES MANUALES (0 = Izquierda total, 50 = Centro, 100 = Derecha total)
    // He distribuido un poco más los números para que cubran toda la pantalla
    const manualPositions = [5, 15, 35, 60, 80, 95]; 
    setBubblePositions(manualPositions);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden relative">

      {/* 🌊 PARTE DE ARRIBA (ACUARIO) */}
      <section 
        className="relative h-[35vh] flex items-center justify-center border-b-4 border-y2k-navy overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #8ebff9, #c4d6fc)" }}
      >
        {/* Burbujas flotando */}
        {bubblePositions.map((leftPos, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-3 h-3 bg-white/40 rounded-full"
            // 👇 EL CAMBIO CLAVE: Usamos 'style={{ left: ... }}'
            // Esto obliga a la burbuja a posicionarse desde el borde izquierdo de la pantalla
            style={{ left: `${leftPos}%` }}
            
            // Ya no usamos 'x' aquí, solo animamos la subida (y)
            initial={{ y: 0 }} 
            animate={{ y: -220 }}
            
            transition={{
              duration: 6 + (i % 3), 
              repeat: Infinity,
              delay: i * 0.7
            }}
          />
        ))}
      </section>

      {/* 🎨 CÍRCULO + NOMBRE (CENTRADOS EN LA LÍNEA) */}
      <div className="absolute left-1/2 top-[35vh] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-36 h-36 rounded-full border-4 border-y2k-navy bg-white shadow-[6px_6px_0px_rgba(27,38,59,1)] flex items-center justify-center"
        >
          <span className="text-y2k-navy font-bold text-xs uppercase text-center px-4">
            Tu Arte Aquí
          </span>
        </motion.div>

        <h1 className="mt-4 text-y2k-navy font-black tracking-widest text-xl uppercase">
          Jesy González
        </h1>
      </div>

      {/* 🖥️ PARTE DE ABAJO (FONDO BLANCO) */} 
      <section className="flex-1 relative flex items-center justify-center">

        {/* Contenedor de burbujas (Links) */}
        <div className="relative w-[600px] h-[350px]"> 

          {/* Burbuja Izquierda: Links & Socials */}
          <div className="absolute left-[-50px] top-24">
            <BubbleLink
              text="Links & Socials"
              color="bg-y2k-lavender"
              icon="icons/link-icon.svg"
              onClick={() => setShowProjects(true)}
            />
          </div>

          {/* Burbuja Derecha: Contacto (Con Ícono) */}
          <div className="absolute right-0 top-24">
            <BubbleLink
              text="Contact"
              color="bg-y2k-pink"
              icon="icons/contact-icon.svg"
              onClick={() => setShowContact(true)}
            />
          </div>

          {/* Burbuja Centro Abajo: Quién soy */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-20">
            <BubbleLink
              text="Who I am & what I do"
              color="bg-y2k-blue"
              onClick={() => setShowAbout(true)}
            />
          </div>

        </div>

        {/* 🪟 VENTANAS (WIDGETS) */}
        <AnimatePresence>
          {showProjects && (
            <DraggableWidget
              key="socials-widget" 
              title="Links.exe"
              pos={{ top: "12%", left: "15%" }}
              onClose={() => setShowProjects(false)}
            >
              <p className="mb-2">Check out my projects and professional profile:</p>
              <div className="flex flex-col gap-2 text-y2k-navy font-bold underline">
                <a href="https://github.com/Jesy05" target="_blank">GitHub: Jesy05</a>
                <a href="https://linkedin.com" target="_blank">LinkedIn Profile</a>
              </div>
            </DraggableWidget>
          )}

          {showAbout && (
            <DraggableWidget
              key="about-widget"
              title="About_Me.txt"
              pos={{ top: "30%", left: "40%" }}
              onClose={() => setShowAbout(false)}
            >
              <p className="font-bold border-b border-gray-400 mb-2">Student Profile</p>
              <p>Industrial & Systems Engineering student focused on:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Process optimization</li>
                <li>Cybersecurity & data</li>
                <li>Structured problem solving</li>
              </ul>
            </DraggableWidget>
          )}

          {showContact && (
            <DraggableWidget
              key="contact-widget"
              title="Contact.bmp"
              pos={{ bottom: "18%", right: "15%" }}
              onClose={() => setShowContact(false)}
            >
              <div className="text-center">
                <p className="font-bold text-lg">Jesy Nicole González Jarquín</p>
                <p className="mt-1 italic text-gray-600">Nicaragua</p>
                <div className="mt-3 bg-gray-200 p-2 border border-y2k-navy">
                  <p className="text-xs">jesygonzalezj05@gmail.com</p>
                </div>
              </div>
            </DraggableWidget>
          )}
        </AnimatePresence>

      </section>
    </main>
  );
}