'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { name: 'Andi', quote: 'SparkPay mempermudah hidup saya!', avatar: '/avatars/andi.jpg' },
  { name: 'Rina', quote: 'Transaksi jadi lebih cepat dan aman.', avatar: '/avatars/rina.jpg' },
  { name: 'Dewi', quote: 'Aplikasinya ringan dan sangat membantu bisnis saya.', avatar: '/avatars/dewi.jpg' },
  { name: 'Budi', quote: 'Sangat direkomendasikan untuk transaksi harian!', avatar: '/avatars/budi.jpg' },
  { name: 'Nina', quote: 'Fitur-fiturnya sangat user-friendly!', avatar: '/avatars/nina.jpg' },
  { name: 'Galih', quote: 'SparkPay sangat membantu saat pembayaran rutin!', avatar: '/avatars/galih.jpg' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  useEffect(() => {
    if (containerRef.current) {
      const childWidth = containerRef.current.children[0]?.clientWidth || 0;
      containerRef.current.scrollTo({
        left: index * (childWidth + 24), // gap-6
        behavior: 'smooth',
      });
    }
  }, [index]);

  const goPrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const goNext = () => setIndex((prev) => (prev < total - 1 ? prev + 1 : prev));

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Apa Kata Mereka?
        </h2>

        <div className="relative">
          {index > 0 && (
            <button
              onClick={goPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-green-100 text-green-800 p-2 rounded-full shadow z-10 transition"
            >
              <ChevronLeft />
            </button>
          )}
          {index < total - 1 && (
            <button
              onClick={goNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-green-100 text-green-800 p-2 rounded-full shadow z-10 transition"
            >
              <ChevronRight />
            </button>
          )}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-1"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] md:min-w-[320px] bg-white/90 backdrop-blur-sm border border-green-200 hover:border-green-400 rounded-2xl p-6 shadow-md hover:shadow-lg transition flex-shrink-0 snap-start text-left"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                  />
                  <div>
                    <p className="font-bold text-green-700">{t.name}</p>
                    <p className="text-xs text-gray-400">Pengguna SparkPay</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
