export interface NavLink {
  name: string;
  href: string;
  type?: 'primary' | 'secondary'; // opsional, bisa buat styling beda
  targetBlank?: boolean;
}

export const navLinks: NavLink[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Produk', href: '/#produk' },
  { name: 'Perusahaan', href: '/#perusahaan' },
  { name: 'Jelajahi Fitur', href: '/#fitur' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Mitra', href: '/#mitra' },
  { name: 'Unduh Sekarang', href: '/#download', type: 'primary' },
];
