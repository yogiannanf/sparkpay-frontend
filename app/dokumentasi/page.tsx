'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DokumentasiPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-yellow-50 to-yellow-100 py-14 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-yellow-200 px-6 md:px-14 py-10 md:py-14"
      >
        {/* Tombol Kembali */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-green-700 hover:text-green-600 transition text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Link>

        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Dokumentasi API SparkPay
        </h1>

        {/* Autentikasi */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">🔐 Autentikasi</h2>
          <p className="text-gray-700 mb-2">
            Semua permintaan API membutuhkan header{' '}
            <code className="bg-green-100 px-1 rounded">Authorization</code> menggunakan token Bearer Anda.
          </p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
          </pre>
        </section>

        {/* Transfer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">💸 Endpoint Transfer</h2>
          <p className="text-gray-700 mb-2">Untuk melakukan transfer dana ke nomor tujuan:</p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`POST /api/v1/transfer
Host: api.sparkpay.com
Content-Type: application/json

{
  "recipient": "081234567890",
  "amount": 100000,
  "note": "Pembayaran"
}`}
          </pre>
        </section>

        {/* Cek Status */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">📊 Cek Status Transaksi</h2>
          <p className="text-gray-700 mb-2">Cek status transaksi berdasarkan ID:</p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`GET /api/v1/transaction/:id
Authorization: Bearer YOUR_API_KEY`}
          </pre>
        </section>

        {/* Webhook */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">📁 Webhook (Opsional)</h2>
          <p className="text-gray-700 mb-2">Kami akan mengirim notifikasi otomatis ke endpoint webhook Anda ketika status transaksi berubah:</p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`POST /your/webhook/url

{
  "transaction_id": "TRX123456",
  "status": "success",
  "received_at": "2025-07-29T12:00:00Z"
}`}
          </pre>
        </section>

        {/* Penutup */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Dokumentasi lengkap dapat disediakan sesuai kebutuhan integrasi Anda.
          </p>
          <Link
            href="mailto:support@sparkpay.com"
            className="inline-block px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Hubungi Tim Teknis
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
