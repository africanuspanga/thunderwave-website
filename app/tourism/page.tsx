"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  TreePine,
  Waves,
  Mountain,
  Flame,
  Eye,
  Binoculars,
  Landmark,
  Map,
  Camera,
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  Car,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const parks = [
  {
    icon: TreePine,
    title: "Mikumi National Park",
    desc: "Perfect for short trips from Dar es Salaam, Mikumi offers incredible wildlife viewing with lions, elephants, giraffes, and zebras across open savannah landscapes. Often compared to the Serengeti, it is ideal for quick yet rewarding safari experiences.",
    image: "/Tourism/mikumi.jpg",
    highlights: ["Lions & elephants", "Giraffes & zebras", "Open savannah", "Short trips from Dar"],
    color: "#14B8A6",
  },
  {
    icon: Waves,
    title: "Nyerere National Park",
    desc: "One of Africa's largest protected areas, Nyerere offers unique experiences like boat safaris along the Rufiji River, where you will encounter hippos, crocodiles, and diverse birdlife in a truly wild setting.",
    image: "/Tourism/selous-lion-nyerere.jpg",
    highlights: ["Boat safaris", "Rufiji River", "Hippos & crocodiles", "Diverse birdlife"],
    color: "#0D9488",
  },
  {
    icon: Waves,
    title: "Saadani National Park",
    desc: "The only park in Tanzania where the beach meets the bush. Enjoy safari drives and relax by the Indian Ocean — a rare combination of wildlife and coastal beauty.",
    image: "/Tourism/simply-saadani.jpg",
    highlights: ["Beach & bush", "Indian Ocean views", "Safari drives", "Coastal wildlife"],
    color: "#2DD4BF",
  },
  {
    icon: Mountain,
    title: "Ruaha National Park",
    desc: "Tanzania's largest national park, known for its rugged landscapes and massive elephant and lion populations. A hidden gem for travelers seeking raw, uncrowded safari experiences.",
    image: "/Tourism/ruaha.jpg",
    highlights: ["Largest park in Tanzania", "Massive elephant herds", "Uncrowded safaris", "Rugged landscapes"],
    color: "#14B8A6",
  },
  {
    icon: Landmark,
    title: "Arusha National Park",
    desc: "A scenic gem near Arusha, offering walking safaris, canoeing, and views of Mount Meru — perfect for a relaxed but adventurous experience.",
    image: "/Tourism/arusha-national-park.jpg",
    highlights: ["Walking safaris", "Canoeing", "Mount Meru views", "Scenic landscapes"],
    color: "#0D9488",
  },
  {
    icon: TreePine,
    title: "Tarangire National Park",
    desc: "Famous for its giant baobab trees and large elephant herds, Tarangire delivers stunning landscapes and incredible wildlife encounters.",
    image: "/Tourism/tarangire.jpg",
    highlights: ["Giant baobab trees", "Large elephant herds", "Stunning landscapes", "Incredible wildlife"],
    color: "#2DD4BF",
  },
  {
    icon: Eye,
    title: "Lake Manyara National Park",
    desc: "Known for its tree-climbing lions and flamingo-filled lake, this park offers a unique safari experience in a compact area.",
    image: "/Tourism/manyara.jpg",
    highlights: ["Tree-climbing lions", "Flamingo-filled lake", "Compact area", "Unique safari"],
    color: "#14B8A6",
  },
  {
    icon: Camera,
    title: "Serengeti National Park",
    desc: "Witness the world-famous Great Migration, where over 1.5 million wildebeest and zebras cross the plains in one of nature's greatest spectacles.",
    image: "/Tourism/safari-8-days.jpg",
    highlights: ["Great Migration", "1.5M wildebeest", "Big Five viewing", "Endless plains"],
    color: "#0D9488",
  },
  {
    icon: Map,
    title: "Ngorongoro Conservation Area",
    desc: "A UNESCO World Heritage Site featuring the Ngorongoro Crater — home to one of the highest concentrations of wildlife in Africa.",
    image: "/Tourism/rhino-ngorongoro.jpg",
    highlights: ["UNESCO Heritage Site", "Ngorongoro Crater", "High wildlife density", "Big Five guaranteed"],
    color: "#2DD4BF",
  },
];

