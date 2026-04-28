"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const categories = ["All", "Technology", "Security", "Cloud", "Business"];

const articles = [
  {
    slug: "future-of-cloud-computing-in-tanzania",
    title: "The Future of Cloud Computing in Tanzania",
    excerpt:
      "Explore how cloud technology is transforming businesses across East Africa and what it means for your organization.",
    category: "Cloud",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image: "/insights%20images/Future%20of%20cloud%20computing.jpg",
  },
  {
    slug: "cybersecurity-essentials-for-small-businesses",
    title: "Cybersecurity Essentials for Small Businesses",
    excerpt:
      "Learn the fundamental security practices every small business should implement to protect their digital assets.",
    category: "Security",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    image: "/insights%20images/cyber%20security.jpg",
  },
  {
    slug: "why-your-business-needs-managed-it-support",
    title: "Why Your Business Needs Managed IT Support",
    excerpt:
      "Discover the benefits of professional IT support and how it can reduce costs while improving reliability.",
    category: "Business",
    date: "Dec 5, 2025",
    readTime: "4 min read",
    image: "/insights%20images/it%20support.jpg",
  },
  {
    slug: "top-technology-trends-for-2026",
    title: "Top Technology Trends for 2026",
    excerpt:
      "Stay ahead of the curve with our analysis of emerging technologies that will shape the business landscape.",
    category: "Technology",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    image: "/insights%20images/tech%20trends.jpg",
  },
  {
    slug: "building-a-resilient-network-infrastructure",
    title: "Building a Resilient Network Infrastructure",
    excerpt:
      "Best practices for designing network systems that can handle growth and maintain performance under pressure.",
    category: "Technology",
    date: "Nov 20, 2025",
    readTime: "8 min read",
    image: "/insights%20images/Network%20Infrsturucture.jpg",
  },
  {
    slug: "digital-transformation-strategies",
    title: "Digital Transformation Strategies",
    excerpt:
      "How to plan and execute a successful digital transformation initiative that delivers measurable results.",
    category: "Business",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    image: "/insights%20images/stragegy.jpg",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Insights"
          subtitle="Latest news, trends, and expert perspectives on technology"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights/" },
          ]}
        />

        {/* Articles Grid */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === "All"
                        ? "bg-[#D4AF37] text-[#0A0A0A]"
                        : "glass text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ScrollReveal key={article.slug} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:bg-white/10 transition-colors group"
                  >
                    <Link href={`/insights/${article.slug}/`} className="flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium backdrop-blur-sm">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {article.date}
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-[#D4AF37]">
                          <span>Read more</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0f172a] to-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mx-auto mb-6">
                <Tag size={28} className="text-[#D4AF37]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
                Stay <span className="text-gradient-gold">Updated</span>
              </h2>
              <p className="text-[#6B7280] mb-8">
                Subscribe to our newsletter for the latest technology insights,
                tips, and company news delivered to your inbox.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-gold px-6 py-3 rounded-xl text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
