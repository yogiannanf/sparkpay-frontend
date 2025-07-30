'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Apa itu SparkPay?',
    answer: 'SparkPay adalah layanan pembayaran digital dari PT Naratel yang memudahkan transaksi secara cepat dan aman.',
  },
  {
    question: 'Bagaimana cara menggunakan SparkPay?',
    answer: 'Cukup unduh aplikasi SparkPay, daftar akun, dan mulai lakukan transaksi seperti transfer, pembayaran tagihan, dan lainnya.',
  },
  {
    question: 'Apakah SparkPay aman digunakan?',
    answer: 'Ya. SparkPay dilengkapi dengan sistem keamanan berlapis dan telah tersertifikasi oleh otoritas terkait.',
  },
  {
    question: 'Apakah ada biaya transaksi di SparkPay?',
    answer: 'Beberapa layanan gratis, namun sebagian transaksi mungkin dikenakan biaya kecil yang akan diinformasikan sebelum konfirmasi.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-green-200 via-yellow-50 to-yellow-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Pertanyaan Umum</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-yellow-200 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-medium text-lg text-green-700 focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
