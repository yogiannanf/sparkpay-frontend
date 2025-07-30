'use client';

import { motion } from 'framer-motion';

export default function DokumentasiPage() {
  return (
    <main className="bg-spark-gradient text-white min-h-screen py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Dokumentasi Teknis API SparkPay</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔐 Autentikasi</h2>
          <p className="text-white/80 mb-2">
            Semua permintaan API membutuhkan header <code className="bg-white/10 px-1 rounded">Authorization</code> menggunakan token Bearer Anda.
          </p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">💸 Endpoint Transfer</h2>
          <p className="text-white/80 mb-2">Untuk melakukan transfer dana ke nomor tujuan:</p>
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

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📊 Cek Status Transaksi</h2>
          <p className="text-white/80 mb-2">Cek status transaksi berdasarkan ID:</p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`GET /api/v1/transaction/:id
Authorization: Bearer YOUR_API_KEY`}
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📁 Webhook (Opsional)</h2>
          <p className="text-white/80 mb-2">Kami akan mengirim notifikasi otomatis ke endpoint webhook Anda ketika status transaksi berubah:</p>
          <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`POST /your/webhook/url

{
  "transaction_id": "TRX123456",
  "status": "success",
  "received_at": "2025-07-29T12:00:00Z"
}`}
          </pre>
        </section>

        <div className="text-center">
          <p className="text-white/70">Dokumentasi lengkap dapat disediakan sesuai kebutuhan integrasi.</p>
        </div>
      </motion.div>
    </main>
  );
}
