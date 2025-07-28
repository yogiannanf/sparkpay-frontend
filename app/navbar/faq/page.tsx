import Link from 'next/link';

export default function DownloadPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-br from-lime-50 via-emerald-50 to-green-50 text-gray-800 text-center">
      <h1 className="text-3xl font-bold mb-4">Unduh SparkPay</h1>
      <p className="mb-6">Tersedia untuk Android dan iOS. Klik tombol di bawah untuk mulai mengunduh.</p>
      <Link
        href="#"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
      >
        Unduh Sekarang
      </Link>
    </main>
  );
}
