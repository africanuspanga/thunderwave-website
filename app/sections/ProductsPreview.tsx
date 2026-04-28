"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, AppWindow, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const hardwareItems = [
  "Enterprise servers",
  "Networking equipment",
  "IT infrastructure tools",
];

const softwareItems = [
  "SaaS platforms",
  "Enterprise applications",
  "Business automation tools",
];

export default function ProductsPreview() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Core Products"
          subtitle="Premium technology products to power your infrastructure"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hardware */}
          <ScrollReveal direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative glass rounded-2xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#4FA3E3]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#4FA3E3]/15 flex items-center justify-center mb-6">
                  <Server size={28} className="text-[#4FA3E3]" />
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
                  Hardware
                </h3>

                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  Enterprise-grade hardware solutions designed for performance,
                  reliability, and scalability.
                </p>

                <ul className="space-y-3 mb-8">
                  {hardwareItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Software */}
          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative glass rounded-2xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#56CCF2]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#56CCF2]/15 flex items-center justify-center mb-6">
                  <AppWindow size={28} className="text-[#56CCF2]" />
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
                  Software
                </h3>

                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  Powerful software platforms that streamline operations and
                  drive digital transformation.
                </p>

                <ul className="space-y-3 mb-8">
                  {softwareItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
