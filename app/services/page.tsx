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
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    icon: Monitor,
    title: "Software Installation",
    shortDesc:
      "Seamless installation and configuration of business-critical software systems.",
    fullDesc:
      "We handle the complete lifecycle of software deployment, from initial setup and configuration to updates and integration with your existing systems. Our team ensures minimal disruption to your operations while maximizing software performance and compatibility.",
    image: "/IT engineer installing system.jpg",
    features: [
      "Full deployment and setup",
      "System configuration",
      "Regular updates and patches",
      "Third-party integration",
      "User training and documentation",
    ],
    color: "#4FA3E3",
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support",
    shortDesc:
      "Reliable technical support to keep your operations running without interruptions.",
    fullDesc:
      "Our dedicated support team is available around the clock to resolve any technical issues. From troubleshooting hardware problems to software glitches, we provide rapid response times and effective solutions to keep your business running smoothly.",
    image: "/IT Support.jpg",
    features: [
      "24/7 technical support",
      "Remote and on-site assistance",
      "Hardware troubleshooting",
      "Software issue resolution",
      "Preventive maintenance",
    ],
    color: "#56CCF2",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    shortDesc:
      "Protect your business from threats with advanced security solutions.",
    fullDesc:
      "In today's digital landscape, security is paramount. We implement comprehensive cybersecurity measures including firewalls, threat monitoring, vulnerability assessments, and employee training to safeguard your sensitive data and protect against evolving cyber threats.",
    image: "/cybersecurity hacker protection.jpg",
    features: [
      "Firewall configuration",
      "Real-time threat monitoring",
      "Risk assessment and audits",
      "Data encryption",
      "Security awareness training",
    ],
    color: "#D4AF37",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    shortDesc:
      "Scalable cloud solutions for storage, collaboration, and business continuity.",
    fullDesc:
      "Leverage the power of the cloud with our tailored solutions. We help businesses migrate to cloud environments, implement cloud-based collaboration tools, and establish robust backup and disaster recovery systems for uninterrupted business continuity.",
    image: "/Cloud Computing.jpg",
    features: [
      "Cloud migration services",
      "Cloud hosting solutions",
      "Automated backup systems",
      "Disaster recovery planning",
      "Collaboration tools setup",
    ],
    color: "#4FA3E3",
  },
  {
    icon: Code,
    title: "Software Development",
    shortDesc:
      "Custom-built systems tailored to your business needs.",
    fullDesc:
      "When off-the-shelf software doesn't meet your unique requirements, our development team builds custom solutions from the ground up. From web applications and mobile apps to enterprise systems, we create software that aligns perfectly with your business processes.",
    image: "/software developement.jpg",
    features: [
      "Web application development",
      "Mobile app development",
      "Enterprise system design",
      "API integration",
      "Ongoing maintenance and support",
    ],
    color: "#56CCF2",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    shortDesc:
      "Design and deployment of secure, high-performance network systems.",
    fullDesc:
      "A robust network is the backbone of modern business. We design, implement, and optimize network infrastructures that deliver high performance, reliability, and security. From LAN/WAN setup to router and switch configuration, we ensure your connectivity meets demanding business requirements.",
    image: "/network cables infrastructure.jpg",
    features: [
      "LAN/WAN design and setup",
      "Router and switch configuration",
      "Network optimization",
      "Wireless network deployment",
      "Network security implementation",
    ],
    color: "#D4AF37",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Our Services"
          subtitle="Comprehensive IT solutions for every business need"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
          ]}
        />

        {/* Services List */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <ScrollReveal
                    direction={index % 2 === 0 ? "left" : "right"}
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

                  {/* Content */}
                  <ScrollReveal
                    direction={index % 2 === 0 ? "right" : "left"}
                    delay={0.1}
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
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#2F80ED] via-[#4FA3E3] to-[#56CCF2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                Need a Custom Service?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Get in touch with our team and let us build the perfect IT solution for your business.
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
