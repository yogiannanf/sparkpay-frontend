'use client';

import React from 'react';
import {
  MdPayment,
  MdExtension,
  MdUpdate,
  MdDashboard,
  MdSecurity,
} from 'react-icons/md';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <MdPayment className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Metode Pembayaran Lengkap',
    desc: 'Dukung berbagai kanal pembayaran seperti QRIS, transfer bank, e-wallet, dan kartu kredit.',
  },
  {
    icon: <MdExtension className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Integrasi Mudah',
    desc: 'Tersedia plugin & API yang cepat diimplementasikan ke sistem Anda.',
  },
  {
    icon: <MdUpdate className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Settlement Harian Otomatis',
    desc: 'Dana langsung dikirim ke rekening Anda setiap hari secara otomatis.',
  },
  {
    icon: <MdDashboard className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Dashboard Real-Time',
    desc: 'Pantau transaksi dan statistik bisnis Anda secara langsung & menyeluruh.',
  },
  {
    icon: <MdSecurity className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Keamanan Berlapis',
    desc: 'Dilengkapi standar PCI-DSS & 3D Secure untuk perlindungan maksimal.',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-green-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Fitur Unggulan
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/90 backdrop-blur rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
