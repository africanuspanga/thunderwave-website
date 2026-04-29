"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Ruler,
  Shirt,
  Sparkles,
  Gem,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    icon: Gem,
    title: "Wedding Suits",
    desc: "Make your big day unforgettable with a bespoke wedding suit tailored to perfection. From classic tuxedos to modern slim-fit designs, we craft pieces that match your style and the grandeur of your celebration.",
    image: "/Mtu%20Africa%20Tailoring/wedding%20suit.jpg",
    features: [
      "Bespoke wedding tuxedos",
      "Groom & groomsmen sets",
      "Premium fabric selection",
      "Multiple fitting sessions",
      "On-time delivery guarantee",
    ],
    color: "#D4AF37",
  },
  {
    icon: Shirt,
    title: "Business Suits",
    desc: "Command the boardroom with confidence. Our business suits combine sharp tailoring with premium fabrics to deliver a polished, professional look that sets you apart.",
    image: "/Mtu%20Africa%20Tailoring/corporate%20suits.jpg",
    features: [
      "Custom business suits",
      "Shirt & tie coordination",
      "Seasonal fabric options",
      "Express tailoring available",
      "Alterations & resizing",
    ],
    color: "#C0A062",
  },
  {
    icon: Scissors,
    title: "Corporate Uniforms",
    desc: "Outfit your entire team with consistent, branded corporate wear. We design and produce uniforms for hotels, banks, schools, and organizations with embroidery and logo placement.",
    image: "/Mtu%20Africa%20Tailoring/Corporate%20Uniforms.jpg",
    features: [
      "Company uniform design",
      "Logo embroidery",
      "Bulk order pricing",
      "Brand color matching",
      "Staff measurement services",
    ],
    color: "#B8954E",
  },
  {
    icon: Sparkles,
    title: "High-Quality Men's Suits",
    desc: "Elevate your wardrobe with meticulously crafted men's suits. Every stitch is placed with precision, every cut designed to flatter — because true style is in the details.",
    image: "/Mtu%20Africa%20Tailoring/African%20men%20attire.jpg",
    features: [
      "Hand-finished details",
      "Premium local & imported fabrics",
      "Modern & classic cuts",
      "Personal style consultation",
      "Lifetime alterations",
    ],
    color: "#D4AF37",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    desc: "Share your vision with our tailor. We discuss style, fabric, fit, and occasion.",
  },
  {
    step: "02",
    title: "Measurement",
    desc: "Precision measurements taken by hand to ensure a flawless fit.",
  },
  {
    step: "03",
    title: "Crafting",
    desc: "Our master tailors cut and sew your garment with meticulous attention.",
  },
  {
    step: "04",
    title: "Fitting",
    desc: "Try your suit and we make adjustments until it fits like a second skin.",
  },
];

export default function TailoringPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Tailoring"
          subtitle="Luxury suit craftsmanship for the modern gentleman"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tailoring", href: "/tailoring/" },
          ]}
        />

        {/* Brand Banner */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-10 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="inline-flex flex-col items-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 md:px-12 md:py-8">
                  <Image
                    src="/Mtu%20Africa%20Tailoring/Mtu-Africa-logo.png"
                    alt="Mtu Africa Suit"
                    width={280}
                    height={100}
                    className="object-contain h-16 md:h-20 w-auto"
                  />
                </div>
                <p className="text-[#6B7280] text-sm mt-3">
                  Luxury Suit | Craftsmanship 🪡
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Brand Hero */}
        <section className="py-16 md:py-24 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="left">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/Mtu%20Africa%20Tailoring/wedding%20suit.jpg"
                      alt="Mtu Africa Luxury Suits"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent" />
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight">
                    MTU AFRICA <span className="text-gradient-gold">SUIT</span>
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    We design wedding suits, business suits, corporate uniforms,
                    and high-quality men's suits — each piece handcrafted with
                    precision and passion. Based in Dar es Salaam, we bring
                    world-class tailoring to Tanzania's modern gentleman.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href="tel:+255716246800"
                      className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#D4AF37] transition-colors"
                    >
                      <Phone size={16} className="text-[#D4AF37]" />
                      +255 716 246 800
                    </a>
                    <div className="flex items-start gap-3 text-sm text-[#6B7280]">
                      <MapPin size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                      <span>
                        Warioba Street / Laurete International School
                        <br />
                        Dar es Salaam, Tanzania
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                      <Clock size={16} className="text-[#D4AF37]" />
                      <span>By Appointment</span>
                    </div>
                    <a
                      href="https://instagram.com/sutiafrica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#D4AF37] transition-colors"
                    >
                      <Globe size={16} className="text-[#D4AF37]" />
                      @sutiafrica
                    </a>
                  </div>

                  <Link
                    href="/contact/"
                    className="btn-gold px-8 py-4 rounded-xl text-sm md:text-base inline-block text-center mt-4"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  Our Services
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  From wedding day elegance to boardroom power dressing — we tailor it all
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                >
                  <ScrollReveal
                    direction={index % 2 === 0 ? "left" : "right"}
                    className={index % 2 === 1 ? "lg:order-2" : ""}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden group"
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(to top, ${service.color}30, transparent)`,
                          }}
                        />
                      </div>
                      <div
                        className="absolute bottom-4 left-4 px-4 py-2 rounded-lg"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <service.icon
                          size={20}
                          style={{ color: service.color }}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>

                  <ScrollReveal
                    direction={index % 2 === 0 ? "right" : "left"}
                    delay={0.1}
                    className={index % 2 === 1 ? "lg:order-1" : ""}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <service.icon
                            size={24}
                            style={{ color: service.color }}
                          />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-[#6B7280] leading-relaxed">
                        {service.desc}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-white/80"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-[#D4AF37] shrink-0"
                            />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact/"
                        className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all group"
                      >
                        Book a Consultation
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  The Bespoke Process
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  From first consultation to final fitting — how we craft your perfect suit
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 md:p-8 text-center h-full hover:bg-white/10 transition-colors relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <span className="text-4xl font-bold text-[#D4AF37]/30 font-[family-name:var(--font-poppins)]">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mt-4 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#6B7280]">{item.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                Get Measured <span className="text-gradient-gold">Today</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Visit our studio for a personal fitting and discover the
                difference of truly custom clothing. Appointment only.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+255716246800"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#D4AF37] text-[#0A0A0A] font-semibold text-base hover:bg-[#E8C547] transition-colors shadow-2xl"
                >
                  <Phone size={20} />
                  Call +255 716 246 800
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition-colors"
                >
                  <Mail size={20} />
                  Send a Message
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.45}>
              <p className="text-sm text-white/40 mt-8">
                Warioba Street / Laurete International School, Dar es Salaam, Tanzania
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#C0A062] to-[#D4AF37]" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
