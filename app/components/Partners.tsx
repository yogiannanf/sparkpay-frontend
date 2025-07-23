'use client';

import React from 'react';

const partners = [
  { name: 'PT Naratel', logo: '/naratel-logo.svg' }, // pastikan file ini ada di public/
  { name: 'Vercel', logo: '/vercel.svg' },
];

export default function Partners() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-10">
          Mitra Kami
        </h2>
        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-70 p-4 md:p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center w-40 h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}