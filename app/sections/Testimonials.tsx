"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const testimonials = [
  {
    quote:
      "Thunderwave transformed our IT systems completely. Their team understood our needs and delivered a solution that exceeded our expectations. Our operations have never been smoother.",
    author: "Alexander Msuya",
    role: "IT Officer",
    division: "IT Services",
    rating: 5,
  },
  {
    quote:
      "Reliable, fast, and professional support. Whenever we have an issue, Thunderwave responds immediately and resolves it efficiently. They are a true technology partner.",
    author: "Ally Hashimu",
    role: "Systems Administrator",
    division: "IT Services",
    rating: 5,
  },
  {
    quote:
      "Our solar installation has cut our electricity bills by 70%. The Thunderwave team handled everything from design to commissioning with utmost professionalism. Highly recommended!",
    author: "John Sassi",
    role: "Factory Owner",
    division: "Solar Energy",
    rating: 5,
  },
  {
    quote:
      "The custom uniforms Thunderwave tailored for my boutique are exceptional quality. Their attention to detail and fabric selection advice really set them apart from the rest.",
    author: "Salehe Salum",
    role: "Fashion Boutique Owner",
    division: "Tailoring",
    rating: 5,
  },
  {
    quote:
      "From irrigation setup to crop consulting, Thunderwave has been instrumental in doubling our farm yield. Their agricultural expertise is exactly what large scale farmers need.",
    author: "Albert Mwakasege",
    role: "Large Scale Farmer",
    division: "Agriculture",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#111827] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by businesses and individuals across Tanzania"
        />

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative glass rounded-2xl p-6 md:p-8 flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C547] flex items-center justify-center shadow-lg">
                  <Quote size={14} className="text-[#0A0A0A]" />
                </div>
              </div>

              {/* Division badge */}
              <div className="flex justify-end mb-3 pt-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-full">
                  {testimonial.division}
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author - name & role only, no avatar */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-[#6B7280] text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
