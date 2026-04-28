"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  HeadphonesIcon,
  Shield,
  Cloud,
  Code,
  Network,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const services = [
  {
    icon: Monitor,
    title: "Software Installation",
    description:
      "Seamless installation and configuration of business-critical software systems.",
    image: "/IT engineer installing system.jpg",
    color: "#4FA3E3",
    hasImage: true,
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support",
    description:
      "Reliable technical support to keep your operations running without interruptions.",
    image: "/IT Support.jpg",
    color: "#56CCF2",
    hasImage: true,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business from threats with advanced security solutions.",
    image: "/cybersecurity hacker protection.jpg",
    color: "#D4AF37",
    hasImage: true,
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Scalable cloud solutions for storage, collaboration, and business continuity.",
    image: "/Cloud Computing.jpg",
    color: "#4FA3E3",
    hasImage: true,
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom-built systems tailored to your business needs.",
    image: "/software developement.jpg",
    color: "#56CCF2",
    hasImage: true,
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Design and deployment of secure, high-performance network systems.",
    image: "/network cables infrastructure.jpg",
    color: "#D4AF37",
    hasImage: true,
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
          title="Our Services"
          subtitle="Comprehensive IT solutions tailored to your business needs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative glass rounded-2xl overflow-hidden h-full cursor-pointer hover:bg-white/10 transition-colors"
              >
                {/* Image for top 3 services */}
                {service.hasImage && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                    <div
                      className="absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}25` }}
                    >
                      <service.icon size={20} style={{ color: service.color }} />
                    </div>
                  </div>
                )}

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
                  }}
                />

                <div className={`relative z-10 ${service.hasImage ? 'p-5' : 'p-6 md:p-8'}`}>
                  {!service.hasImage && (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon size={24} style={{ color: service.color }} />
                    </div>
                  )}

                  <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${service.color}10 50%)`,
                    borderRadius: "0 1rem 0 0",
                  }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
