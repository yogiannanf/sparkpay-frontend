'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function HowItWorks() {
  const steps = [
    {
      title: '1. Checkout Pelanggan',
      desc: 'Pelanggan memilih produk dan melakukan checkout di toko Anda.'
    },
    {
      title: '2. Kirim ke Payment Gateway',
      desc: 'Sistem Anda mengirimkan data transaksi ke Payment Gateway kami.'
    },
    {
      title: '3. Proses Pembayaran',
      desc: 'Payment Gateway memproses pembayaran melalui bank atau e-wallet.'
    },
    {
      title: '4. Konfirmasi & Settlement',
      desc: 'Setelah berhasil, dana dikonfirmasi dan disalurkan ke rekening merchant.'
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Bagaimana Cara Kerjanya?
        </motion.h2>
        <motion.p
          className="mb-8 text-white/80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Proses sederhana dari pelanggan hingga uang masuk ke merchant.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-6 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
