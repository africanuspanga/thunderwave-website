"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap, Shield, Globe, Brain, Briefcase, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const features = [
  {
    icon: Zap,
    title: "Fast & Reliable Support",
    description:
      "Rapid response times and dependable service you can count on 24/7.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description:
      "Every solution is built with security at its core, protecting your data and operations.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description:
      "Infrastructure that grows with your business, from startup to enterprise.",
  },
  {
    icon: Brain,
    title: "Expert Team",
    description:
      "Certified professionals with deep expertise across all technology domains.",
  },
  {
    icon: Briefcase,
    title: "Business-Focused Technology",
    description:
      "Solutions designed to drive real business outcomes, not just technical checkboxes.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Why us section.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Thunderwave?"
          subtitle="What sets us apart from the rest"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group glass-strong rounded-2xl p-6 md:p-8 h-full hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-white" />
                </div>

                <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/why-us/"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all group"
            >
              Discover More Reasons
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
