'use client';

import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ForWhom from './components/ForWhom';
import Benefits from './components/Benefits';
import Integration from './components/Integration';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="bg-spark-gradient text-gray-900">
      <Hero />
      <HowItWorks />
      <Features />
      <ForWhom />
      <Benefits />
      <Integration />
      <Testimonials />
      <Pricing />
      <CTA />
      <Partners />
      <Footer />
    </main>
  );
}
