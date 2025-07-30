'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NgomongoPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-yellow-50 to-yellow-100 py-14 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-yellow-100 px-6 md:px-14 py-10 md:py-14"
      >
        {/* Tombol kembali */}
        <Link
          href="/#mitra"
          className="mb-6 inline-flex items-center text-green-800 hover:text-green-700 transition text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Mitra
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-2">Ngomongo</h1>
            <p className="text-gray-700 text-lg">
              Platform komunikasi cerdas lokal berbasis suara dan AI, mendukung interaksi bisnis, edukasi, dan layanan publik.
            </p>
          </div>
          <img
            src="/images/ngomongo.png"
            alt="Ngomongo Logo"
            className="w-28 h-28 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-green-300 my-8"></div>

        {/* Fitur */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🔍 Fitur Unggulan</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <li className="bg-green-50 rounded-lg px-4 py-3">🎙️ Voice-to-Text Bahasa Indonesia</li>
            <li className="bg-green-50 rounded-lg px-4 py-3">🤖 Asisten Virtual Meeting</li>
            <li className="bg-green-50 rounded-lg px-4 py-3">📲 Integrasi WhatsApp & Telegram</li>
            <li className="bg-green-50 rounded-lg px-4 py-3">📊 Analisis Data Percakapan</li>
          </ul>
        </section>

        {/* Manfaat */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">✅ Manfaat untuk Bisnis dan Edukasi</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Meningkatkan efisiensi komunikasi tim</li>
            <li>Mempermudah pencatatan notulensi otomatis</li>
            <li>Mendukung guru dan siswa dalam pembelajaran daring</li>
          </ul>
        </section>

        {/* Testimoni */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">💬 Testimoni Pengguna</h2>
          <div className="space-y-4">
            <blockquote className="bg-white border-l-4 border-green-600 pl-4 py-2 text-gray-800 italic shadow-sm">
              “Ngomongo membantu saya mencatat semua isi rapat secara otomatis tanpa repot.”
            </blockquote>
            <blockquote className="bg-white border-l-4 border-green-600 pl-4 py-2 text-gray-800 italic shadow-sm">
              “Solusi lokal yang powerful dan mudah dipakai. Keren banget!”
            </blockquote>
          </div>
        </section>

        {/* Lokasi */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">📍 Alamat Kantor</h2>
          <p className="text-gray-700">Jl. Veteran No.3A, Kota Malang, Jawa Timur</p>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://ngomongo.id"
            target="_blank"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg font-medium transition"
          >
            Kunjungi Situs Ngomongo
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
