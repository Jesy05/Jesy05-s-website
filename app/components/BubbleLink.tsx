// app/components/BubbleLink.tsx
"use client";
import { motion } from "framer-motion";

interface BubbleProps {
  text: string;
  href: string;
  color: string;
  delay?: number;
}

export default function BubbleLink({ text, href, color, delay = 0 }: BubbleProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      className={`${color} text-y2k-navy border-2 border-y2k-navy px-6 py-2 rounded-full font-bold shadow-[4px_4px_0px_rgba(27,38,59,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}
    >
      {text}
    </motion.a>
  );
}