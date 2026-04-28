"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  DollarSign,
  Clock,
  Cpu,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Our team brings years of hands-on experience across diverse technology domains. We have successfully delivered projects for businesses of all sizes, from startups to established enterprises, building a track record of excellence.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Solutions",
    description:
      "We don't believe in one-size-fits-all. Every solution we design is tailored to your specific business needs, goals, and budget. We take the time to understand your challenges before recommending the right technology.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Quality IT services shouldn't break the bank. We offer competitive pricing without compromising on quality, ensuring you get maximum value for your investment with transparent cost structures.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description:
      "When technology issues arise, every minute counts. Our support team is committed to rapid response times, ensuring minimal downtime and quick resolution of any problems that may affect your operations.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    description:
      "We stay at the forefront of technological advancement. Our solutions leverage the latest tools, frameworks, and methodologies to ensure your business remains competitive in a rapidly evolving digital landscape.",
  },
];

const stats = [
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 100, suffix: "%", label: "Commitment" },
  { value: 6, suffix: "+", label: "Core Services" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Why Choose Us"
          subtitle="Discover what makes Thunderwave the right technology partner"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Why Us", href: "/why-us/" },
          ]}
        />

        {/* Reasons */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  The Thunderwave Advantage
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Five compelling reasons to partner with us for your technology needs
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              {reasons.map((reason, index) => (
                <ScrollReveal key={reason.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-white/10 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] flex items-center justify-center shrink-0">
                      <reason.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-white mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-strong rounded-2xl p-6 md:p-8 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-[family-name:var(--font-poppins)] mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-[#6B7280]">{stat.label}</div>
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
                Ready to Experience the{" "}
                <span className="text-gradient-gold">Difference?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[#6B7280] mb-10 max-w-2xl mx-auto">
                Join the growing list of businesses that trust Thunderwave for
                their technology needs. Let us show you what makes us different.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold"
              >
                Start Your Journey
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
