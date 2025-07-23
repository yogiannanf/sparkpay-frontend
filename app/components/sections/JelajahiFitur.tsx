'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JelajahiFitur() {
  return (
    <section id="fitur" className="py-24 px-6 md:px-16 bg-white relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
        >
          Fitur Unggulan <span className="text-yellow-400">SparkPay</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Nikmati berbagai fitur yang memudahkan aktivitas finansialmu dalam satu aplikasi.
        </motion.p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: '/icons/transfer.svg',
            title: 'Transfer Gratis',
            desc: 'Bebas biaya admin ke semua bank kapan saja dan di mana saja.',
          },
          {
            icon: '/icons/bill.svg',
            title: 'Pembayaran Tagihan',
            desc: 'Bayar listrik, air, internet, dan lainnya dengan mudah dan cepat.',
          },
          {
            icon: '/icons/wallet.svg',
            title: 'Top-up E-Wallet',
            desc: 'Isi ulang saldo GoPay, OVO, DANA, dan e-wallet lainnya dengan instan.',
          },
        ].map((fitur, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-[1.02] text-center"
          >
            <div className="flex justify-center mb-4">
              <Image src={fitur.icon} alt={fitur.title} width={60} height={60} />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">{fitur.title}</h3>
            <p className="text-gray-600">{fitur.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
