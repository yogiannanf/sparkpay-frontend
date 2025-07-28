'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  {
    name: 'PT Naratel',
    logo: '/naratel-logo.svg',
    description: 'Penyedia layanan teknologi komunikasi.',
    slug: 'naratel',
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: false,
  });


  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-green-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Mitra Kami
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href={`/mitra/${partner.slug}`}
                className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center w-40 h-24"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 object-contain"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
