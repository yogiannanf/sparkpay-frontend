'use client';

import Link from 'next/link';
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 md:px-16 py-12 scroll-mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4">
            <img src="/logo.svg" alt="SparkPay Logo" className="h-12" />
          </div>
          <div className="flex gap-4 text-xl mb-6">
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Produk</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/footer/produk/transfer">Transfer</Link></li>
              <li><Link href="/footer/produk/bayar">Bayar</Link></li>
              <li><Link href="/footer/produk/pinjaman">Pinjaman</Link></li>
              <li><Link href="/footer/produk/dompet">Dompet Digital</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Lainnya</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/footer/lainnya/blog">Blog</Link></li>
              <li><Link href="/footer/lainnya/syarat">Syarat & Ketentuan</Link></li>
              <li><Link href="/footer/lainnya/kebijakan">Kebijakan Privasi</Link></li>
              <li><Link href="/footer/lainnya/tentang">Tentang SparkPay</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-300 space-y-4">
          <div>
            <p className="font-medium text-white">Call Center:</p>
            <p>0811-8566-044</p>
          </div>
          <div>
            <p className="font-medium text-white">Alamat Kantor:</p>
            <p>
              RUKO TAMAN BOROBUDUR INDAH KAVLING 33<br />
              JL. PUNCAK BOROBUDUR NO.1 MALANG<br />
              Mojolangu, Lowokwaru, Kota Malang, Jawa Timur 65141
            </p>
          </div>
          <div>
            <p className="font-medium text-white">Email:</p>
            <p>sales@naraya.co.id</p>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <p className="font-medium text-white">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
            </p>
            <p>Customer Service 1: 0882-1202-2222</p>
            <p>Customer Service 2: 0882-1201-1111</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} PT. Naraya Telematika</p>
      </div>
    </footer>
  );
}
