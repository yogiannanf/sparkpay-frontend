'use client';

import React, { useState } from 'react';

const partners = [
  { name: 'PT Naratel', logo: '/naratel-logo.svg', description: 'Penyedia layanan teknologi komunikasi.' },
  { name: 'Vercel', logo: '/vercel.svg', description: 'Platform deployment frontend modern.' },
];

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<null | typeof partners[0]>(null);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10">
          Mitra Kami
        </h2>
        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <button
              key={index}
              onClick={() => setSelectedPartner(partner)}
              className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center w-40 h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-2">{selectedPartner.name}</h3>
            <p className="text-sm text-gray-700">{selectedPartner.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={() => setSelectedPartner(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
