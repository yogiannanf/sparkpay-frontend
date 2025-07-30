'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.15,
      ease: 'easeOut',
    },
  }),
};

export default function Integration() {
  return (
    <section className="py-20 px-6 md:px-12 text-white bg-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Integrasi hanya dalam 1 hari!
        </motion.h2>
        <motion.p
          className="mb-10 text-white/80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Hubungkan sistem Anda dengan API kami secara cepat dan aman.
        </motion.p>

        <motion.div
          className="bg-black text-left text-sm rounded-xl overflow-hidden border border-white/10 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={3}
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
