export interface Chapter {
  number: string;
  slug: string;
  navLabel: string;
  cardTitle: string;
  summary: string;
  meta: string;
  accent: 'primary' | 'secondary' | 'tertiary' | 'error';
}

export const CHAPTERS: Chapter[] = [
  {
    number: '01',
    slug: 'sejarah-dan-kilas-balik',
    navLabel: 'Sejarah & Kilas Balik',
    cardTitle: 'Sejarah & Kilas Balik Gerakan',
    summary:
      'Menelusuri realitas awal tahun 2024 ketika pelepah rumbia dianggap limbah tak bernilai, hingga titik balik lahirnya inisiatif mandiri KLP Kelampaian bersama para sesepuh desa.',
    meta: 'Kronologi 2024 - 2026',
    accent: 'primary',
  },
  {
    number: '02',
    slug: 'permasalahan-lingkungan-dan-sosial',
    navLabel: 'Isu Lingkungan & Sosial',
    cardTitle: 'Isu Lingkungan & Kerentanan Sosial',
    summary:
      'Analisis data empiris ancaman karhutla Astambul, penumpukan pelepah di sungai, fenomena putus sekolah pasca-SMP, dan perkawinan usia anak akibat keterbatasan mata pencaharian.',
    meta: 'Data Masalah & Urgensi',
    accent: 'error',
  },
  {
    number: '03',
    slug: 'potensi-rumbia-dan-budaya-sagu',
    navLabel: 'Rumbia & Budaya Sagu',
    cardTitle: 'Potensi Rumbia & Budaya Sagu',
    summary:
      'Eksplorasi botani Metroxylon sagu di lahan basah Banjar, keterikatan kuliner khas Banjar dengan tepung sagu, dan keunggulan serat pelepah rumbia sebagai material arsitektur tahan cuaca.',
    meta: 'Kearifan Lokal Botani',
    accent: 'tertiary',
  },
  {
    number: '04',
    slug: 'alur-bahan-dan-inovasi',
    navLabel: 'Alur & Inovasi Produk',
    cardTitle: 'Alur Bahan & Inovasi Produk',
    summary:
      'Spesifikasi teknis atap sirap tradisional berpori sejuk dan diversifikasi tirai pelepah 2026. Dokumentasi rantai pasok dari rawa, pemilahan, penjemuran, hingga quality control pengemasan.',
    meta: 'SOP & Diagram Alur',
    accent: 'secondary',
  },
  {
    number: '05',
    slug: 'pemberdayaan-dan-peran-penggagas',
    navLabel: 'Pemberdayaan & Penggagas',
    cardTitle: 'Pemberdayaan & Peran Penggagas',
    summary:
      'Biografi kepemimpinan pemuda, metode konsolidasi kelompok ibu pengrajin, pembagian hasil transparan, serta pelatihan teknologi informasi bagi pemuda desa putus sekolah.',
    meta: 'Profil Penggagas Banua',
    accent: 'primary',
  },
  {
    number: '06',
    slug: 'hasil-dan-dampak-nyata',
    navLabel: 'Hasil & Dampak',
    cardTitle: 'Hasil & Dampak Nyata',
    summary:
      'Laporan empiris capaian produksi, transformasi kesejahteraan keluarga pengrajin, dan akuntabilitas data dampak yang dipisahkan secara jujur antara output, sosial-ekonomi, dan lingkungan.',
    meta: 'Laporan Dampak Terukur',
    accent: 'tertiary',
  },
  {
    number: '07',
    slug: 'testimoni-dan-validasi-masyarakat',
    navLabel: 'Testimoni & Validasi',
    cardTitle: 'Testimoni & Validasi Masyarakat',
    summary:
      'Kesaksian multisektoral pengrajin, tokoh lingkungan, mitra arsitektur, dan Kepala Desa Kelampaian Ilir atas transformasi kriya rumbia serta protokol informed consent.',
    meta: 'Kesaksian & Etika Riset',
    accent: 'secondary',
  },
  {
    number: '08',
    slug: 'keberlanjutan-dan-kolaborasi',
    navLabel: 'Keberlanjutan & Kolaborasi',
    cardTitle: 'Keberlanjutan & Kolaborasi',
    summary:
      'Roadmap 2026-2030, tujuh pilar keberlanjutan, cetak biru replikasi desa lahan basah, serta kanal kolaborasi pentahelix untuk menjaga nyala gerakan.',
    meta: 'Roadmap 2026-2030',
    accent: 'primary',
  },
];

export const CHAPTER_GROUPS = [
  { label: 'Profil & Isu', items: CHAPTERS.slice(0, 3) },
  { label: 'Produksi & Pemberdayaan', items: CHAPTERS.slice(3, 5) },
  { label: 'Dampak', items: CHAPTERS.slice(5, 7) },
  { label: 'Kolaborasi', items: CHAPTERS.slice(7) },
] as const;

export function chapterHref(chapter: Chapter): string {
  return `/${chapter.slug}/`;
}

export function getChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = CHAPTERS.findIndex((chapter) => chapter.slug === slug);
  return {
    previous: index > 0 ? CHAPTERS[index - 1] : undefined,
    next: index >= 0 && index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : undefined,
  };
}

