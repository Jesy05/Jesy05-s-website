"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BubbleLink from "./components/BubbleLink";
import DraggableWidget from "./components/DraggableWidget";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden relative">

      {/* 🌊 PARTE DE ARRIBA (ACUARIO) */}
      <section className="relative h-[35vh] flex items-center justify-center border-b-4 border-y2k-navy overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #8ebff9, #c4d6fc)" }}
      >
        {/* Burbujas flotando */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-3 h-3 bg-white/40 rounded-full"
            initial={{ y: 0, x: Math.random() * 800 }}
            animate={{ y: -220 }}
            transition={{
              duration: 6 + Math.random() * 3,
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

        {/* Contenedor tipo "mapa mental" */}
        <div className="relative w-[600px] h-[350px]"> 

          {/* Burbuja izquierda */}
          <div className="absolute left-[-40px] top-24">
            <BubbleLink
              text="My Git & LinkedIn"
              color="bg-y2k-lavender"
              onClick={() => setShowProjects(true)}
            />
          </div>

          {/* Burbuja derecha */}
          <div className="absolute right-0 top-24">
            <BubbleLink
              text="Contact"
              color="bg-y2k-pink"
              icon="/icons/contact-icon.svg"
              onClick={() => setShowContact(true)}
            />
          </div>

          {/* Burbuja abajo centro */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-20">
            <BubbleLink
              text="Who I am & what I do"
              color="bg-y2k-blue"
              onClick={() => setShowAbout(true)}
            />
          </div>

        </div>

        {/* 🪟 VENTANAS */}
        <AnimatePresence>
          {showProjects && (
            <DraggableWidget
              title="Projects.exe"
              pos={{ top: "12%", left: "15%" }}
              onClose={() => setShowProjects(false)}
            >
              <p className="mb-2">Industrial & Systems Engineering Student</p>
              <div className="flex gap-3 text-y2k-navy font-bold underline">
                <a href="https://github.com/Jesy05" target="_blank">GitHub</a>
                <a href="https://linkedin.com" target="_blank">LinkedIn</a>
              </div>
            </DraggableWidget>
          )}

          {showAbout && (
            <DraggableWidget
              title="About_Me.txt"
              pos={{ top: "30%", left: "40%" }}
              onClose={() => setShowAbout(false)}
            >
              <p>Industrial & Systems Engineering student focused on:</p>
              <ul className="mt-2 space-y-1">
                <li>• Process optimization</li>
                <li>• Cybersecurity & data</li>
                <li>• Structured problem solving</li>
              </ul>
            </DraggableWidget>
          )}

          {showContact && (
            <DraggableWidget
              title="Contact.bmp"
              pos={{ bottom: "18%", right: "15%" }}
              onClose={() => setShowContact(false)}
            >
              <p>Jesy Nicole González Jarquín</p>
              <p className="mt-2 italic">Nicaragua</p>
              <p className="mt-1">jesy@email.com</p>
            </DraggableWidget>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
