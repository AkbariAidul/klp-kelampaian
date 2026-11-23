export const SITE = {
  name: 'KLP Kelampaian',
  shortName: 'KLP',
  url: 'https://klpkelampaian.com',
  title: 'KLP Kelampaian — Digital Impact Hub',
  description:
    'KLP Kelampaian merupakan inisiatif pemuda Desa Kelampaian Ilir, Kabupaten Banjar, yang mendorong inovasi sosial dan ekonomi sirkular melalui pemanfaatan potensi lokal.',
  locale: 'id_ID',
  email: 'kontak@klpkelampaian.com',
  founder: 'Mislaini',
  foundingDate: '2024',
  address: {
    street: 'RT 02 / RW 01, Desa Kelampaian Ilir',
    locality: 'Astambul',
    region: 'Kalimantan Selatan',
    postalCode: '70672',
    country: 'ID',
  },
} as const;

export const NAV = [
  { label: 'Beranda', href: '/#beranda' },
  { label: 'Capaian', href: '/#data-capaian' },
  { label: 'Pilar', href: '/#pilar-utama' },
  { label: 'Bab Portofolio', href: '/#penjelajahan-bab' },
  { label: 'Wilayah', href: '/#wilayah' },
  { label: 'Kontak', href: '/#kontak' },
] as const;
