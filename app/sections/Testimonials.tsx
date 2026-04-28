"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const testimonials = [
  {
    quote:
      "Thunderwave transformed our IT systems completely. Their team understood our needs and delivered a solution that exceeded our expectations. Our operations have never been smoother.",
    author: "Business Owner",
    role: "Manufacturing Company",
    rating: 5,
  },
  {
    quote:
      "Reliable, fast, and professional support. Whenever we have an issue, Thunderwave responds immediately and resolves it efficiently. They are a true technology partner.",
    author: "Company Manager",
    role: "Logistics Firm",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#111827] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by businesses across Tanzania"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative glass rounded-2xl p-8 md:p-10"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C547] flex items-center justify-center shadow-lg">
                    <Quote size={18} className="text-[#0A0A0A]" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-[#6B7280] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
