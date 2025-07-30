'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'Gratis',
      features: ['Tanpa biaya setup', 'Cocok untuk pemula', 'Laporan transaksi'],
    },
    {
      name: 'Pro',
      price: 'Rp49.000/bulan',
      features: ['Support API', 'Notifikasi real-time', 'Integrasi CMS'],
    },
    {
      name: 'Enterprise',
      price: 'Hubungi kami',
      features: ['Custom SLA', 'Integrasi lanjutan', 'Manajemen akun'],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Pilih Paket Sesuai Kebutuhan
        </motion.h2>

        <motion.p
          className="text-white mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Temukan paket yang paling sesuai dengan kebutuhan bisnismu.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index + 2}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
              <p className="text-lg font-semibold mb-4 text-yellow-500">{plan.price}</p>
              <ul className="text-left text-gray-700 space-y-2 text-sm">
                {plan.features.map((feat, i) => (
                  <li key={i}>✔ {feat}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
