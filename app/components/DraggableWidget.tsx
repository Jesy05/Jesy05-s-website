"use client";
import { motion } from "framer-motion";

interface WidgetProps {
  title: string;
  children: React.ReactNode;
  pos: { top?: string; left?: string; right?: string; bottom?: string };
  onClose: () => void; // 👈 Obligatorio: la función para cerrar
}

export default function DraggableWidget({ title, children, pos, onClose }: WidgetProps) {
  return (
    <motion.div 
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute bg-[#C0C0C0] border-2 border-y2k-navy shadow-[6px_6px_0px_rgba(27,38,59,1)] w-72 z-40"
      style={pos}
    >
      <div className="bg-y2k-navy text-white px-2 py-1 text-xs font-bold flex justify-between cursor-move select-none items-center">
        <span>{title}</span>
        {/* Botón X conectado a onClose */}
        <button 
          onClick={onClose} 
          className="bg-[#C0C0C0] text-y2k-navy px-1 border border-y2k-navy font-black hover:bg-y2k-pink text-[10px] ml-2"
        >
          X
        </button>
      </div>
      <div className="p-4 text-y2k-navy font-mono text-xs bg-white m-1 border-2 border-inset border-gray-400">
        {children}
      </div>
    </motion.div>
  );
}