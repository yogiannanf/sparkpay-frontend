'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqList = [
  {
    question: 'Apa saja bank yang sudah dilayani oleh SparkPay?',
    answer: 'SparkPay melayani berbagai bank nasional seperti BCA, BRI, Mandiri, BNI, dan lainnya.',
  },
  {
    question: 'Apakah SparkPay bisa digunakan untuk top-up e-wallet?',
    answer: 'Ya, SparkPay mendukung top-up ke e-wallet seperti OVO, Dana, GoPay, dan lainnya.',
  },
  {
    question: 'Apakah SparkPay bisa untuk transfer ke luar negeri?',
    answer: 'Saat ini SparkPay masih fokus pada transfer domestik, namun akan tersedia fitur internasional segera.',
  },
  {
    question: 'Apakah transaksi di SparkPay aman?',
    answer: 'Semua transaksi menggunakan enkripsi end-to-end dan diawasi oleh sistem keamanan berlapis.',
  },
  {
    question: 'Apakah bisa beli pulsa dan paket data di SparkPay?',
    answer: 'Tentu, kamu bisa membeli pulsa, paket data, token listrik, dan layanan PPOB lainnya langsung dari SparkPay.',
  },
  {
    question: 'Bagaimana cara transfer menggunakan SparkPay?',
    answer: 'Cukup pilih bank tujuan, masukkan nomor rekening, nominal, dan lakukan transfer. Mudah dan cepat!',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Pertanyaan seputar <span className="text-yellow-500">SparkPay</span>
        </h2>
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 transition-all shadow-sm ${
                activeIndex === index
                  ? 'bg-yellow-100 border-yellow-300'
                  : 'bg-white border-green-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-medium text-green-800">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {activeIndex === index && (
                <div className="mt-3 text-green-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}