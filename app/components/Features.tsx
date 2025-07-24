'use client';
import React from 'react';

const features = [
  { title: 'Pembayaran Cepat', desc: 'Transaksi instan ke semua bank.' },
  { title: 'Aman & Terpercaya', desc: 'Dilindungi sistem keamanan terkini.' },
  { title: 'Mudah Digunakan', desc: 'Tampilan simpel dan ramah pengguna.' },
];

export default function Features() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Fitur Unggulan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
