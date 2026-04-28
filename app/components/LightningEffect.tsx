"use client";

import { motion } from "framer-motion";

interface LightningEffectProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function LightningEffect({
  className = "",
  size = 60,
  color = "#D4AF37",
}: LightningEffectProps) {
  return (
    <motion.svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 24 36"
      fill="none"
      className={`${className} animate-lightning`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path
        d="M13 2L3 18H11L9 34L21 16H13L15 2H13Z"
        fill={color}
        fillOpacity="0.9"
      />
      <path
        d="M13 2L3 18H11L9 34L21 16H13L15 2H13Z"
        stroke={color}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
