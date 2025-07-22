'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-400 text-white py-24 px-6 md:px-16 text-center overflow-hidden rounded-3xl shadow-xl mt-12 mx-4">
      {/* Efek latar blur hijau-kuning */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-30 blur-[100px] w-[120%] h-full bg-yellow-300 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-md"
        >
          Kenali <span className="text-yellow-200">SparkPay</span> Lebih Dekat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-lg md:text-xl text-white/90"
        >
          Lihat bagaimana SparkPay membantumu mengelola uang, membayar, dan mengirim dana dengan mudah dan cepat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#fitur"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-yellow-100 transition duration-300 hover:scale-105"
          >
            Jelajahi Fitur Kami <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}