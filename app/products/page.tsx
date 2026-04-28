"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Server,
  Wifi,
  Wrench,
  Cloud,
  LayoutGrid,
  Settings,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const hardwareProducts = [
  {
    icon: Server,
    title: "Enterprise Servers",
    description:
      "High-performance servers designed for demanding business workloads, virtualization, and data-intensive applications.",
    features: [
      "Rack-mount and tower options",
      "Scalable storage configurations",
      "Redundant power supplies",
      "Remote management capabilities",
    ],
  },
  {
    icon: Wifi,
    title: "Networking Equipment",
    description:
      "Reliable networking hardware to build robust, high-speed connectivity across your organization.",
    features: [
      "Enterprise routers and switches",
      "Wireless access points",
      "Firewall appliances",
      "Network monitoring tools",
    ],
  },
  {
    icon: Wrench,
    title: "IT Infrastructure Tools",
    description:
      "Essential tools and equipment for building, maintaining, and optimizing your IT environment.",
    features: [
      "Cable management systems",
      "Rack enclosures",
      "Power distribution units",
      "Testing and diagnostic equipment",
    ],
  },
];

const softwareProducts = [
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description:
      "Cloud-based software solutions that reduce infrastructure costs while increasing accessibility and collaboration.",
    features: [
      "Cloud productivity suites",
      "Communication platforms",
      "Project management tools",
      "CRM solutions",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Enterprise Applications",
    description:
      "Comprehensive business applications designed to streamline operations and improve decision-making.",
    features: [
      "ERP systems",
      "HR management platforms",
      "Financial management tools",
      "Inventory management systems",
    ],
  },
  {
    icon: Settings,
    title: "Business Automation Tools",
    description:
      "Intelligent automation solutions that eliminate repetitive tasks and boost operational efficiency.",
    features: [
      "Workflow automation",
      "Document management",
      "Email automation",
      "Reporting and analytics dashboards",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Our Products"
          subtitle="Premium technology products to power your business"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products/" },
          ]}
        />

        {/* Hardware Section */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-xl bg-[#4FA3E3]/15 flex items-center justify-center">
                  <Server size={28} className="text-[#4FA3E3]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white">
                    Hardware
                  </h2>
                  <p className="text-[#6B7280] text-sm">
                    Enterprise-grade physical infrastructure
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hardwareProducts.map((product, index) => (
                <ScrollReveal key={product.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 md:p-8 h-full hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#4FA3E3]/15 flex items-center justify-center mb-5">
                      <product.icon size={24} className="text-[#4FA3E3]" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-xl bg-[#56CCF2]/15 flex items-center justify-center">
                  <LayoutGrid size={28} className="text-[#56CCF2]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white">
                    Software
                  </h2>
                  <p className="text-[#6B7280] text-sm">
                    Powerful digital solutions for modern operations
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {softwareProducts.map((product, index) => (
                <ScrollReveal key={product.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 md:p-8 h-full hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#56CCF2]/15 flex items-center justify-center mb-5">
                      <product.icon size={24} className="text-[#56CCF2]" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white mb-6">
                Need Help Choosing the{" "}
                <span className="text-gradient-gold">Right Products?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[#6B7280] mb-10 max-w-2xl mx-auto">
                Our team can help you identify the best hardware and software
                solutions for your specific business requirements and budget.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold"
              >
                Talk to an Expert
                <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
