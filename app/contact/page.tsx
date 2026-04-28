"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@thunderwave.co",
    href: "mailto:info@thunderwave.co",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 755 192 805",
    href: "tel:+255755192805",
  },
  {
    icon: Phone,
    label: "Phone 2",
    value: "+255 747 698 463",
    href: "tel:+255747698463",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+255 755 192 805",
    href: "https://wa.me/255755192805",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with our team for inquiries and support"
          backgroundImage="/bacground%20header%20section%20all%20pages.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact/" },
          ]}
        />

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact Form */}
              <ScrollReveal direction="left">
                <div className="glass rounded-2xl p-6 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white mb-2">
                    Send Us a <span className="text-gradient-gold">Message</span>
                  </h2>
                  <p className="text-[#6B7280] mb-8">
                    Fill out the form below and we will get back to you shortly.
                  </p>

                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+255 XXX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full btn-gold py-4 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white mb-2">
                      Contact <span className="text-gradient-gold">Information</span>
                    </h2>
                    <p className="text-[#6B7280]">
                      Reach out to us through any of the channels below.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] flex items-center justify-center shrink-0">
                          <item.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-[#6B7280] uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-white font-medium group-hover:text-[#D4AF37] transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="glass rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin size={20} className="text-[#D4AF37]" />
                      <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-white">
                        Visit Our Office
                      </h3>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-2">
                      Mikocheni, Dar es Salaam
                      <br />
                      Warioba Road
                      <br />
                      Opposite Laurent International Primary School
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <Clock size={14} />
                      <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden glass border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9!2d39.25!3d-6.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDYnMTIuMCJTIDM5wrAxNScwMC4wIkU!5e0!3m2!1sen!2stz!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thunderwave Location"
                  className="w-full"
                />
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
