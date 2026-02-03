"use client";
import { motion } from "framer-motion";

interface BubbleProps {
  text: string;
  href?: string;         // 👈 El "?" lo hace opcional (adiós error rojo)
  color: string;
  delay?: number;
  icon?: string;         // 👈 Nuevo: para tu dibujo SVG
  onClick?: () => void;  // 👈 Nuevo: para abrir las ventanas
}

export default function BubbleLink({ text, href, color, delay = 0, icon, onClick }: BubbleProps) {
  
  // Diseño visual de la burbuja
  const content = (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      className={`${color} text-y2k-navy border-2 border-y2k-navy px-6 py-2 rounded-full font-bold shadow-[4px_4px_0px_rgba(27,38,59,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2`}
    >
      {/* Si mandas icono, lo dibuja; si no, no pasa nada */}
      {icon && <img src={icon} alt="" className="w-5 h-5" />} 
      <span>{text}</span>
    </motion.div>
  );

  // Lógica inteligente: ¿Es link o botón?
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {content}
    </div>
  );
}