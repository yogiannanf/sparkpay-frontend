'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white overflow-hidden">
      {/* ===== Navbar ===== */}
      <nav className="w-full px-6 md:px-16 py-5 flex justify-between items-center bg-white/70 backdrop-blur-md z-20 shadow-sm relative">
        <div className="text-xl md:text-2xl font-bold text-green-600">SparkPay</div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li><Link href="/produk" className="hover:text-green-600">Produk</Link></li>
          <li><Link href="/perusahaan" className="hover:text-green-600">Perusahaan</Link></li>
          <li><Link href="/faq" className="hover:text-green-600">FAQ</Link></li>
          <li>
            <Link
              href="/download"
              className="bg-green-200 hover:bg-green-300 text-green-900 font-semibold px-4 py-2 rounded-full shadow transition"
            >
              Download
            </Link>
          </li>
        </ul>
      </nav>

      {/* ===== Hero Content ===== */}
      <section className="relative z-10 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-green-700"
            >
              Semua Bisa{' '}
              <span className="text-emerald-500">Transfer Gratis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-gray-700 text-lg md:text-xl max-w-md"
            >
              Transfer antar bank, bayar tagihan, dan top-up e-wallet kini cukup dari satu aplikasi: SparkPay.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <Link
                href="/download"
                className="bg-white hover:bg-emerald-100 text-green-700 font-semibold px-6 py-3 rounded-full text-sm md:text-base transition shadow-lg"
              >
                Download Sekarang
              </Link>
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
              width={400}
              height={700}
              className="rounded-xl shadow-2xl w-full max-w-[350px] md:max-w-[400px] h-auto"
            />
          </motion.div>
        </div>
      </section>
    </header>
  );
}
