'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: 'Andi', quote: 'SparkPay mempermudah hidup saya!' },
  { name: 'Rina', quote: 'Transaksi jadi lebih cepat dan aman.' },
  { name: 'Dewi', quote: 'Aplikasinya ringan dan sangat membantu bisnis saya.' },
  { name: 'Budi', quote: 'Sangat direkomendasikan untuk transaksi harian!' },
  { name: 'Nina', quote: 'Fitur-fiturnya sangat user-friendly!' },
  { name: 'Galih', quote: 'SparkPay sangat membantu saat pembayaran rutin!' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  useEffect(() => {
    if (containerRef.current) {
      const childWidth = containerRef.current.children[0]?.clientWidth || 0;
      containerRef.current.scrollTo({
        left: index * (childWidth + 24), // 24px = gap-6
        behavior: 'smooth',
      });
    }
  }, [index]);

  const goPrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const goNext = () => setIndex((prev) => (prev < total - 1 ? prev + 1 : prev));

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50 text-gray-800 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-700">Apa Kata Mereka?</h2>

        <div className="relative">
          {index > 0 && (
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-800 p-2 rounded-full shadow transition z-10"
            >
              <ChevronLeft />
            </button>
          )}

          {index < total - 1 && (
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-800 p-2 rounded-full shadow transition z-10"
            >
              <ChevronRight />
            </button>
          )}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="w-[280px] sm:w-[300px] md:w-[340px] bg-white rounded-3xl shadow-md p-6 flex-shrink-0 hover:shadow-xl transition"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-700 text-base md:text-lg italic leading-relaxed">"{t.quote}"</p>
                <p className="mt-4 font-bold text-green-700 text-right">- {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
