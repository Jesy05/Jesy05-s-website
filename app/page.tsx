"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BubbleLink from "./components/BubbleLink";
import DraggableWidget from "./components/DraggableWidget";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Dos capas de burbujas para dar profundidad
  const [largeBubbles, setLargeBubbles] = useState<number[]>([]);
  const [smallBubbles, setSmallBubbles] = useState<number[]>([]);

  useEffect(() => {
    // Capa 1: Burbujas grandes
    setLargeBubbles([5, 35, 60, 95]); 
    // Capa 2: Burbujas pequeñas en posiciones intermedias
    setSmallBubbles([15, 25, 45, 75, 85]);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden relative">

      {/* 🌊 PARTE DE ARRIBA (ACUARIO) */}
      <section 
        className="relative h-[35vh] flex items-center justify-center border-b-4 border-y2k-navy overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #8ebff9, #c4d6fc)" }}
      >
        {/* CAPA 1: Burbujas Grandes */}
        {largeBubbles.map((leftPos, i) => (
          <motion.img
            key={`large-${i}`}
            src="/bubble.svg" 
            alt="bubble"
            className="absolute bottom-0 w-25 h-25 opacity-100 z-10"
            style={{ left: `${leftPos}%` }}
            initial={{ y: 0, opacity: 0 }} 
            animate={{ 
              y: -300, 
              opacity: [0, 1, 1, 0], 
              x: [0, 15, -15, 0] 
            }}
            transition={{
              duration: 8 + (i % 3), 
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear"
            }}
          />
        ))}

        {/* CAPA 2: Burbujas Pequeñas (Variación) */}
        {smallBubbles.map((leftPos, i) => (
          <motion.img
            key={`small-${i}`}
            src="/bubble.svg" 
            alt="bubble"
            className="absolute bottom-0 w-10 h-10 opacity-80 z-0" // Menos opacidad y detrás (z-0)
            style={{ left: `${leftPos}%` }}
            initial={{ y: 0, opacity: 0 }} 
            animate={{ 
              y: -300, 
              opacity: [0, 0.8, 0.8, 0], 
              x: [0, -10, 10, 0] // Movimiento lateral opuesto
            }}
            transition={{
              duration: 5 + (i % 2), // Suben más rápido por ser "ligeras"
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </section>

      {/* 🎨 CÍRCULO + NOMBRE */}
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

      {/* 🖥️ PARTE DE ABAJO */} 
      <section className="flex-1 relative flex items-center justify-center">
        <div className="relative w-[600px] h-[350px]"> 
          <div className="absolute left-[-50px] top-24">
            <BubbleLink
              text="Links & Socials"
              color="bg-y2k-lavender"
              icon="icons/link-icon.svg"
              onClick={() => setShowProjects(true)}
            />
          </div>

          <div className="absolute right-0 top-24">
            <BubbleLink
              text="Contact"
              color="bg-y2k-pink"
              icon="icons/contact-icon.svg"
              onClick={() => setShowContact(true)}
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-20">
            <BubbleLink
              text="Who I am & what I do"
              color="bg-y2k-blue"
              icon="/bubble.svg"
              onClick={() => setShowAbout(true)}
            />
          </div>
        </div>

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