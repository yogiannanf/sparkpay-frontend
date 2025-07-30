'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Integration() {
  return (
    <section className="py-20 px-6 md:px-12 text-white bg-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Integrasi hanya dalam 1 hari!
        </motion.h2>

        <motion.p
          className="mb-10 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Hubungkan sistem Anda dengan API kami secara cepat dan aman.
        </motion.p>

        <motion.div
          className="bg-black text-left text-sm rounded-xl overflow-hidden border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <pre className="p-6 overflow-x-auto text-green-400">
{`POST /api/v1/transfer HTTP/1.1
Host: api.sparkpay.com
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "recipient": "081234567890",
  "amount": 100000,
  "note": "Pembayaran"
}`}
          </pre>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link
            href="/dokumentasi"
            className="inline-block px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Lihat Dokumentasi Teknis
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
