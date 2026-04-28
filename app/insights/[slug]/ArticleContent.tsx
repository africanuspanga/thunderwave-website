"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, Share2, Bookmark } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ScrollReveal from "../../components/ScrollReveal";

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Article Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/bacground%20header%20section%20all%20pages.jpg)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/20 to-[#0A0A0A]/50" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <Link
                href="/insights/"
                className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#D4AF37] transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Insights
              </Link>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium">
                  {article.category}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight mb-6">
                {article.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-6 text-sm text-[#6B7280]">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Image */}
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden mb-12 aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="space-y-6">
              {article.content.map((paragraph, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <p className="text-[#9CA3AF] leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Tags & Share */}
            <ScrollReveal>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Tag size={16} className="text-[#D4AF37]" />
                    <span className="text-sm text-[#6B7280]">{article.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-white/70 hover:bg-white/10 transition-colors">
                      <Share2 size={16} />
                      Share
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-white/70 hover:bg-white/10 transition-colors">
                      <Bookmark size={16} />
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Related Articles CTA */}
            <ScrollReveal>
              <div className="mt-12 text-center">
                <Link
                  href="/insights/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold"
                >
                  <ArrowLeft size={18} />
                  Browse All Articles
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
