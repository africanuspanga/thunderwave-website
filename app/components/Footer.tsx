"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about/" },
    { label: "Our Team", href: "/about/" },
    { label: "Careers", href: "/contact/" },
    { label: "Contact", href: "/contact/" },
  ],
  services: [
    { label: "Software Installation", href: "/services/" },
    { label: "IT Support", href: "/services/" },
    { label: "Cybersecurity", href: "/services/" },
    { label: "Cloud Computing", href: "/services/" },
    { label: "Software Development", href: "/services/" },
    { label: "Network Infrastructure", href: "/services/" },
  ],
  products: [
    { label: "Enterprise Servers", href: "/products/" },
    { label: "Networking Equipment", href: "/products/" },
    { label: "SaaS Platforms", href: "/products/" },
    { label: "Business Automation", href: "/products/" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#2F80ED] via-[#D4AF37] to-[#56CCF2]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <ScrollReveal className="lg:col-span-1">
            <div>
              <Image
                src="/Thunderwave footer logo.png"
                alt="Thunderwave"
                width={220}
                height={70}
                className="h-16 md:h-20 w-auto object-contain mb-6"
              />
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                Delivering innovative, secure, and scalable technology solutions
                that help businesses grow and stay protected.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:info@thunderwave.co"
                  className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#4FA3E3] transition-colors"
                >
                  <Mail size={16} className="text-[#D4AF37]" />
                  info@thunderwave.co
                </a>
                <a
                  href="tel:+255755192805"
                  className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#4FA3E3] transition-colors"
                >
                  <Phone size={16} className="text-[#D4AF37]" />
                  +255 755 192 805
                </a>
                <div className="flex items-start gap-3 text-sm text-[#6B7280]">
                  <MapPin size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>
                    Mikocheni, Dar es Salaam
                    <br />
                    Warioba Road
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Company Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="text-white font-semibold font-[family-name:var(--font-poppins)] mb-5">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#4FA3E3] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Services Links */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-white font-semibold font-[family-name:var(--font-poppins)] mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#4FA3E3] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Products Links */}
          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="text-white font-semibold font-[family-name:var(--font-poppins)] mb-5">
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#4FA3E3] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            &copy; {new Date().getFullYear()} Thunderwave Company Limited. All
            rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#D4AF37] transition-colors group"
          >
            Back to top
            <span className="p-1.5 rounded-full border border-[#6B7280] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
