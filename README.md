# KLP Kelampaian — Portofolio Digital Impact

Website resmi **KLP Kelampaian**, inisiatif kepemudaan di Desa Kelampaian Ilir, Kecamatan Astambul, Kabupaten Banjar, Kalimantan Selatan. Website ini menjadi profil organisasi, portofolio digital, media informasi program, dan dokumentasi dampak sosial, lingkungan, serta ekonomi.

Domain utama yang direncanakan: `https://klpkelampaian.com/`.

## Teknologi

| Komponen | Versi |
| --- | --- |
| Astro (static) | 7.4.x |
| TypeScript | 5.9.x |
| Tailwind CSS | 4.3.x |
| Integrasi sitemap | `@astrojs/sitemap` 3.7.x |
| Hosting | Cloudflare Pages (static) |
| Interaktivitas | Vanilla JavaScript untuk menu mobile |

Tidak ada backend, database, autentikasi, adapter server, atau Cloudflare Workers. Output build adalah HTML/CSS/JS statis di `dist/`.

## Kebutuhan

- Node.js `>= 22.23.4` (sesuai kebutuhan Astro 7).
- npm `>= 9.6.5`.
- Tidak perlu akun Cloudflare untuk menjalankan project secara lokal.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321/`.

Perintah lain:

```bash
npm run build     # astro check + build production ke dist/
npm run preview   # pratinjau hasil build
```

## Struktur direktori

```text
.
├── public/
│   ├── fonts/                  # Public Sans + Material Symbols (self-hosted)
│   ├── images/                 # gambar WebP lokal, termasuk images/chapters/
│   ├── _headers                # header keamanan dan cache Cloudflare Pages
│   ├── apple-touch-icon.png
│   ├── favicon.png
│   ├── og-image.jpg            # 1200 x 630
│   └── robots.txt
├── src/
│   ├── components/             # Navbar, Footer, Hero, Metrics, dll.
│   ├── content/chapters/       # fragmen HTML 8 bab portofolio
│   ├── data/chapters.ts        # slug, judul, ringkasan, grup navigasi, SEO bab
│   ├── data/site.ts            # identitas situs dan kontak
│   ├── layouts/BaseLayout.astro# head, SEO, header, footer
│   ├── pages/
│   │   ├── index.astro         # beranda
│   │   ├── [slug].astro        # delapan halaman bab portofolio
│   │   └── 404.astro           # halaman tidak ditemukan
│   └── styles/global.css       # Tailwind + token desain
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Catatan migrasi konten

- Seluruh section, teks, metrik, dan gambar dari website lama dipertahankan.
- Desain, token warna Material 3, font Public Sans, dan Material Symbols dipertahankan.
- Tailwind CDN diganti integrasi lokal `@tailwindcss/vite`; gambar eksternal diunduh ke `public/images/` dan dioptimalkan ke WebP.
- Font Public Sans dan Material Symbols di-host sendiri di `public/fonts/`, sehingga tidak ada permintaan ke Google Fonts saat halaman dibuka.
- Gambar produk memakai `srcset` 600w/900w agar browser memilih ukuran sesuai layar.
- Delapan bab portofolio dimigrasikan dari dokumen sumber ke halaman statis melalui `src/content/chapters/` dan rute dinamis `src/pages/[slug].astro`.
- Tombol unduhan palsu, `alert()`, formulir tanpa backend, serta tautan `href="#"` dihapus atau diganti dengan aksi yang benar. Formulir kolaborasi membuka aplikasi email melalui `mailto:`.
- Nomor telepon dan WhatsApp masih memakai placeholder `+62 821-5541-XXXX`. Isi nomor resmi di `src/data/site.ts` sebelum publikasi.
- Alamat sekretariat masih memakai `RT 02 / RW 01`. Konfirmasi nomor RT sebelum publikasi.

## Implementasi SEO

- `lang="id"` dan satu `h1` per halaman.
- Title, description, canonical, robots, Open Graph, dan Twitter Card unik per halaman.
- JSON-LD `WebSite` dan `Organization` di beranda.
- Sitemap: `https://klpkelampaian.com/sitemap-index.xml` (beranda dan delapan halaman bab; 404 dikecualikan).
- `robots.txt` mencantumkan sitemap dan mengizinkan crawler.
- Canonical, sitemap, structured data, dan OG memakai domain HTTPS.
- Gambar memiliki alt, dimensi, dan lazy loading (gambar utama dimuat lebih awal).
- Halaman 404 memakai `noindex`.

