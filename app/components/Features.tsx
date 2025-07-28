'use client';
import React from 'react';
import {
  MdBolt,
  MdLock,
  MdTouchApp,
  MdAccountBalanceWallet,
  MdPayment,
  MdCardGiftcard,
  MdHistory,
  MdQrCodeScanner,
} from 'react-icons/md';

const features = [
  {
    icon: <MdBolt className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Pembayaran Cepat',
    desc: 'Transaksi instan ke semua bank nasional.',
  },
  {
    icon: <MdLock className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Aman & Terpercaya',
    desc: 'Sistem keamanan berlapis dan terenkripsi.',
  },
  {
    icon: <MdTouchApp className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Mudah Digunakan',
    desc: 'Desain ramah pengguna & intuitif.',
  },
  {
    icon: <MdAccountBalanceWallet className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Top-up E-Wallet',
    desc: 'Isi saldo OVO, GoPay, Dana, dan lainnya.',
  },
  {
    icon: <MdPayment className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Bayar Tagihan',
    desc: 'Listrik, PDAM, internet, dan lainnya.',
  },
  {
    icon: <MdCardGiftcard className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Promo & Cashback',
    desc: 'Nikmati promo spesial dan cashback.',
  },
  {
    icon: <MdHistory className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Riwayat Transaksi',
    desc: 'Pantau transaksi harian dan bulanan.',
  },
  {
    icon: <MdQrCodeScanner className="text-4xl text-green-600 group-hover:scale-110 transition-transform" />,
    title: 'Transfer QRIS',
    desc: 'Kirim & bayar pakai kode QR semua merchant.',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Fitur Unggulan</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
