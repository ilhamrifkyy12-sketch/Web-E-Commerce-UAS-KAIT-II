# Artisuria — Portal Perlengkapan Seni

**Tugas Besar KAIT II — Membangun Website E-Commerce Fungsional dengan Integrasi Strategi Bisnis Modern**
Program Studi Administrasi Bisnis — Semester Genap 2025/2026

Live Demo: `<isi link GitHub Pages di sini>`
Repository: `<isi link repository GitHub di sini>`

---

## Daftar Isi

1. [Ringkasan Bisnis](#1-ringkasan-bisnis)
2. [Target Market & Segmentasi Pelanggan](#2-target-market--segmentasi-pelanggan)
3. [Analisis Pasar & Kompetitor](#3-analisis-pasar--kompetitor)
4. [Strategi Manajemen Produk & Katalog](#4-strategi-manajemen-produk--katalog)
5. [Model Bisnis & Revenue Stream](#5-model-bisnis--revenue-stream)
6. [Strategi Harga, Promosi & Diskon](#6-strategi-harga-promosi--diskon)
7. [Proses Checkout & Simulasi Payment Gateway](#7-proses-checkout--simulasi-payment-gateway)
8. [Rencana SEO, Keamanan & Pemeliharaan](#8-rencana-seo-keamanan--pemeliharaan)
9. [Rencana Penggunaan Data Analytics](#9-rencana-penggunaan-data-analytics)
10. [Dokumentasi Teknis](#10-dokumentasi-teknis)
11. [Struktur Folder Proyek](#11-struktur-folder-proyek)
12. [Cara Menjalankan Secara Lokal](#12-cara-menjalankan-secara-lokal)
13. [Deployment ke GitHub Pages](#13-deployment-ke-github-pages)
14. [Akun Simulasi (Demo Login)](#14-akun-simulasi-demo-login)
15. [Asset Gambar](#15-asset-gambar)
16. [Batasan & Pengembangan Selanjutnya](#16-batasan--pengembangan-selanjutnya)

---

## 1. Ringkasan Bisnis

**Nama Bisnis:** Artisuria — *Best Fine Art Commerce*

**Deskripsi:**
Artisuria adalah platform e-commerce yang berfokus pada distribusi perlengkapan seni rupa kelas profesional — mulai dari cat air, kertas lukis, kuas, pensil warna, hingga pena arsiran — untuk pasar Indonesia. Bisnis ini berawal dari keresahan mahasiswa seni dan ilustrator lokal di sekitar Lembang, Jawa Barat yang kesulitan mengakses alat lukis kelas profesional impor dengan harga wajar dan proses belanja yang praktis. Artisuria hadir sebagai jembatan antara brand alat seni internasional (Schmincke, Winsor & Newton, Arches, Faber-Castell, Sakura, Holbein, dll.) dengan komunitas seniman, ilustrator, dan pelajar seni di seluruh Indonesia.

**Value Proposition:**
- **Kurasi kualitas** — seluruh produk melalui proses seleksi berdasarkan standar profesional (pigmen, ketahanan warna, tekstur bahan).
- **Kemudahan transaksi digital** — katalog, keranjang belanja, dan simulasi pembayaran dalam satu alur yang ringkas tanpa perlu install aplikasi.
- **Transparansi harga** — harga ditampilkan jelas dalam Rupiah tanpa biaya tersembunyi.
- **Fokus niche** — tidak seperti marketplace umum, Artisuria khusus melayani kebutuhan seniman sehingga kurasi produk lebih relevan dan mendalam.

---

## 2. Target Market & Segmentasi Pelanggan

| Segmen | Karakteristik | Kebutuhan Utama |
|---|---|---|
| Mahasiswa & Pelajar Seni Rupa/DKV | 18–24 tahun, budget terbatas, aktif di media sosial | Produk mid-range, promo, bundling |
| Ilustrator & Seniman Lepas (Freelance) | 22–35 tahun, mengejar kualitas untuk hasil karya komersial | Produk premium, konsistensi stok, pengiriman cepat |
| Hobiis / Pemula | Segala usia, baru mengenal seni lukis/sketsa | Edukasi produk, paket starter, deskripsi mudah dipahami |
| Studio & Sanggar Seni | Institusi kecil-menengah | Pembelian dalam jumlah, harga grosir, invoice rapi |

**Segmentasi geografis:** difokuskan pada kota-kota dengan komunitas seni aktif (Bandung, Yogyakarta, Jakarta, Surabaya) dengan basis operasional di Lembang, Jawa Barat, namun distribusi bersifat nasional melalui pengiriman daring.

---

## 3. Analisis Pasar & Kompetitor

Industri perlengkapan seni rupa di Indonesia tumbuh seiring meningkatnya minat generasi muda pada ilustrasi digital-analog, jurnal seni (art journaling), dan konten kreatif berbasis visual di media sosial. Namun distribusi produk impor premium masih terpusat di toko fisik kota besar, sehingga peluang bagi platform digital yang niche dan terpercaya masih terbuka lebar.

**Kompetitor tidak langsung:**
- **Marketplace umum** (Tokopedia, Shopee) — varian sangat luas namun kurasi kualitas rendah, rawan produk KW/replika, dan pengalaman belanja tidak dipersonalisasi untuk seniman.
- **Toko alat lukis fisik lokal** — terpercaya untuk cek kualitas langsung, namun jangkauan terbatas secara geografis dan jam operasional.
- **Toko online spesialis lain** (mis. toko alat gambar impor skala kecil) — pesaing langsung dengan diferensiasi utama pada kelengkapan katalog dan pengalaman UX.

**Keunggulan kompetitif Artisuria:** kurasi niche khusus seni rupa, UX belanja yang dirancang untuk kebutuhan seniman (filter berdasarkan medium/kategori), serta dokumentasi edukatif produk yang lebih deskriptif dibanding marketplace umum.

---

## 4. Strategi Manajemen Produk & Katalog

Katalog Artisuria dikelompokkan ke dalam 5 kategori utama berdasarkan medium seni:

| Kategori | Contoh Produk | Deskripsi Singkat |
|---|---|---|
| 🎨 Cat Air | Schmincke Horadam Set, Winsor & Newton Pan Set, Holbein Artists Gouache | Cat air & gouache pigmen premium impor |
| 📄 Kertas | Canson Heritage Rag, Arches Watercolor Pad | Kertas seni tekstur cold-pressed 100% katun |
| 🖌️ Kuas | Raphael Kolinsky Brush | Kuas bulu alami presisi tinggi |
| ✏️ Pensil | Faber-Castell Polychromos | Pensil warna berbasis minyak tahan luntur |
| 🖋️ Pena | Sakura Pigma Micron Set | Pena arsiran presisi waterproof |

Setiap produk pada katalog dilengkapi nama, kategori, harga, status stok, dan deskripsi singkat yang menonjolkan keunggulan teknis (bahan baku, negara asal, karakteristik penggunaan) agar calon pembeli — yang umumnya memiliki pengetahuan teknis tentang alat seni — dapat mengambil keputusan pembelian dengan percaya diri.

**Strategi manajemen stok:** admin dapat memantau dan memperbarui stok secara langsung melalui panel administrasi internal (lihat bagian *Internal Management Node* di website), sehingga produk yang habis otomatis dinonaktifkan dari tombol pembelian ("Out of Stock") untuk menghindari overselling.

---

## 5. Model Bisnis & Revenue Stream

Artisuria menjalankan model **B2C retail online (first-party inventory)**, di mana pendapatan utama berasal dari:

1. **Penjualan langsung produk** (margin dari selisih harga beli grosir/importir dan harga jual retail).
2. **Bundling & paket starter kit** — menggabungkan beberapa produk lintas kategori (mis. cat air + kertas + kuas) dengan harga lebih efisien dibanding pembelian satuan, meningkatkan nilai rata-rata transaksi (AOV).
3. **Potensi revenue tambahan (rencana pengembangan):** program keanggotaan/loyalti, kelas atau workshop berbayar bekerja sama dengan seniman mitra, serta afiliasi/komisi dari brand alat seni yang ingin masuk katalog.

---

## 6. Strategi Harga, Promosi & Diskon

**Strategi harga:** kompetitif berbasis **value-based pricing** — harga disusun mengacu pada kualitas dan positioning premium produk (bukan sekadar harga termurah di pasar), karena target pasar utama (ilustrator profesional & studio) lebih mengutamakan kualitas dan konsistensi ketimbang harga terendah.

**Rencana promosi:**
- Diskon musiman (mis. "Summer Collection" sesuai promosi banner yang tampil pada beranda).
- Bundling starter pack untuk segmen pemula/mahasiswa.
- Promo khusus komunitas (kode diskon untuk komunitas seni/kampus mitra).
- Program referral sederhana antar sesama pengguna seni.

**Kanal promosi:** media sosial berbasis visual (Instagram, TikTok) yang relevan dengan target market kreatif, kolaborasi dengan ilustrator lokal sebagai micro-influencer, serta kontak langsung via WhatsApp Business yang telah terintegrasi pada topbar situs.

---

## 7. Proses Checkout & Simulasi Payment Gateway

Alur checkout pada website disimulasikan sebagai berikut:

1. Pelanggan login sebagai *customer* (akun simulasi tersedia, lihat bagian 14).
2. Produk ditambahkan ke keranjang belanja (*Shopping Bag*) — jumlah dan subtotal dihitung otomatis, termasuk validasi batas stok agar kuantitas tidak melebihi stok tersedia.
3. Pelanggan melanjutkan ke **Secure Checkout Invoicing**, mengisi nama lengkap dan alamat pengiriman (tervalidasi wajib diisi).
4. Pelanggan memilih **payment gateway simulasi**: Midtrans Sandbox (Virtual Account) atau Xendit Sandbox (QRIS otomatis) — merepresentasikan integrasi payment gateway populer di Indonesia dalam mode *dummy/sandbox* sesuai ketentuan tugas.
5. Setelah submit, sistem menghasilkan **invoice/nota digital** otomatis (nomor invoice unik, rincian item, metode pembayaran, dan total), stok produk berkurang otomatis, dan riwayat transaksi tercatat pada panel admin.

Simulasi ini merepresentasikan alur payment gateway nyata (Midtrans/Xendit) tanpa transaksi finansial sungguhan — sesuai kebutuhan prototipe akademik. Untuk implementasi produksi ke depan, Artisuria berencana mengintegrasikan API resmi Midtrans/Xendit dengan mekanisme webhook untuk konfirmasi pembayaran real-time.

---

## 8. Rencana SEO, Keamanan & Pemeliharaan

**SEO:**
- Penggunaan struktur heading semantik (H1–H4) dan meta tag deskriptif pada `index.html`.
- Nama & deskripsi produk memuat kata kunci relevan (mis. "cat air profesional", "kertas lukis import") untuk mendukung pencarian organik.
- Rencana pengembangan: sitemap.xml, meta Open Graph untuk pratinjau media sosial, serta URL kanonikal per kategori produk saat aplikasi dikembangkan ke arsitektur multi-halaman/SSR.

**Keamanan:**
- Pada versi prototipe ini, autentikasi disimulasikan menggunakan `localStorage` (sesuai batasan proyek akademik berbasis HTML/CSS/JS murni tanpa backend).
- Rencana pengembangan produksi: autentikasi berbasis backend dengan hashing password (bcrypt), token sesi (JWT), validasi input sisi server, HTTPS wajib, serta proteksi terhadap XSS/CSRF sebelum aplikasi menyimpan data pengguna maupun transaksi nyata.

**Pemeliharaan:**
- Pembaruan katalog & harga dilakukan berkala melalui panel admin internal.
- Monitoring stok otomatis mencegah produk habis tetap tampil dapat dibeli.
- Rencana ke depan: backup data berkala, changelog versi, serta pipeline CI sederhana (mis. GitHub Actions) untuk memvalidasi build sebelum deploy ke GitHub Pages.

---

## 9. Rencana Penggunaan Data Analytics

Halaman **Business Architecture** pada website menampilkan dashboard metrik ringkas (saat ini bernilai dummy untuk keperluan demonstrasi, kecuali *Gross Settlement Revenue* yang dihitung otomatis dari riwayat transaksi nyata di `localStorage`):

| Metrik | Fungsi dalam Pengambilan Keputusan |
|---|---|
| **Bounce Rate** | Mengukur persentase pengunjung yang keluar tanpa interaksi — dipakai untuk mengevaluasi efektivitas halaman utama/banner promosi. |
| **Conversion Ratio** | Persentase pengunjung yang menyelesaikan transaksi — indikator utama efektivitas funnel checkout. |
| **Total Hits Unique Visitors** | Mengukur jangkauan/traffic situs untuk evaluasi efektivitas kampanye promosi. |
| **Gross Settlement Revenue** | Total pendapatan dari transaksi tercatat — dasar evaluasi performa penjualan per periode. |

**Rencana integrasi nyata:** menghubungkan situs dengan **Google Analytics 4 (GA4)** untuk melacak *event* seperti `add_to_cart`, `begin_checkout`, dan `purchase` secara otomatis, sehingga metrik di atas tidak lagi bersifat statis/dummy melainkan real-time. Data ini akan digunakan untuk mengevaluasi kategori produk terlaris, titik drop-off dalam funnel checkout, serta efektivitas kanal promosi guna mendukung keputusan strategi harga dan stok di masa depan.

---

## 10. Dokumentasi Teknis

- **Stack:** HTML5, CSS3 (custom properties/Flexbox/Grid, tanpa framework CSS), JavaScript ES6+ murni (vanilla, tanpa library/framework).
- **Penyimpanan data:** `localStorage` browser (menyimulasikan database produk, keranjang, sesi login, dan riwayat transaksi tanpa backend).
- **Fitur interaktif utama:**
  - Filter & pencarian produk berdasarkan kategori dan kata kunci (sinkron antara search bar header & sidebar).
  - Sorting produk (harga naik/turun, nama A–Z).
  - Keranjang belanja dinamis (tambah, ubah kuantitas, hapus, total otomatis).
  - Validasi form login dan checkout.
  - Simulasi login berbasis role (*customer* vs *admin*) dengan tampilan berbeda.
  - Panel admin: kelola stok produk & lihat riwayat transaksi.
  - Notifikasi toast dan modal/overlay dengan transisi halus (smooth animation).
  - Desain responsif (media query) untuk desktop, tablet, dan mobile.

---

## 11. Struktur Folder Proyek

```
artisuria/
├── index.html          # Struktur halaman utama (katalog, overview bisnis, admin panel)
├── script.js           # Seluruh logika interaktif (cart, filter, checkout, auth, admin)
├── README.md           # Dokumentasi bisnis & teknis (dokumen ini)
└── images/              # Asset visual pendukung
    ├── hero-banner.svg
    ├── kategori-cat-air.svg
    ├── kategori-kertas.svg
    ├── kategori-kuas.svg
    ├── kategori-pensil.svg
    └── kategori-pena.svg
```

> Catatan: file `index.html` dan `script.js` yang sudah berjalan **tidak diubah** pada pembaruan ini untuk menjaga stabilitas fungsionalitas yang sudah teruji. Asset pada folder `images/` bersifat pelengkap dokumentasi/branding dan dapat diintegrasikan ke markup di kemudian hari secara terpisah dan hati-hati.

---

## 12. Cara Menjalankan Secara Lokal

1. Clone atau unduh repository ini.
2. Pastikan file `index.html`, `script.js`, dan folder `images/` berada dalam satu direktori.
3. Buka `index.html` langsung di browser (double-click), **atau** jalankan local server sederhana, contoh:
   ```bash
   npx serve .
   # atau
   python -m http.server 8000
   ```
4. Akses `http://localhost:8000` pada browser.

---

## 13. Deployment ke GitHub Pages

1. Push seluruh isi folder proyek ke repository GitHub (branch `main`).
2. Buka **Settings → Pages** pada repository.
3. Pilih source: branch `main`, folder `/ (root)`.
4. Simpan — GitHub akan menerbitkan live URL dalam format `https://<username>.github.io/<nama-repo>/`.
5. Tempelkan live URL tersebut pada bagian atas README ini dan pada laporan pengumpulan tugas.

---

## 14. Akun Simulasi (Demo Login)

| Role | Email | Password |
|---|---|---|
| Customer | `user@artisuria.com` | `user123` |
| Admin | `admin@artisuria.com` | `admin123` |

---

## 15. Asset Gambar

Folder `images/` berisi ilustrasi vektor (SVG) buatan sendiri bertema perlengkapan seni, dibuat agar sesuai ketentuan tugas *"gunakan sumber gambar gratis (Unsplash, Pexels, atau buat sendiri)"* tanpa risiko masalah lisensi:

- `hero-banner.svg` — ilustrasi banner utama (palet, kuas, pensil warna).
- `kategori-cat-air.svg`, `kategori-kertas.svg`, `kategori-kuas.svg`, `kategori-pensil.svg`, `kategori-pena.svg` — ikon representatif tiap kategori produk, mengikuti palet warna brand (`#E91E63` sebagai warna utama, `#0f2942` sebagai warna aksen gelap).

Asset ini disiapkan sebagai pelengkap dokumentasi/opsi branding dan **belum ditautkan** ke dalam `index.html` agar tidak mengubah fungsionalitas yang sudah stabil. Pengintegrasian dapat dilakukan menyusul secara terpisah bila diinginkan.

---

## 16. Batasan & Pengembangan Selanjutnya

Proyek ini merupakan **prototipe akademik** dengan batasan yang disadari secara sengaja:

- Tidak terdapat backend/database sungguhan — seluruh data disimpan di `localStorage` browser (bersifat lokal per perangkat/browser, bukan lintas perangkat).
- Payment gateway bersifat simulasi (dummy), belum terhubung ke API pembayaran sungguhan.
- Autentikasi bersifat simulasi tanpa enkripsi/hashing produksi.

**Rencana pengembangan lanjutan:** migrasi ke backend nyata (Node.js/Express + database), integrasi API Midtrans/Xendit resmi, penerapan Google Analytics 4 sungguhan, serta penguatan keamanan (hashing password, JWT, validasi sisi server) sebelum digunakan untuk transaksi bisnis riil.

---

*Dokumen ini disusun sebagai bagian dari pemenuhan ketentuan pengumpulan Tugas Besar KAIT II — Business Overview & Technical Documentation.*
