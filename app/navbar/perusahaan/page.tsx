'use client';

import { motion } from 'framer-motion';

export default function PerusahaanPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-green-200 via-yellow-50 to-yellow-100 text-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center bg-white/90 backdrop-blur-sm px-8 py-12 rounded-3xl shadow-lg border border-yellow-100"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Tentang Perusahaan
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          SparkPay dikembangkan oleh <strong>PT Naratel</strong> sebagai solusi pembayaran digital
          yang <span className="text-green-600 font-semibold">aman</span> dan{' '}
          <span className="text-green-600 font-semibold">cepat</span>.
        </p>
      </motion.div>
    </main>
  );
}
