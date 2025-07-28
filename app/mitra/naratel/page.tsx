'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NaratelPage() {
  return (
    <div className="min-h-screen px-6 py-10 md:py-16 flex justify-center items-start bg-gradient-to-b from-green-100 via-yellow-50 to-yellow-200">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-green-200 relative">

        {/* Tombol Kembali */}
        <Link
          href="/#mitra"
          className="absolute -top-6 left-4 text-green-800 hover:text-green-600 text-sm flex items-center gap-1 transition"
        >
          <ArrowLeft size={16} />
          Kembali
        </Link>

        <img
          src="/naratel-logo.svg"
          alt="Logo Kapten Naratel"
          className="w-32 h-auto mx-auto mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
          Kapten Naratel
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Kapten Naratel adalah layanan internet berbasis fiber optik dari PT Naraya Telematika
          yang berbasis di Malang. Mengusung semangat lokal, layanan ini menghadirkan internet
          cepat, stabil, dan terjangkau bagi masyarakat Malang Raya dan sekitarnya.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Paket Layanan</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>5 Mbps – Rp120.000/bulan</li>
            <li>10 Mbps – Rp175.000/bulan</li>
            <li>15 Mbps – Rp235.000/bulan</li>
            <li>20 Mbps – Rp325.000/bulan (instalasi Rp220.000)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">4 Pilar Perjuangan</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Internet murah dan berkualitas</li>
            <li>Pendidikan cakap internet</li>
            <li>Dukungan terhadap UMKM lokal</li>
            <li>Program sosial kemasyarakatan</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Testimoni</h2>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800 mb-4">
            “Internetnya lancar dan terjangkau. Cocok untuk mahasiswa dan keluarga!”
          </blockquote>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
            “Sudah pakai hampir 2 tahun, pelayanannya cepat dan komunikatif.”
          </blockquote>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Alamat Kantor</h2>
          <p className="text-gray-700">
            Ruko Taman Borobudur Indah Kav.33, Kota Malang, Jawa Timur
          </p>
        </section>

        <div className="text-center">
          <Link
            href="https://kaptennaratel.com"
            target="_blank"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Kunjungi Situs Resmi
          </Link>
        </div>
      </div>
    </div>
  );
}
