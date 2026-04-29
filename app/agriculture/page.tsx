"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Tractor,
  Droplets,
  Leaf,
  Wheat,
  BarChart3,
  Fence,
  Beef,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const agriServices = [
  {
    icon: Fence,
    title: "Land Leasing",
    fullDesc:
      "We lease fertile agricultural land for both small-scale and large-scale farming operations. Whether you are starting a new farm or expanding existing operations, we provide access to well-located, productive plots with flexible lease terms and full legal support.",
    image: "/Agrucluture%20images/farm%20leasing.jpg",
    features: [
      "Small-scale plot leasing",
      "Large-scale farmland access",
      "Flexible lease terms",
      "Legal documentation support",
      "Prime location assessments",
    ],
    color: "#22C55E",
  },
  {
    icon: Beef,
    title: "Livestock Trading",
    fullDesc:
      "We buy and sell quality livestock including cattle, cows, goats, and sheep. Our trading network connects farmers with buyers across Tanzania, ensuring fair prices, healthy animals, and reliable delivery for all parties involved.",
    image: "/Agrucluture%20images/livestock%20trading%20.jpg",
    features: [
      "Cattle & cow sales",
      "Goat & sheep trading",
      "Quality health checks",
      "Fair market pricing",
      "Nationwide delivery network",
    ],
    color: "#16A34A",
  },
  {
    icon: Sprout,
    title: "Crop Cultivation Support",
    fullDesc:
      "We provide end-to-end support for crop farming, from seed selection and soil testing to planting schedules and pest management. Our agronomists work with smallholder and commercial farmers to boost productivity sustainably.",
    image: "/Agrucluture%20images/Crop%20Cultivation%20Support.jpg",
    features: [
      "Soil testing & analysis",
      "Seed & input supply",
      "Planting calendars",
      "Pest & disease control",
      "Yield optimization plans",
    ],
    color: "#22C55E",
  },
  {
    icon: Droplets,
    title: "Irrigation Solutions",
    fullDesc:
      "Water is life for agriculture. We design and install drip irrigation, sprinkler systems, and smart water management solutions that reduce water usage by up to 50% while improving crop health and consistency.",
    image: "/Agrucluture%20images/Irrigation.jpg",
    features: [
      "Drip irrigation systems",
      "Sprinkler installations",
      "Water pump solutions",
      "Smart scheduling controllers",
      "Rainwater harvesting",
    ],
    color: "#4ADE80",
  },
  {
    icon: Tractor,
    title: "Farm Mechanization",
    fullDesc:
      "Increase efficiency with the right tools. We supply, lease, and service agricultural machinery including tractors, tillers, harvesters, and processing equipment — plus training on safe operation and maintenance.",
    image: "/Agrucluture%20images/Mechanization.jpg",
    features: [
      "Tractor & implement supply",
      "Equipment leasing",
      "Repair & maintenance",
      "Operator training",
      "Mechanization consulting",
    ],
    color: "#16A34A",
  },
  {
    icon: BarChart3,
    title: "Agribusiness Consulting",
    fullDesc:
      "Farming is a business. Our consultants help with farm business planning, market linkages, financial modeling, grant applications, and value-chain analysis. We equip you with the knowledge to grow from subsistence to commercial success.",
    image: "/Agrucluture%20images/consulting.jpg",
    features: [
      "Business plan development",
      "Market linkage support",
      "Financial modeling",
      "Grant & funding guidance",
      "Value-chain analysis",
    ],
    color: "#22C55E",
  },
  {
    icon: Wheat,
    title: "Post-Harvest & Storage",
    fullDesc:
      "Don't let your harvest go to waste. We offer drying, sorting, grading, packaging, and storage solutions including silos and cold rooms. Our post-harvest services help you maintain quality and command better market prices.",
    image: "/Agrucluture%20images/Post-Harvest%20&%20Storage.jpg",
    features: [
      "Grain drying & cleaning",
      "Cold storage solutions",
      "Silo & warehouse setup",
      "Packaging & branding",
      "Quality grading",
    ],
    color: "#4ADE80",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    fullDesc:
      "We promote organic farming, regenerative agriculture, and climate-smart practices. From composting and bio-pesticides to cover cropping and agroforestry, we help farmers adopt methods that restore soil health and reduce environmental impact.",
    image: "/Agrucluture%20images/Sustainable%20Farming.jpg",
    features: [
      "Organic farming certification",
      "Composting & bio-inputs",
      "Agroforestry planning",
      "Climate-smart practices",
      "Soil regeneration programs",
    ],
    color: "#16A34A",
  },
];

export default function AgriculturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Agricultural Solutions"
          subtitle="Modern farming solutions for sustainable growth and food security"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Agriculture", href: "/agriculture/" },
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
                      src="/Agrucluture%20images/Agruculture-Hero.jpg"
                      alt="Agricultural Solutions"
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
                    Growing Success,{" "}
                    <span className="text-gradient-gold">Harvest by Harvest</span>
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    Thunderwave Agricultural Solutions empowers farmers and
                    agribusinesses with modern tools, expert guidance, and
                    sustainable practices. From seed to market, we support every
                    stage of the farming journey to improve yields, reduce waste,
                    and build profitable agricultural enterprises.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Our team of agronomists, engineers, and business consultants
                    combines local knowledge with innovative technology to deliver
                    practical solutions that work in Tanzania's diverse farming
                    landscapes.
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
                  Our Agricultural Services
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Comprehensive solutions for modern, profitable farming
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-24">
              {agriServices.map((service, index) => (
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
                        Learn More
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
        <section className="py-20 md:py-28 bg-gradient-to-br from-green-600 via-emerald-500 to-green-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                Cultivate Your Future
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Talk to our agricultural experts and discover how to grow more
                with less.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#0A0A0A] text-white font-semibold text-base hover:bg-[#1a1a1a] transition-colors shadow-2xl"
              >
                Get Expert Advice
                <ArrowRight size={20} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#22C55E] to-[#16A34A]" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
