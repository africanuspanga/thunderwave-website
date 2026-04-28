"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

export default function AboutShort() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Who We Are" subtitle="Learn more about our mission and vision" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/About us section.jpg"
                  alt="Thunderwave Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-[#D4AF37]">
                  Dar es Salaam, Tanzania
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight">
                Forward-Thinking IT Solutions for{" "}
                <span className="text-gradient-blue">Modern Businesses</span>
              </h3>

              <p className="text-[#6B7280] leading-relaxed">
                THUNDERWAVE COMPANY LIMITED is a forward-thinking IT solutions
                provider based in Dar es Salaam, Tanzania. We specialize in
                delivering innovative, secure, and scalable technology solutions
                that help businesses grow, operate efficiently, and stay
                protected in a digital world.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Innovation", desc: "Cutting-edge solutions" },
                  { label: "Security", desc: "Enterprise-grade protection" },
                  { label: "Scalability", desc: "Grow without limits" },
                  { label: "Support", desc: "Always there for you" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass p-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <p className="text-[#D4AF37] font-semibold text-sm">
                      {item.label}
                    </p>
                    <p className="text-white/60 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about/"
                className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all group"
              >
                Learn More About Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
