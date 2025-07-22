'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative bg-white">
      {/* ===== Navbar ===== */}
      <nav className="w-full px-6 md:px-16 py-4 flex justify-between items-center border-b border-gray-200 bg-white z-10">
        <div className="text-xl font-bold text-green-600">SparkPay</div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link href="#produk" className="hover:text-green-600">Produk</Link></li>
          <li><Link href="#perusahaan" className="hover:text-green-600">Perusahaan</Link></li>
          <li><Link href="#faq" className="hover:text-green-600">FAQ</Link></li>
          <li><Link href="#download" className="hover:text-green-600">Download</Link></li>
        </ul>
      </nav>

      {/* ===== Background Shape (Bubble) ===== */}
      <div className="absolute top-[-150px] right-[-150px] md:right-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-300 to-yellow-200 opacity-30 rounded-full blur-3xl -z-10"></div>

      {/* ===== Hero Section ===== */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Semua bisa <span className="text-green-600">transfer gratis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-gray-600 text-lg md:text-xl"
            >
              Transfer antar bank, bayar tagihan, hingga top-up e-wallet cukup satu aplikasi SparkPay.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <a
                href="#download"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm md:text-base transition shadow-md"
              >
                Download Sekarang
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/hero-phone.png"
              alt="Mockup SparkPay"
              width={350}
              height={700}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
    </header>
  );
}
