import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import AboutShort from "./sections/AboutShort";
import DivisionHighlights from "./sections/DivisionHighlights";
import Partners from "./sections/Partners";
import WhyUs from "./sections/WhyUs";
import ProductsPreview from "./sections/ProductsPreview";
import Testimonials from "./sections/Testimonials";
import InsightsPreview from "./sections/InsightsPreview";
import CTASection from "./sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutShort />
        <DivisionHighlights />
        <Partners />
        <WhyUs />
        <ProductsPreview />
        <Testimonials />
        <InsightsPreview />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
