import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#ecfdf5] via-[#d1fae5] to-white text-gray-900">
    <Hero />
    <CTA />
    <Partners />
    <Testimonials />
    <FAQs />
    <Footer />
  </main>
  );
}