Metadata beranda ada di `src/data/site.ts` dan `src/pages/index.astro`. Ubah `SITE.url` jika domain final berbeda, lalu sesuaikan juga `site` di `astro.config.mjs`.

## Deployment ke Cloudflare Pages

1. Push repository ke GitHub (branch `main`).
2. Buka Cloudflare Dashboard > **Workers & Pages** > **Create** > **Pages** > **Connect to Git**.
3. Pilih repository `AkbariAidul/klp-kelampaian`.
4. Isi konfigurasi build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION=22`
5. Simpan dan deploy. Cloudflare akan menjalankan build dari `package-lock.json`.
6. Setiap push ke `main` memicu deployment baru.

Tidak perlu menambahkan adapter Cloudflare atau Workers karena situs sepenuhnya statis.

## Custom domain, DNS, dan SSL

Domain belum tentu aktif. Langkah berikut dilakukan manual oleh pemilik project.

1. Tambahkan `klpkelampaian.com` di **Pages > project > Custom domains**.
2. Jika DNS domain dikelola Cloudflare, record akan dibuat otomatis:
   - `www` → CNAME ke `<project>.pages.dev` (proxied).
   - Apex memakai CNAME flattening Cloudflare.
3. Jika DNS dikelola di luar Cloudflare, arahkan `www` ke `<project>.pages.dev` dan apex memakai ALIAS/ANAME, atau pindahkan nameserver ke Cloudflare.
4. Aktifkan **SSL/TLS > Edge Certificates > Always Use HTTPS**.
5. Gunakan mode SSL **Full (strict)** setelah sertifikat aktif.
6. Pilih satu domain kanonik: `https://klpkelampaian.com`. Redirect `www` ke apex dengan **Rules > Redirect Rules**:
   - Jika host `www.klpkelampaian.com`, redirect 301 ke `https://klpkelampaian.com` dengan path yang sama.
   - Alternatif: **Bulk Redirects**.
7. Jangan mengarahkan domain ke VPS. Jangan ubah DNS sebelum domain benar-benar dibeli dan siap.

## Google Search Console

1. Buka [Google Search Console](https://search.google.com/search-console).
2. Tambahkan property tipe **Domain**: `klpkelampaian.com`.
3. Verifikasi kepemilikan dengan DNS TXT record dari Google.
4. Tunggu verifikasi selesai.
5. Submit sitemap: `https://klpkelampaian.com/sitemap-index.xml`.
6. Buka **URL Inspection** untuk `https://klpkelampaian.com/`.
7. Gunakan **Request Indexing** bila perlu.

Pengindeksan dan peringkat sepenuhnya ditentukan Google. Jangan mengklaim situs sudah terindeks tanpa bukti dari Search Console.

## Google Analytics 4 (opsional)

Belum ada Measurement ID, jadi GA4 tidak dipasang. Jika nanti tersedia:

1. Buat properti GA4 dan salin Measurement ID (`G-XXXXXXX`).
2. Tambahkan tag `gtag.js` di `src/layouts/BaseLayout.astro` atau gunakan integrasi analytics.
3. Perbarui kebijakan privasi bila pelacakan diaktifkan.

## Tindakan manual yang masih diperlukan

- Hubungkan repository ke Cloudflare Pages dan deploy.
- Beli/aktifkan domain, atur DNS, lalu verifikasi SSL.
- Pastikan alamat email `kontak@klpkelampaian.com` aktif.
- Tambahkan nomor telepon resmi bila sudah tersedia.
- Konfirmasi ulang seluruh metrik dan testimoni dengan data terbaru sebelum publikasi.
- Daftarkan domain dan submit sitemap di Google Search Console.
- Uji pratinjau Open Graph setelah domain aktif.
- Jalankan Lighthouse pada URL production.

## Lisensi dan hak cipta

© 2026 Koleksi Lokal Produk Kelampaian (KLP Kelampaian). Seluruh hak cipta dilindungi.