const whyUs = [
  {
    icon: Users,
    title: "Expert Local Guides",
    desc: "Deep knowledge of Tanzania's wildlife, culture, and terrain.",
  },
  {
    icon: Star,
    title: "Customized Packages",
    desc: "Safari experiences tailored to your schedule, budget, and interests.",
  },
  {
    icon: Car,
    title: "Comfortable Transport",
    desc: "Reliable 4x4 safari vehicles and quality accommodation options.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    desc: "Unforgettable experiences with safety and professionalism at the core.",
  },
];

const safariPackages = [
  {
    title: "1–2 Day Mikumi Safari",
    desc: "Perfect weekend escape from Dar es Salaam. Spot lions, elephants, and zebras in open savannah.",
    image: "/Tourism/safari-2-days.jpg",
    from: "From Dar es Salaam",
    duration: "1–2 Days",
  },
  {
    title: "3–5 Day Southern Circuit",
    desc: "Explore Mikumi and Nyerere National Parks with boat safaris, big game, and wild landscapes.",
    image: "/Tourism/safari-3-days.jpg",
    from: "Southern Tanzania",
    duration: "3–5 Days",
  },
  {
    title: "5–7 Day Northern Circuit",
    desc: "The ultimate safari — Serengeti, Ngorongoro, and Tarangire in one unforgettable journey.",
    image: "/Tourism/safari-5-days.jpg",
    from: "Northern Tanzania",
    duration: "5–7 Days",
  },
];

const logos = [
  { src: "/Tourism/recommednation logos copy/TripAdvisor_Logo.svg.png", alt: "TripAdvisor" },
  { src: "/Tourism/recommednation logos copy/google-reviews-logo.png", alt: "Google Reviews" },
  { src: "/Tourism/recommednation logos copy/trust-pilot-stacked-black.svg", alt: "Trustpilot" },
  { src: "/Tourism/recommednation logos copy/Safari-Booking-Logo.png", alt: "Safari Booking" },
  { src: "/Tourism/recommednation logos copy/GetYourGuide_2018.webp", alt: "GetYourGuide" },
];

const testimonials = [
  {
    quote: "The Serengeti safari was the highlight of our entire year. Thunderwave handled every detail perfectly — from the lodge to the guide. Seeing the Great Migration up close was a dream come true.",
    author: "John MacAllen",
    role: "Adventure Traveler",
    country: "USA",
    rating: 5,
  },
  {
    quote: "Un'esperienza indimenticabile in Tanzania. The Ngorongoro Crater is absolutely breathtaking. Our guide was incredibly knowledgeable and passionate about wildlife. Highly recommended!",
    author: "Marco Rossi",
    role: "Wildlife Photographer",
    country: "Italy",
    rating: 5,
  },
  {
    quote: "Die Safari durch den Ngorongoro-Krater war atemberaubend. Thunderwave organized everything flawlessly. The accommodations were excellent and the 4x4 vehicle was very comfortable.",
    author: "Hans Mueller",
    role: "Nature Enthusiast",
    country: "Germany",
    rating: 5,
  },
  {
    quote: "タンザニアのサファリは人生で最高の経験でした。 Mikumi National Park was incredible — we saw lions hunting within the first hour! The team was professional, friendly, and truly cared about our experience.",
    author: "Yuki Tanaka",
    role: "Solo Traveler",
    country: "Japan",
    rating: 5,
  },
  {
    quote: "A truly magical experience from start to finish. The Ruaha safari was beyond anything we imagined. Remote, wild, and absolutely stunning. Thunderwave knows how to create unforgettable memories.",
    author: "Sarah Williams",
    role: "Family Traveler",
    country: "United Kingdom",
    rating: 5,
  },
  {
    quote: "Une aventure africaine absolument spectaculaire. From Saadani's beach-bush combo to the elephant herds of Tarangire, every day was extraordinary. Merci Thunderwave for this amazing journey!",
    author: "Pierre Dubois",
    role: "Tourism Blogger",
    country: "France",
    rating: 5,
  },
];

