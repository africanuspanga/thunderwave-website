"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Zap } from "lucide-react";
import LightningEffect from "../components/LightningEffect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url(/new%20hero%20background.jpg)" }}
      />
      
      {/* Overlays - lighter to show background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/30 to-[#0A0A0A]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F80ED]/20 to-[#56CCF2]/10" />

      {/* Decorative lightning bolts */}
      <div className="absolute top-20 right-10 md:top-32 md:right-20 opacity-60">
        <LightningEffect size={80} />
      </div>
      <div className="absolute bottom-32 left-10 md:bottom-40 md:left-20 opacity-40">
        <LightningEffect size={50} />
      </div>
      <div className="absolute top-40 left-1/4 opacity-30 hidden md:block">
        <LightningEffect size={40} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Zap size={16} className="text-[#D4AF37]" />
          <span className="text-sm text-white/80">
            Powering Growth Across Four Industries
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6 drop-shadow-lg"
        >
          Thunderwave
          <br />
          <span className="text-gradient-gold">Company Limited</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
        >
          A diversified conglomerate delivering excellence in IT, solar energy,
          tailoring, and agricultural solutions across Tanzania.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact/"
            className="btn-gold px-8 py-4 rounded-xl text-sm md:text-base w-full sm:w-auto text-center"
          >
            Get Started
          </Link>
          <Link
            href="/about/"
            className="px-8 py-4 rounded-xl text-sm md:text-base w-full sm:w-auto text-center border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
          >
            Learn More
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={20} className="text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
