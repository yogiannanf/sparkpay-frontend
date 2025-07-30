'use client';

import { Variants, motion } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};


export default function Benefits() {
  const benefits = [
    'Pembayaran cepat & aman',
    'Dashboard transaksi real-time',
    'Dukungan pelanggan 24/7',
    'Integrasi yang mudah',
    'Laporan keuangan otomatis'
  ];

  return (
    <section className="py-16 px-6 md:px-12 text-white bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Manfaat Menggunakan Layanan Kami
        </motion.h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {benefits.map((item, index) => (
            <motion.li
              key={index}
              className="bg-white/10 p-4 rounded-xl backdrop-blur-md"
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              • {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
