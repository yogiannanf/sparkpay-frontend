'use client';

import { motion } from 'framer-motion';
import { Variants, easeOut } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.15,
      ease: easeOut,
    },
  }),
};


export default function ForWhom() {
  const targets = [
    'Toko Online',
    'Aplikasi Mobile',
    'Startup SaaS',
    'Marketplace',
    'Lembaga Donasi',
  ];

  return (
    <section className="py-16 px-6 md:px-12 text-white bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Untuk Siapa Layanan Ini?
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {targets.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center font-medium"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1} // Tambahkan +1 agar delay tidak sama dengan h2
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