export const ACCENT_CLASSES = {
  primary: {
    badge: 'text-primary bg-primary-fixed',
    text: 'text-primary',
    icon: 'text-on-primary-fixed bg-primary-fixed',
    border: 'border-primary',
  },
  secondary: {
    badge: 'text-secondary bg-secondary-container',
    text: 'text-secondary',
    icon: 'text-on-secondary-container bg-secondary-container',
    border: 'border-secondary',
  },
  tertiary: {
    badge: 'text-tertiary bg-tertiary-fixed',
    text: 'text-tertiary',
    icon: 'text-on-tertiary-fixed bg-tertiary-fixed',
    border: 'border-tertiary',
  },
  error: {
    badge: 'text-error bg-error-container',
    text: 'text-error',
    icon: 'text-on-error-container bg-error-container',
    border: 'border-error',
  },
} as const;

export const CHAPTER_SEO = {
  'permasalahan-lingkungan-dan-sosial': {
    description: "Data empiris karhutla, penumpukan pelepah di sungai, putus sekolah, dan kerentanan sosial di lahan basah Kelampaian Ilir.",
    image: "/images/chapters/bab02-01-dokumentasi-investigasi-ekologis-di-laha.webp",
    imageWidth: 384,
    imageHeight: 512,
    imageAlt: "Dokumentasi investigasi ekologis di lahan gambut basah Desa Kelampaian Ilir Kalimantan Selatan, memperlihatkan tumpukan pelepah rumbia dan vegetasi rawa dengan palet warna natural biru tua dan kabut tipis di pagi hari, gaya fotografi jurnalistik National Geographic tanpa stigma sosial.",
  },
  'sejarah-dan-kilas-balik': {
    description: "Jejak KLP Kelampaian 2024–2026: dari residu rumbia menjadi atap sirap fair trade, tirai pelepah, dan ruang belajar pemuda desa.",
    image: "/images/chapters/bab01-01-pemandangan-pedesaan-rawa-gambut-di-kali.webp",
    imageWidth: 512,
    imageHeight: 326,
    imageAlt: "Pemandangan pedesaan rawa gambut di Kalimantan Selatan dengan tumpukan pelepah rumbia berserakan di bantaran parit air, suasana redup mendung, gambut lembab khas hutan sagu pedalaman Banjar, pencahayaan natural realistis.",
  },
  'potensi-rumbia-dan-budaya-sagu': {
    description: "Botani Metroxylon sagu, kuliner sagu Banjar, dan keunggulan serat pelepah rumbia sebagai material arsitektur tahan cuaca.",
    image: "/images/chapters/bab03-01-dense-emerald-green-wild-sago-palm-grove.webp",
    imageWidth: 437,
    imageHeight: 506,
    imageAlt: "Dense emerald green wild sago palm grove growing directly inside pristine wetland swamp in Kelampaian Banjar with reflective calm blackwater channels under soft morning mist, macro botanical depth of field, documentary style",
  },
  'alur-bahan-dan-inovasi': {
    description: "Spesifikasi atap sirap rumbia dan tirai pelepah 2026, plus rantai pasok dari rawa sampai quality control pengemasan.",
    image: "/images/chapters/bab04-01-traditional-banjar-women-artisan-in-kela.webp",
    imageWidth: 503,
    imageHeight: 278,
    imageAlt: "Traditional Banjar women artisan in Kelampaian village weaving dried sago rumbia palm leaves onto a bamboo slat frame, precise hand movement, warm natural morning light, authentic rural workshop setting in South Kalimantan, deep blue and earth tones, high detail editorial photography.",
  },
  'pemberdayaan-dan-peran-penggagas': {
    description: "Profil penggagas, konsolidasi kelompok pengrajin, pembagian hasil transparan, dan pelatihan digital pemuda desa.",
    image: "/images/chapters/bab05-01-dokumentasi-rembuk-warga-desa-kelampaian.webp",
    imageWidth: 512,
    imageHeight: 321,
    imageAlt: "Dokumentasi rembuk warga desa Kelampaian Ilir Kalimantan Selatan di serambi rumah panggung kayu khas Banjar, para pengrajin wanita lansia dan ibu-ibu berkumpul dengan suasana guyub hangat, memegang helai daun rumbia dan mendiskusikan standardisasi kualitas serta harga bersama pemuda pendamping, pencahayaan alami sore tropis, palet warna ungu dan kayu gambut.",
  },
  'hasil-dan-dampak-nyata': {
    description: "Capaian produksi, transformasi kesejahteraan pengrajin, dan akuntabilitas data dampak KLP Kelampaian yang terukur.",
    image: "/images/chapters/bab06-01-atap-daun-rumbia-grade-a.webp",
    imageWidth: 512,
    imageHeight: 329,
    imageAlt: "Atap Daun Rumbia Grade A",
  },
  'testimoni-dan-validasi-masyarakat': {
    description: "Kesaksian pengrajin, tokoh lingkungan, mitra arsitektur, dan Kepala Desa atas transformasi kriya rumbia.",
    image: "/images/chapters/bab07-01-close-up-warm-documentary-portrait-of-ba.webp",
    imageWidth: 249,
    imageHeight: 214,
    imageAlt: "Close up warm documentary portrait of Bapak Rahman, a 61-year-old elderly Banjarese artisan wearing an Indonesian peci and traditional work shirt, with deep smile wrinkles and weathered skilled hands, soft daylight in a rural riverside workshop in South Kalimantan, muted earth tones with purple and gold undertones.",
  },
  'keberlanjutan-dan-kolaborasi': {
    description: "Roadmap 2026–2030, tujuh pilar keberlanjutan, cetak biru replikasi desa lahan basah, dan kanal kolaborasi pentahelix.",
    image: "/og-image.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Portofolio digital KLP Kelampaian",
  },
} as const;
