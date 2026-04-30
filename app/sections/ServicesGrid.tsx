"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Sun,
  Scissors,
  Sprout,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const divisions = [
  {
    icon: Monitor,
    title: "IT Services",
    description:
      "Software, cybersecurity, cloud, and network infrastructure for modern businesses.",
    color: "#4FA3E3",
    href: "/services/",
    gradient: "from-[#2F80ED] to-[#56CCF2]",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "Clean, affordable solar power solutions for homes, businesses, and communities.",
    color: "#F59E0B",
    href: "/solar-energy/",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Scissors,
    title: "Tailoring",
    description:
      "Bespoke garments, corporate wear, alterations, and fashion consulting.",
    color: "#A855F7",
    href: "/tailoring/",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Sprout,
    title: "Agricultural Solutions",
    description:
      "Irrigation, mechanization, crop support, and sustainable farming practices.",
    color: "#22C55E",
    href: "/agriculture/",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Divisions"
          subtitle="Five pillars of excellence driving growth and innovation"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => (
            <ScrollReveal key={division.title} delay={index * 0.1}>
              <Link href={division.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative glass rounded-2xl overflow-hidden h-full cursor-pointer hover:bg-white/10 transition-colors"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${division.color}15, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 p-6 md:p-8">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${division.gradient} flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <division.icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-white mb-3">
                      {division.title}
                    </h3>

                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                      {division.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${division.color}10 50%)`,
                      borderRadius: "0 1rem 0 0",
                    }}
                  />

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60"
                    style={{
                      background: `linear-gradient(to right, ${division.color}, transparent)`,
                    }}
                  />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
