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
      <nav className="w-full px-6 md:px-16 py-5 flex justify-between items-center bg-white/70 backdrop-blur-md z-20 shadow-sm">
        <div className="h-10 md:h-12">
          <img
            src="/images/sparkpay.png"
            alt="SparkPay Logo"
            className="h-full object-contain"
          />
        </div>
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
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li><Link href="/navbar/produk" className="hover:text-green-600">Produk</Link></li>
          <li><Link href="/navbar/perusahaan" className="hover:text-green-600">Perusahaan</Link></li>
          <li><Link href="/navbar/faq" className="hover:text-green-600">FAQ</Link></li>
          <li>
            <Link
              href="/navbar/download"
              className="bg-green-200 hover:bg-green-300 text-green-900 font-semibold px-4 py-2 rounded-full shadow transition"
            >
              Download
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden w-full px-6 space-y-4 text-gray-700 font-medium bg-white shadow py-4">
          <li><Link href="/navbar/produk" className="block hover:text-green-600">Produk</Link></li>
          <li><Link href="/navbar/perusahaan" className="block hover:text-green-600">Perusahaan</Link></li>
          <li><Link href="/navbar/faq" className="block hover:text-green-600">FAQ</Link></li>
          <li>
            <Link
              href="/navbar/download"
              className="block bg-green-200 hover:bg-green-300 text-green-900 font-semibold px-4 py-2 rounded-full shadow text-center"
            >
              Download
            </Link>
          </li>
        </ul>
      )}

      {/* ===== Hero Section ===== */}
      <section className="bg-white w-full pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.6 }}
            className="text-center md:text-left flex-1"
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-green-900 mb-4">
              Terima Pembayaran Online <br />
              <span className="text-green-700">Lebih Cepat & Aman</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Payment Gateway lengkap untuk bisnis Anda: VA, e-Wallet, QRIS,
              dan kartu kredit dalam satu integrasi API.
            </p>
            <a
              href="/navbar/download"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-700 transition"
            >
              Download Sekarang
            </a>
          </motion.div>

          {/* Gambar Kanan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.6 }}
            className="flex justify-center flex-1"
          >
            <Image
              src="/images/hero-phone.png"
              alt="Mockup SparkPay"
              width={360}
              height={720}
              className="w-full max-w-[300px] md:max-w-[360px] h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>
    </header>
  );
}
