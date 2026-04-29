"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Database, Cloud } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

export default function Partners() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Technology Partner"
          subtitle="Trusted partnerships that power our IT solutions"
        />

        <ScrollReveal>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Logo & Brand */}
              <div className="p-8 md:p-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative h-16 w-48 md:h-20 md:w-56 mb-6">
                  <Image
                    src="/Nakivo-our%20partenr.avif"
                    alt="Nakivo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white mb-3">
                  Powerful Backup and Recovery
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  We closely work with NAKIVO to deliver enterprise-grade backup
                  and recovery solutions for your data — wherever it resides.
                  Protect your critical business information with world-class
                  technology.
                </p>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all group"
                >
                  Explore IT Services
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Features */}
              <div className="p-8 md:p-12 bg-white/5">
                <div className="space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "Comprehensive Data Protection",
                      desc: "Backup physical, virtual, cloud, and SaaS environments from a single platform.",
                    },
                    {
                      icon: Database,
                      title: "Fast & Reliable Recovery",
                      desc: "Instantly recover files, applications, and entire systems with minimal downtime.",
                    },
                    {
                      icon: Cloud,
                      title: "Cloud-Native Solutions",
                      desc: "Seamless backup for Microsoft 365, Google Workspace, AWS, and Azure.",
                    },
                  ].map((feature, index) => (
                    <ScrollReveal key={feature.title} delay={index * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#4FA3E3]/15 flex items-center justify-center shrink-0">
                          <feature.icon size={20} className="text-[#4FA3E3]" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-[#6B7280] text-sm leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