export default function TourismPage() {
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
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Tourism"
          subtitle="Explore Tanzania's wild beauty like never before"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tourism", href: "/tourism/" },
          ]}
        />

        {/* Brand Banner */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-10 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="inline-flex flex-col items-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 md:px-12 md:py-8">
                  <Image
                    src="/Tourism/Masai%20Amazing%20Safaris.png"
                    alt="Masai Amazing Safaris"
                    width={320}
                    height={100}
                    className="object-contain h-16 md:h-20 w-auto"
                  />
                </div>
                <p className="text-[#6B7280] text-sm mt-3">
                  Authentic Tanzania Safari Experiences
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 bg-[#0A0A0A]">
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
                      src="/Tourism/safari-8-days.jpg"
                      alt="Tanzania Safari"
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
                    Explore Tanzania's{" "}
                    <span className="text-gradient-gold">Wild Beauty</span>
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    From the endless plains of the Serengeti National Park to the
                    breathtaking crater of Ngorongoro Conservation Area, experience
                    unforgettable safari adventures across Tanzania's most iconic
                    destinations.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Join us for expertly guided safari experiences across Tanzania's
                    top national parks — where wildlife roams free, landscapes are
                    untouched, and every moment becomes a story worth telling.
                  </p>
                  <Link
                    href="/contact/"
                    className="btn-gold px-8 py-4 rounded-xl text-sm md:text-base inline-block text-center"
                  >
                    Book Your Safari Now
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Parks Grid */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  Discover Tanzania's Top Safari Destinations
                </h2>
                <p className="text-[#6B7280] max-w-3xl mx-auto">
                  Tanzania is one of Africa's premier safari destinations, home to
                  diverse ecosystems, abundant wildlife, and world-famous national
                  parks. Our curated safari experiences take you deep into the heart
                  of nature.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parks.map((park, index) => (
                <ScrollReveal key={park.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-colors group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={park.image}
                        alt={park.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                      <div
                        className="absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${park.color}25` }}
                      >
                        <park.icon size={20} style={{ color: park.color }} />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)] text-white mb-2">
                        {park.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                        {park.desc}
                      </p>
                      <ul className="space-y-1.5">
                        {park.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-xs text-white/70"
                          >
                            <CheckCircle2
                              size={12}
                              className="text-[#D4AF37] shrink-0"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  Why Choose Us
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  We make your safari experience seamless, safe, and truly unforgettable
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 md:p-8 text-center h-full hover:bg-white/10 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] flex items-center justify-center mx-auto mb-5">
                      <item.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Safari Packages */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  Popular Safari Options
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Choose from our most requested packages, or let us build a custom one for you
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safariPackages.map((pkg, index) => (
                <ScrollReveal key={pkg.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-colors border-t-4 border-[#D4AF37] group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider bg-[#D4AF37] px-2 py-1 rounded-full">
                          {pkg.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-[#6B7280] mb-2">{pkg.from}</p>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] text-white mb-3">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                        {pkg.desc}
                      </p>
                      <Link
                        href="/contact/"
                        className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all group text-sm"
                      >
                        Book This Safari
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendation Logos */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
                  Recommended By
                </p>
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <ScrollReveal key={logo.alt} delay={index * 0.1}>
                  <div className="relative h-10 md:h-12 w-32 md:w-40 opacity-100">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#111827] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-gradient-gold mb-4">
                  What Travelers Say
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Reviews from safari guests around the world
                </p>
              </div>
            </ScrollReveal>

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
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative glass rounded-2xl p-6 md:p-8 flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="absolute -top-3 left-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C547] flex items-center justify-center shadow-lg">
                      <Quote size={14} className="text-[#0A0A0A]" />
                    </div>
                  </div>

                  <div className="flex justify-end mb-3 pt-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-full">
                      {t.country}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[#D4AF37] fill-[#D4AF37]"
                      />
                    ))}
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold text-sm">
                      {t.author}
                    </p>
                    <p className="text-[#6B7280] text-xs">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                Your Adventure Starts Here
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Ready to explore Tanzania's breathtaking national parks and witness
                wildlife up close? Let us plan your perfect safari experience today.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-sm text-white/60 mb-8">
                Limited slots available — secure your safari today!
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#0A0A0A] text-white font-semibold text-base hover:bg-[#1a1a1a] transition-colors shadow-2xl"
              >
                Book Now
                <ArrowRight size={20} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#14B8A6] to-[#0D9488]" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
