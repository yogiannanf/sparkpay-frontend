'use client';

import { MessageCircle, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToActionContact() {
  return (
<section className="relative bg-white/10 backdrop-blur-md text-white py-20 px-6 md:px-16 overflow-hidden rounded-3xl shadow-2xl mt-24 mx-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-md">
          Siap Memulai dengan <span className="text-yellow-200">SparkPay</span>?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Daftar sekarang atau hubungi tim kami untuk konsultasi lebih lanjut. Kami siap membantu Anda!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="/daftar"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-yellow-100 transition duration-300 hover:scale-105"
          >
            <UserPlus className="w-5 h-5" />
            Daftar Sekarang
          </Link>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi via WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
