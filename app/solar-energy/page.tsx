"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Zap,
  Battery,
  Home,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const solarServices = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    fullDesc:
      "We design and install custom solar panel systems tailored to your energy needs. Our certified technicians ensure optimal placement, wiring, and grid connection for maximum efficiency and long-term performance.",
    image: "/solar%20images/Solar%20Panel%20Installation.jpg",
    features: [
      "Site assessment & system design",
      "High-efficiency panel options",
      "Professional installation team",
      "Grid-tie & off-grid solutions",
      "Warranty & maintenance plans",
    ],
    color: "#F59E0B",
  },
  {
    icon: Battery,
    title: "Battery Storage Solutions",
    fullDesc:
      "Our battery storage systems let you capture and store surplus solar energy, providing backup power during outages and reducing reliance on the grid. We offer scalable solutions from residential to commercial grade.",
    image: "/solar%20images/Battery%20Storage%20Solutions.jpg",
    features: [
      "Lithium-ion & LiFePO4 options",
      "Scalable capacity",
      "Smart energy management",
      "Backup power during outages",
      "Remote monitoring",
    ],
    color: "#FBBF24",
  },
  {
    icon: Home,
    title: "Residential Solar",
    fullDesc:
      "Transform your home into an energy-producing asset. Our residential solar packages include everything from roof-mounted panels to inverters and monitoring apps, designed to fit your roof layout and household consumption.",
    image: "/solar%20images/Residential%20Solar.jpg",
    features: [
      "Custom roof assessments",
      "Flexible financing options",
      "Net metering support",
      "Real-time monitoring app",
      "25-year performance warranty",
    ],
    color: "#F97316",
  },
  {
    icon: Zap,
    title: "Commercial Solar Systems",
    fullDesc:
      "Reduce operating costs with industrial-grade solar systems. We handle everything from feasibility studies and permits to installation and ongoing maintenance for commercial and institutional clients.",
    image: "/solar%20images/Commercial%20Solar%20Systems.jpg",
    features: [
      "Feasibility & ROI analysis",
      "Custom engineering designs",
      "Turnkey project delivery",
      "O&M service contracts",
      "Tax incentive guidance",
    ],
    color: "#F59E0B",
  },
  {
    icon: Lightbulb,
    title: "Solar Lighting Systems",
    fullDesc:
      "Our solar lighting solutions provide reliable illumination without trenching for electrical cables. Perfect for streets, parking lots, gardens, schools, and rural areas with limited grid access.",
    image: "/solar%20images/solar-light.jpg",
    features: [
      "Street & pathway lighting",
      "Security floodlights",
      "Garden & landscape lights",
      "Motion-sensor options",
      "Zero electricity cost",
    ],
    color: "#FBBF24",
  },
  {
    icon: TrendingUp,
    title: "Solar Consultation & Audit",
    fullDesc:
      "Not sure where to start? Our energy audits analyze your current usage, roof condition, and budget to recommend the most cost-effective solar solution. We provide clear ROI projections and financing guidance.",
    image: "/solar%20images/solar%20consultation.jpg",
    features: [
      "Energy consumption audit",
      "Roof & site evaluation",
      "ROI & payback analysis",
      "Financing option review",
      "Permit & incentive guidance",
    ],
    color: "#F97316",
  },
];

export default function SolarEnergyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Solar Energy"
          subtitle="Harness the power of the sun with sustainable energy solutions"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solar Energy", href: "/solar-energy/" },
          ]}
        />

        {/* Intro */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
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
                      src="/solar%20images/Powering%20brighter%20tomorrow.jpg"
                      alt="Powering a Brighter Tomorrow"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight">
                    Powering a{" "}
                    <span className="text-gradient-gold">Brighter Tomorrow</span>
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    Thunderwave Solar Energy division delivers clean, affordable,
                    and reliable solar power solutions for homes, businesses, and
                    communities across Tanzania. From panel installation to battery
                    storage, we help you reduce energy costs while protecting the
                    environment.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Our team of certified engineers and technicians ensures every
                    system is designed for maximum efficiency, safety, and
                    long-term durability.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  Our Solar Solutions
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Comprehensive solar energy services tailored to your needs
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-24">
              {solarServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
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
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                        {service.fullDesc}
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
                        Get This Service
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

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-amber-600 via-orange-500 to-amber-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                Ready to Go Solar?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Get a free consultation and discover how much you can save by
                switching to solar energy.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#0A0A0A] text-white font-semibold text-base hover:bg-[#1a1a1a] transition-colors shadow-2xl"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#F97316]" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
