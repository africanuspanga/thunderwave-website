"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

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
    slug: "top-technology-trends-for-2026",
    title: "Top Technology Trends for 2026",
    excerpt:
      "Stay ahead of the curve with our analysis of emerging technologies that will shape the business landscape.",
    category: "Technology",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    image: "/insights%20images/tech%20trends.jpg",
  },
];

export default function InsightsPreview() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#111827] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Latest Insights"
          subtitle="Stay informed with the latest technology trends and expert perspectives"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={article.slug} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -5 }}
                className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:bg-white/10 transition-colors group cursor-pointer"
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

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/insights/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold"
            >
              View All Insights
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
