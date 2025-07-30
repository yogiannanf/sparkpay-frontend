'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export default function DownloadPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-green-200 via-yellow-50 to-yellow-100 text-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white/90 backdrop-blur-lg px-10 py-14 rounded-3xl shadow-xl text-center border border-yellow-100"
      >
        <img
          src="/images/sparkpay.png"
          alt="SparkPay Logo"
          className="mx-auto h-16 mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Unduh Aplikasi SparkPay
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Tersedia gratis di Android & iOS. Mulai transaksi digital yang cepat dan aman sekarang juga.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Link
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            <FaGooglePlay className="text-2xl" />
            <span>Unduh di Play Store</span>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            <FaApple className="text-2xl" />
            <span>Unduh di App Store</span>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          *SparkPay akan segera tersedia di semua perangkat.
        </p>
      </motion.div>
    </main>
  );
}
