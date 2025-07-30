'use client';

import Link from 'next/link';
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 md:px-16 py-12 scroll-mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Kontak */}
        <div>
          <div className="mb-4">
            <img src="/images/sparkpay.png" alt="SparkPay Logo" className="h-12" />
          </div>
          <div className="space-y-3 text-sm text-gray-300">
            <a
              href="mailto:support@yourdomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500"
            >
              <FaEnvelope /> support@yourdomain.com
            </a>
            <a
              href="https://wa.me/628118566044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500"
            >
              <FaWhatsapp /> +62 811-8566-044
            </a>
          </div>
          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/navbar/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/footer/navigasi/dokumentasi" className="hover:text-white">
                Dokumentasi API
              </Link>
            </li>
            <li>
              <Link href="/footer/navigasi/kebijakan" className="hover:text-white">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/footer/navigasi/syarat" className="hover:text-white">
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>

        {/* Info Kontak & Alamat */}
        <div className="text-sm text-gray-300 space-y-4">
          <div>
            <p className="font-medium text-white">Alamat Kantor:</p>
            <p>
              RUKO TAMAN BOROBUDUR INDAH KAV. 33<br />
              JL. PUNCAK BOROBUDUR NO.1 MALANG<br />
              Mojolangu, Lowokwaru, Kota Malang, Jawa Timur 65141
            </p>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <p className="font-medium text-white">Pengaduan Konsumen:</p>
            <p>Customer Service 1: 0882-1202-2222</p>
            <p>Customer Service 2: 0882-1201-1111</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} PT. Naraya Telematika</p>
      </div>
    </footer>
  );
}
