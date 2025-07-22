'use client';
import { useRef, useState, useEffect } from 'react';
import {
  Send,
  CreditCard,
  Wallet,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const features = [
  {
    title: 'Transfer Instan',
    desc: 'Kirim uang ke bank mana saja secara real-time tanpa biaya tambahan.',
    icon: <Send className="w-6 h-6 text-green-700" />,
  },
  {
    title: 'Pembayaran Tagihan',
    desc: 'Bayar tagihan listrik, air, dan internet dengan mudah.',
    icon: <CreditCard className="w-6 h-6 text-green-700" />,
  },
  {
    title: 'Top-Up E-Wallet',
    desc: 'Isi ulang GoPay, OVO, Dana, dan lainnya langsung dari aplikasi.',
    icon: <Wallet className="w-6 h-6 text-green-700" />,
  },
  {
    title: 'Bayar QRIS',
    desc: 'Scan QR dan bayar di mana saja dengan aman dan cepat.',
    icon: <Smartphone className="w-6 h-6 text-green-700" />,
  },
  {
    title: 'Keamanan Terjamin',
    desc: 'Proteksi ganda dengan enkripsi dan verifikasi OTP.',
    icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
  },
  {
    title: 'Laporan Transaksi',
    desc: 'Pantau semua aktivitas keuangan dengan transparan.',
    icon: <TrendingUp className="w-6 h-6 text-green-700" />,
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-20 px-6 md:px-16 bg-green-50 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
        Fitur Unggulan <span className="text-green-600">SparkPay</span>
      </h2>

      {/* Panah kiri */}
      {!atStart && (
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-green-100 p-2 rounded-full z-10 transition shadow hover:shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-green-700" />
        </button>
      )}

      {/* Panah kanan */}
      {!atEnd && (
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-green-100 p-2 rounded-full z-10 transition shadow hover:shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-green-700" />
        </button>
      )}

      {/* Scrollable fitur */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide px-1 md:px-4 snap-x scroll-smooth"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="min-w-[280px] md:min-w-[300px] bg-white p-6 rounded-xl shadow hover:shadow-md transition flex-shrink-0 snap-start border border-green-200"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-green-100"
            >
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-green-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-green-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
