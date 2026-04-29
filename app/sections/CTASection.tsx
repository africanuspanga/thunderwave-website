"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import LightningEffect from "../components/LightningEffect";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED] via-[#4FA3E3] to-[#56CCF2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <LightningEffect size={60} color="#FFFFFF" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <LightningEffect size={50} color="#FFFFFF" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-20 hidden md:block">
        <LightningEffect size={40} color="#FFFFFF" />
      </div>

      {/* Floating circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
            Ready to Work With{" "}
            <span className="text-[#0A0A0A]">Thunderwave?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Whether you need technology solutions, solar power, travel planning,
            custom clothing, or farming expertise — we are here to help.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#0A0A0A] text-white font-semibold text-base hover:bg-[#1a1a1a] transition-colors shadow-2xl"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
