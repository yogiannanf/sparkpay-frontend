import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SparkPay',
  description: 'Solusi Pembayaran Digital',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="relative antialiased text-gray-900">
        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10 bg-spark-gradient" />

        {/* OPTIONAL decorative blur bubbles */}
        <div className="pointer-events-none fixed top-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-300/40 via-yellow-200/30 to-yellow-100/20 blur-[160px] -z-10" />
        <div className="pointer-events-none fixed bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-200/40 to-green-200/30 blur-[140px] -z-10" />

        {children}
      </body>
    </html>
  );
}
