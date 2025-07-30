'use client';

import { motion } from 'framer-motion';

export default function PerusahaanPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-yellow-50 to-yellow-100 py-14 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-yellow-100 px-6 md:px-14 py-10 md:py-14"
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-2">Tentang Perusahaan</h1>
          <p className="text-gray-700 text-lg">
            SparkPay dikembangkan oleh PT Naratel Solusi Digital sebagai jawaban atas kebutuhan sistem pembayaran digital yang aman, cepat, dan efisien untuk masyarakat Indonesia.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-green-300 my-8"></div>

        {/* Visi dan Misi */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🎯 Visi & Misi</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Menjadi penyedia solusi pembayaran digital terdepan di Asia Tenggara.</li>
            <li>Meningkatkan inklusi keuangan melalui teknologi yang ramah pengguna.</li>
            <li>Mendukung pelaku usaha dan UMKM dengan alat transaksi yang praktis dan efisien.</li>
          </ul>
        </section>

        {/* Nilai Perusahaan */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">💡 Nilai Perusahaan</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <li className="bg-green-50 rounded-lg px-4 py-3">🔐 Keamanan sebagai prioritas utama</li>
            <li className="bg-green-50 rounded-lg px-4 py-3">🚀 Inovasi berkelanjutan</li>
            <li className="bg-green-50 rounded-lg px-4 py-3">📱 Aksesibilitas dan kemudahan penggunaan</li>
            <li className="bg-green-50 rounded-lg px-4 py-3">🌱 Komitmen pada pertumbuhan berkelanjutan</li>
          </ul>
        </section>

        {/* Lokasi Perusahaan */}
        <section className="mb-4">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">📍 Lokasi Kantor</h2>
          <p className="text-gray-700">Gedung Graha Naratel, Jl. Kemerdekaan No.45, Jakarta Selatan, Indonesia</p>
        </section>
      </motion.div>
    </div>
  );
}
