# 🎨 Artisuria — Best Fine Art Commerce

**Portal E-Commerce Perlengkapan Seni Rupa Premium**

![Status](https://img.shields.io/badge/status-prototype-blueviolet)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

> Tugas Besar (Final Project) — Mata Kuliah **KAIT II**, Program Studi Administrasi Bisnis, Semester Genap 2025/2026
> Judul Proyek: *"Membangun Website E-Commerce Fungsional dengan Integrasi Strategi Bisnis Modern"*

🔗 **Live Website (GitHub Pages):** `<isi-link-github-pages-di-sini>`
🔗 **Repository GitHub:** `<isi-link-repository-github-di-sini>`

---

## 📌 Daftar Isi

1. [Ringkasan Bisnis](#1-ringkasan-bisnis)
2. [Target Market & Segmentasi Pelanggan](#2-target-market--segmentasi-pelanggan)
3. [Analisis Pasar & Kompetitor](#3-analisis-pasar--kompetitor)
4. [Strategi Manajemen Produk & Katalog](#4-strategi-manajemen-produk--katalog)
5. [Model Bisnis & Revenue Stream](#5-model-bisnis--revenue-stream)
6. [Strategi Harga, Promosi & Diskon](#6-strategi-harga-promosi--diskon)
7. [Proses Checkout & Simulasi Payment Gateway](#7-proses-checkout--simulasi-payment-gateway)
8. [Rencana SEO, Keamanan & Pemeliharaan](#8-rencana-seo-keamanan--pemeliharaan)
9. [Rencana Penggunaan Data Analytics](#9-rencana-penggunaan-data-analytics)
10. [Technical Overview](#10-technical-overview)
11. [Struktur Folder](#11-struktur-folder)
12. [Cara Menjalankan Proyek](#12-cara-menjalankan-proyek)
13. [Akun Simulasi (Demo Login)](#13-akun-simulasi-demo-login)
14. [Deployment ke GitHub Pages](#14-deployment-ke-github-pages)
15. [Rencana Pengembangan Selanjutnya](#15-rencana-pengembangan-selanjutnya)

---

## 1. Ringkasan Bisnis

**Nama Bisnis:** Artisuria
**Tagline:** *Best Fine Art Commerce*
**Lokasi Operasional:** Lembang, Jawa Barat

**Deskripsi Bisnis**
Artisuria adalah platform e-commerce yang berfokus pada penjualan perlengkapan seni rupa (fine art supplies) impor dan lokal berkualitas premium — mulai dari cat air, kertas lukis, kuas, pensil warna, hingga pena arsiran. Artisuria lahir dari keresahan mahasiswa seni dan ilustrator lokal yang kesulitan mendapatkan alat lukis kelas profesional dengan harga yang wajar dan proses belanja yang mudah.

**Value Proposition**
- Kurasi produk 100% original dari brand internasional ternama (Schmincke, Winsor & Newton, Arches, Faber-Castell, Sakura, Holbein, Escoda, Derwent).
- Pengalaman belanja modern: filter & pencarian real-time, keranjang belanja interaktif, dan checkout yang sederhana.
- Transparansi stok dan harga, tanpa biaya tersembunyi.
- Edukasi berkelanjutan seputar medium gambar bagi seniman pemula maupun profesional.

---

## 2. Target Market & Segmentasi Pelanggan

| Segmen | Karakteristik | Kebutuhan Utama |
|---|---|---|
| Mahasiswa & Pelajar Seni Rupa/DKV | 18–24 tahun, budget terbatas namun butuh kualitas untuk tugas kuliah | Harga bersaing, paket set hemat |
| Ilustrator & Seniman Freelance | 22–35 tahun, aktif di media sosial dan komisi karya | Kualitas premium, konsistensi pigmen/warna |
| Hobbyist / Penggemar Seni Rupa | Segala usia, membeli untuk kepuasan pribadi | Kemudahan belanja, rekomendasi produk |
| Studio Seni & Lembaga Kursus | Pembelian dalam jumlah lebih besar | Ketersediaan stok, kemudahan reorder |

**Segmentasi Geografis:** fokus awal Pulau Jawa (khususnya Jawa Barat), dengan visi jangkauan nasional melalui pengiriman ke seluruh Indonesia.

---

## 3. Analisis Pasar & Kompetitor

Industri alat seni rupa di Indonesia tumbuh seiring meningkatnya minat generasi muda pada ilustrasi digital-analog, journaling, dan konten kreatif di media sosial. Pasar ini masih terfragmentasi antara toko alat tulis konvensional (kurang fokus pada seni profesional) dan marketplace besar (kurang kurasi, rawan produk tiruan).

**Kompetitor Tidak Langsung:**
- Marketplace umum (Tokopedia, Shopee) — jangkauan luas namun minim kurasi kualitas dan edukasi produk.
- Toko alat tulis/lukis fisik lokal — terbatas variasi brand impor dan jam operasional.

**Keunggulan Kompetitif Artisuria:**
- Kurasi ketat produk premium bersertifikasi original.
- Pengalaman belanja terfokus (niche), bukan platform umum.
- Konten deskriptif produk yang edukatif bagi pembeli awam.

---

## 4. Strategi Manajemen Produk & Katalog

Katalog Artisuria dikelompokkan ke dalam **5 kategori medium** utama agar navigasi pelanggan lebih mudah:

| Kategori | Contoh Produk |
|---|---|
| 🎨 Cat Air | Schmincke Horadam Set, Winsor & Newton Pan Set, Holbein Artists Gouache |
| 📄 Kertas | Canson Heritage Rag A4, Arches Watercolor Pad |
| 🖌️ Kuas | Raphael Kolinsky Brush No.6, Escoda Optimo Kolinsky Set |
| ✏️ Pensil | Faber-Castell Polychromos, Derwent Inktense 24 Tin |
| 🖊️ Pena | Sakura Pigma Micron Set |

Setiap produk dilengkapi dengan foto visual, deskripsi manfaat singkat, harga, dan indikator stok real-time. Manajemen stok dilakukan melalui **Internal Management Node** (panel admin) yang memungkinkan penyesuaian stok langsung tanpa perlu mengedit kode.

---

## 5. Model Bisnis & Revenue Stream

Artisuria menerapkan model bisnis **B2C E-Commerce (Direct-to-Consumer Retail)** dengan sumber pendapatan utama:

1. **Penjualan produk langsung (margin retail)** — selisih harga beli grosir/impor dengan harga jual ke konsumen akhir.
2. **Bundling/paket set** — potensi upsell melalui paket produk kombinasi (mis. set kuas + cat).
3. **Potensi masa depan:** kemitraan afiliasi dengan brand alat seni, kelas online berbayar (workshop), dan biaya konsinyasi bagi seniman lokal yang menitipkan produk.

---

## 6. Strategi Harga, Promosi & Diskon

- **Strategi Harga:** *premium pricing* yang mencerminkan kualitas produk impor, namun tetap kompetitif dibanding harga eceran tertinggi (HET) toko fisik melalui efisiensi biaya operasional digital.
- **Promosi:**
  - Banner promosi musiman di halaman utama (mis. *"Summer 2026 Collection"*).
  - Highlight kategori unggulan (*Exclusive Papers*, *Brushes & Tools*) pada hero section.
  - Widget **"Top Rated Supplies"** untuk mendorong penjualan produk favorit.
- **Diskon:** rencana penerapan diskon musiman/hari besar dan diskon kuantitas untuk pembelian studio/lembaga (di luar cakupan prototipe versi ini).

---

## 7. Proses Checkout & Simulasi Payment Gateway

Alur belanja pada prototipe ini disimulasikan penuh menggunakan `localStorage` browser (tanpa backend/database sungguhan):

1. Pelanggan **login** (akun simulasi) agar dapat menambahkan produk ke keranjang.
2. Produk ditambahkan ke **keranjang belanja (cart drawer)** — kuantitas dapat diubah, subtotal otomatis terhitung.
3. Klik **"Proceed To Invoice Settlement"** membuka form checkout (nama, alamat pengiriman, metode pembayaran).
4. Pelanggan memilih simulasi payment gateway:
   - **Midtrans Automated Bank Transfer** (dummy)
   - **Xendit Instant QRIS API** (dummy)
5. Setelah submit, sistem men-generate **invoice digital otomatis** (Invoice ID unik, rincian item, total pembayaran) dan stok produk otomatis berkurang.
6. Riwayat transaksi tersimpan dan dapat dipantau admin melalui **Inbound Orders Settlement Ledger**.

> ⚠️ **Catatan:** Payment gateway bersifat simulasi (dummy) untuk keperluan akademik — tidak ada transaksi finansial nyata yang terjadi.

---

## 8. Rencana SEO, Keamanan & Pemeliharaan

**SEO (Search Engine Optimization)**
- Penggunaan tag `<title>` dan `<meta description>` yang relevan dengan kata kunci "alat lukis premium", "cat air impor", dll.
- Struktur heading (H1–H4) yang semantik untuk membantu mesin pencari memahami hierarki konten.
- Rencana pengembangan: penambahan atribut `alt` pada seluruh gambar produk, sitemap.xml, dan URL yang ramah SEO (slug produk).

**Keamanan**
- Validasi input pada seluruh form (login, checkout) untuk mencegah data kosong/tidak valid.
- Rencana pengembangan lanjutan: enkripsi data sensitif, autentikasi berbasis token (JWT), dan migrasi dari `localStorage` ke backend server dengan database ter-enkripsi bila proyek dikembangkan ke produksi.

**Pemeliharaan (Maintenance)**
- Update rutin katalog produk & harga melalui panel admin.
- Monitoring performa website (kecepatan loading, responsivitas) secara berkala.
- Backup data transaksi secara periodik saat sudah menggunakan backend sungguhan.

---

## 9. Rencana Penggunaan Data Analytics

Website ini mengintegrasikan **dummy Google Analytics tracking** pada halaman **Business Architecture** untuk memantau metrik performa bisnis:

| Metrik | Kegunaan bagi Pengambilan Keputusan |
|---|---|
| **Bounce Rate** | Mengukur efektivitas halaman utama dalam menahan minat pengunjung; nilai tinggi mengindikasikan perlunya perbaikan UX/konten. |
| **Conversion Ratio** | Mengukur persentase pengunjung yang benar-benar melakukan checkout — dasar evaluasi strategi promosi & harga. |
| **Total Unique Visitors** | Mengukur jangkauan pemasaran (traffic) dari waktu ke waktu. |
| **Gross Settlement Revenue** | Total pendapatan riil dari transaksi tersimpan — dasar evaluasi produk terlaris & strategi restock. |

Data ini digunakan untuk mengevaluasi produk mana yang perlu dipromosikan lebih agresif, kategori mana yang perlu ditambah variasinya, serta menentukan waktu terbaik untuk kampanye diskon.

---

## 10. Technical Overview

### Tech Stack
- **HTML5** — struktur semantik & tiga tampilan utama (SPA-style dengan `view-section`).
- **CSS3 (Vanilla, Flexbox & Grid)** — desain modern, sepenuhnya *responsive* menggunakan media query, tanpa framework CSS eksternal.
- **JavaScript (Vanilla ES6+)** — seluruh logika interaktif dan penyimpanan data.

### Fitur Interaktif Utama
- ✅ **Filter & Search Produk** — berdasarkan kategori dan nama produk secara real-time.
- ✅ **Sorting Produk** — harga termurah/termahal, nama A–Z.
- ✅ **Keranjang Belanja Dinamis** — tambah, kurangi kuantitas, hapus item, kalkulasi subtotal otomatis.
- ✅ **Autentikasi Simulasi (Login/Logout)** — dua peran: *Customer* dan *Admin*.
- ✅ **Checkout & Invoice Generator** — form validasi + struk digital otomatis.
- ✅ **Panel Admin (Internal Management Node)** — kelola stok produk & lihat riwayat transaksi.
- ✅ **Business Overview Dashboard** — sejarah, visi-misi, dan ringkasan analitik bisnis.
- ✅ **Penyimpanan Persisten via `localStorage`** — data produk, cart, sesi login, dan riwayat transaksi tetap tersimpan walau halaman di-refresh.
- ✅ **Notifikasi Toast** — feedback real-time atas setiap aksi pengguna.
- ✅ **Fully Responsive Design** — optimal di desktop, tablet, dan mobile.

---

## 11. Struktur Folder

```
artisuria/
├── index.html          # Struktur halaman utama (katalog, overview, admin)
├── css/
│   └── style.css        # (opsional bila CSS dipisahkan dari index.html)
├── js/
│   └── script.js         # Seluruh logika aplikasi (produk, cart, auth, checkout, admin)
├── assets/
│   ├── schmincke.jpg
│   ├── winsor_newton.jpg
│   ├── canson.jpg
│   ├── arches.jpg
│   ├── raphael_brush.jpg
│   ├── faber_castell.jpg
│   ├── sakura_micron.jpg
│   ├── holbein_gouache.jpg
│   ├── escoda_brush.jpg
│   └── derwent_inktense.jpg
└── README.md            # Dokumentasi proyek (file ini)
```

> Catatan: Pada versi saat ini, CSS masih ditulis inline di dalam `index.html` (`<style>`). Disarankan memisahkannya ke `css/style.css` sebelum submission akhir agar struktur folder sesuai ketentuan tugas.

---

## 12. Cara Menjalankan Proyek

1. Clone repository:
   ```bash
   git clone <isi-link-repository-github-di-sini>
   cd artisuria
   ```
2. Buka file `index.html` langsung di browser, **atau** gunakan Live Server (VS Code extension) untuk pengalaman terbaik.
3. Tidak diperlukan instalasi dependency apa pun — proyek ini murni HTML/CSS/JS tanpa backend.

---

## 13. Akun Simulasi (Demo Login)

| Peran | Email | Password |
|---|---|---|
| Customer | `user@artisuria.com` | `user123` |
| Admin | `admin@artisuria.com` | `admin123` |

> Gunakan akun **Customer** untuk mencoba fitur belanja (tambah keranjang, checkout). Gunakan akun **Admin** untuk mengakses panel manajemen stok & riwayat transaksi.

---

## 14. Deployment ke GitHub Pages

1. Push seluruh source code ke branch `main` repository GitHub.
2. Masuk ke **Settings → Pages** pada repository.
3. Pilih source branch `main` dan folder root (`/`).
4. Simpan, tunggu beberapa menit hingga GitHub Pages menerbitkan live URL.
5. Tempel live URL tersebut pada bagian atas README ini.

---

## 15. Rencana Pengembangan Selanjutnya

- Migrasi penyimpanan data dari `localStorage` ke backend nyata (Node.js/Express + database) agar data tidak hilang antar perangkat.
- Integrasi payment gateway sungguhan (Midtrans/Xendit) menggantikan simulasi dummy.
- Penambahan fitur wishlist, review & rating produk, serta rekomendasi produk berbasis histori pembelian.
- Implementasi SEO teknis lanjutan (sitemap, schema markup) dan keamanan data (enkripsi, autentikasi token).

---

**© 2026 Artisuria Inc.** — Dikembangkan untuk keperluan akademik Mata Kuliah KAIT II, Program Studi Administrasi Bisnis.
