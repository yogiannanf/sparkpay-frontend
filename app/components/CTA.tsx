'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToActionContact() {
  return (
    <section className="relative bg-white/10 backdrop-blur-md text-white py-20 px-6 md:px-16 overflow-hidden rounded-3xl shadow-2xl mt-24 mx-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
          Siap Memulai dengan <span className="text-yellow-200">SparkPay</span>?
        </h2>
        <p className="text-lg md:text-xl text-white drop-shadow-sm mb-10">
          Hubungi tim kami untuk konsultasi lebih lanjut. Kami siap membantu Anda!
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition duration-300 hover:scale-105 w-fit mx-auto shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Hubungi via WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
