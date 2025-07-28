'use client';

import Link from 'next/link';
import React from 'react';

const partners = [
  {
    name: 'PT Naratel',
    logo: '/naratel-logo.svg',
    description: 'Penyedia layanan teknologi komunikasi.',
    slug: 'naratel',
  }
];

export default function Partners() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10">
          Mitra Kami
        </h2>
        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={`/mitra/${partner.slug}`}
              className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center w-40 h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
