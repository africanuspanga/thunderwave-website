"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Users, Lightbulb, Heart, Shield, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with honesty and transparency in everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to achieve shared success.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "We are dedicated to delivering excellence in every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="About Thunderwave"
          subtitle="Empowering businesses through innovative technology solutions"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about/" },
          ]}
        />

        {/* Company Story */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/About us page.jpg"
                    alt="About Thunderwave"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight">
                    Committed to{" "}
                    <span className="text-gradient-gold">Excellence</span>
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    THUNDERWAVE COMPANY LIMITED is committed to delivering
                    innovative IT solutions that empower businesses to succeed in
                    a digital-first world. With a strong focus on reliability,
                    security, and performance, we provide end-to-end technology
                    services tailored to organizations of all sizes.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Based in Mikocheni, Dar es Salaam, we serve clients across
                    Tanzania with a team of certified professionals who bring
                    deep expertise and passion to every project.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="up" delay={0}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-strong rounded-2xl p-8 md:p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-6">
                      <Target size={28} className="text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
                      Our Mission
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      To deliver cutting-edge technology solutions that drive
                      business success. We strive to be the trusted partner that
                      organizations rely on for their digital transformation
                      journey.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-strong rounded-2xl p-8 md:p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4FA3E3]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-[#4FA3E3]/15 flex items-center justify-center mb-6">
                      <Eye size={28} className="text-[#4FA3E3]" />
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
                      Our Vision
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      To become a leading IT solutions provider in Africa,
                      recognized for innovation, reliability, and exceptional
                      customer service that transforms how businesses operate.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  Our Core Values
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass rounded-2xl p-6 text-center h-full hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] flex items-center justify-center mx-auto mb-4">
                      <value.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#6B7280]">{value.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#2F80ED] via-[#4FA3E3] to-[#56CCF2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                Ready to Work With Us?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Let us discuss how Thunderwave can help your business grow with the right technology solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#0A0A0A] text-white font-semibold text-base hover:bg-[#1a1a1a] transition-colors shadow-2xl"
              >
                Contact Us Today
                <ArrowRight size={20} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Boundary separator */}
        <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#4FA3E3] to-[#56CCF2]" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
