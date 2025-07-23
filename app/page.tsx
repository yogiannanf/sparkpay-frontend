import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <CTA />
      <Features />
      <Testimonials />
      <FAQs />
      <Partners />
      <Footer />
    </main>
  );
}