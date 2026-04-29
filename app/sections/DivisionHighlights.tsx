"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Sun,
  Plane,
  Scissors,
  Sprout,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const highlights = [
  {
    icon: Monitor,
    title: "IT Services",
    description:
      "From cybersecurity and cloud computing to software development and network infrastructure, we deliver cutting-edge technology solutions that keep your business ahead of the curve.",
    color: "#4FA3E3",
    href: "/services/",
    gradient: "from-[#2F80ED] to-[#56CCF2]",
    image: "/IT%20engineer%20installing%20system.jpg",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "Harness the power of the sun with our solar panel installations, battery storage solutions, and energy consultations. Reduce costs and embrace sustainable energy for your home or business.",
    color: "#F59E0B",
    href: "/solar-energy/",
    gradient: "from-amber-500 to-orange-500",
    image: "/solar%20images/Powering%20brighter%20tomorrow.jpg",
  },
  {
    icon: Plane,
    title: "Tourism",
    description:
      "Experience Tanzania's wild beauty with our curated safari adventures across iconic national parks — from the Serengeti to Ngorongoro. Unforgettable journeys await.",
    color: "#14B8A6",
    href: "/tourism/",
    gradient: "from-teal-500 to-cyan-500",
    image: "/Tourism/safari-8-days.jpg",
  },
  {
    icon: Scissors,
    title: "Tailoring",
    description:
      "Mtu Africa Suit delivers luxury bespoke craftsmanship — wedding suits, business attire, corporate uniforms, and high-quality men's fashion tailored to perfection in Dar es Salaam.",
    color: "#A855F7",
    href: "/tailoring/",
    gradient: "from-purple-500 to-pink-500",
    image: "/Mtu%20Africa%20Tailoring/wedding%20suit.jpg",
  },
  {
    icon: Sprout,
    title: "Agricultural Solutions",
    description:
      "From crop cultivation and irrigation to livestock trading and land leasing, we empower farmers with modern tools, expert guidance, and sustainable practices for profitable growth.",
    color: "#22C55E",
    href: "/agriculture/",
    gradient: "from-green-500 to-emerald-500",
    image: "/Agrucluture%20images/Agruculture-Hero.jpg",
  },
];

export default function DivisionHighlights() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What We Do"
          subtitle="Explore our divisions and find the perfect solution for your needs"
        />

        <div className="space-y-16 md:space-y-24">
          {highlights.map((division, index) => (
            <div
              key={division.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
            >
              <ScrollReveal
                direction={index % 2 === 0 ? "left" : "right"}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top right, ${division.color}40, transparent)`,
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <division.icon size={24} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.1}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white">
                    {division.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-base md:text-lg">
                    {division.description}
                  </p>
                  <Link
                    href={division.href}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${division.color}, ${division.color}dd)`,
                    }}
                  >
                    Go to {division.title}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
