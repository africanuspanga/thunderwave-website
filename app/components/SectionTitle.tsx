"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <ScrollReveal>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] leading-tight ${
            light ? "text-white" : "text-gradient-gold"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.15}>
          <p
            className={`mt-4 text-base md:text-lg max-w-2xl ${
              centered ? "mx-auto" : ""
            } ${light ? "text-white/80" : "text-[#6B7280]"}`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.2}>
        <div
          className={`mt-6 flex items-center gap-2 ${
            centered ? "justify-center" : ""
          }`}
        >
          <div className="h-1 w-12 rounded-full bg-[#D4AF37]" />
          <div className="h-1 w-3 rounded-full bg-[#4FA3E3]" />
          <div className="h-1 w-3 rounded-full bg-[#56CCF2]" />
        </div>
      </ScrollReveal>
    </div>
  );
}
