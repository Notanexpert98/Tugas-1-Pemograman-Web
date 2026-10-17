# 📋 Issue: Pembuatan Web Aplikasi Front-End — Tugas 1 Pemrograman Web

## Deskripsi Umum

Membuat sebuah web aplikasi sederhana **Front-End only** (tanpa Back-End). Seluruh data yang dibutuhkan **tidak dibaca dari database**, melainkan disimpan dan dibaca dari file JavaScript (`data.js`) yang dilampirkan dalam proyek.

---

## 🗂️ Struktur File

```
Tugas-1-Pemograman-Web/
├── index.html              → redirect ke login.html
├── login.html              → Halaman Login
├── dashboard.html          → Dashboard Menu
├── tracking.html           → Tracking Pengiriman (Delivery Order)
├── stok.html               → Informasi Stok Bahan Ajar
├── css/
│   └── style.css           → Stylesheet utama
├── js/
│   ├── data.js             → Data dummy (users, bahan ajar, tracking, dll.)
│   ├── login.js            → Logika halaman login
│   ├── dashboard.js        → Logika halaman dashboard
│   ├── tracking.js         → Logika halaman tracking
│   └── stok.js             → Logika halaman stok bahan ajar
└── issue.md                → Dokumen ini
```

---

## 📌 Halaman & Fitur yang Harus Dibuat

### 1. Halaman Login (`login.html`)

| Komponen        | Detail                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Input**       | Email dan Password                                                                                       |
| **Tombol**      | "Login"                                                                                                  |
| **Validasi**    | Jika email/password **tidak sesuai** dengan data di `data.js`, munculkan **pop-up / alert** berisi: _"Email/password yang Anda masukkan salah"_ |
| **Login Sukses**| Redirect ke `dashboard.html`                                                                             |

**Fitur Tambahan:**

- **Tombol "Lupa Password"** — Ketika diklik, tampilkan **modal box / pop-up** berisi form atau informasi reset password.
- **Tombol "Daftar"** — Ketika diklik, tampilkan **modal box / pop-up** berisi form pendaftaran akun baru.

**Data referensi di `data.js`:**
```js
const dataUsers = [
  { email: "admin@untan.ac.id", password: "admin123", nama: "Administrator" },
  { email: "mahasiswa@untan.ac.id", password: "mhs123", nama: "Budi Santoso" },
  // ... tambahan user lainnya
];
```

---

### 2. Dashboard Menu (`dashboard.html`)

| Komponen               | Detail                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **Greeting Dinamis**   | Tampilkan sapaan berdasarkan waktu lokal: _"Selamat Pagi"_, _"Selamat Siang"_, atau _"Selamat Sore"_ |
| **Nama User**          | Tampilkan nama user yang sedang login (disimpan di `localStorage` atau `sessionStorage`)             |

**Menu Navigasi (tombol/kartu) yang tersedia:**

| No | Menu                                    | Aksi / Tujuan                                                   |
| -- | --------------------------------------- | --------------------------------------------------------------- |
| 1  | Informasi Bahan Ajar                    | Navigasi ke `stok.html`                                         |
| 2  | Tracking Pengiriman                     | Navigasi ke `tracking.html`                                     |
| 3  | Laporan → Monitoring Progress DO        | Dapat berupa halaman terpisah atau section dalam dashboard       |
| 4  | Laporan → Rekap Bahan Ajar              | Dapat berupa halaman terpisah atau section dalam dashboard       |
| 5  | Histori Transaksi Bahan Ajar            | Menampilkan tabel histori transaksi dari data dummy di `data.js` |

**Ketentuan Greeting:**

```
Jam 05:00 – 11:59  → "Selamat Pagi"
Jam 12:00 – 14:59  → "Selamat Siang"
Jam 15:00 – 17:59  → "Selamat Sore"
Jam 18:00 – 04:59  → "Selamat Malam"
```

---

### 3. Tracking Pengiriman / Delivery Order (`tracking.html`)

| Komponen                | Detail                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Input**               | Nomor Delivery Order (DO)                                                                          |
| **Tombol**              | "Cari"                                                                                             |
| **Validasi**            | Jika nomor DO tidak ditemukan, tampilkan pesan bahwa data tidak ditemukan                           |

**Ketika tombol "Cari" ditekan dan data ditemukan, tampilkan:**

| Informasi              | Keterangan                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| Nama Mahasiswa         | Nama penerima paket                                                                                 |
| Status Pengiriman      | Disimulasikan dengan **progress bar**, **warna indikator**, **tabel**, atau **list** (bebas kreatif)|
| Detail Ekspedisi       | Nama jasa ekspedisi yang digunakan                                                                  |
| Tanggal Kirim          | Tanggal pengiriman paket                                                                            |
| Jenis Paket            | Jenis/kategori paket yang dikirim                                                                   |
| Total Pembayaran       | Biaya total pengiriman (format Rupiah)                                                              |

**Contoh data referensi di `data.js`:**
```js
const dataTracking = [
  {
    nomorDO: "DO-2024-001",
    namaMahasiswa: "Budi Santoso",
    statusPengiriman: "Dalam Perjalanan",  // "Diproses", "Dalam Perjalanan", "Diterima"
    progressPersen: 60,
    detailEkspedisi: "JNE Express",
    tanggalKirim: "2024-10-10",
    jenisPaket: "Buku Cetak Reguler",
    totalPembayaran: 150000
  },
  // ... tambahan data lainnya
];
```

**Catatan Kreatifitas:**
- Status pengiriman bisa ditampilkan sebagai **progress bar berwarna** (merah → kuning → hijau).
- Bisa juga menggunakan **stepper/timeline** (Diproses → Dikirim → Dalam Perjalanan → Diterima).

---

### 4. Informasi Stok Bahan Ajar (`stok.html`)

| Komponen                     | Detail                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| **Sumber Data**              | Dibaca secara **dinamis** dari variabel `dataBahanAjar` di `data.js`                     |
| **Tampilan**                 | Tabel yang menampilkan seluruh data bahan ajar                                           |
| **Fitur Tambah**             | Form/tombol untuk **menambahkan baris stok baru** menggunakan **JavaScript DOM Manipulation** |

**Kolom Tabel yang ditampilkan:**

| No | Kolom             | Keterangan                        |
| -- | ----------------- | --------------------------------- |
| 1  | Kode Bahan Ajar   | Kode unik bahan ajar              |
| 2  | Nama Bahan Ajar   | Judul/nama bahan ajar             |
| 3  | Kategori           | Kategori bahan ajar               |
| 4  | Stok Tersedia      | Jumlah stok yang tersedia          |
| 5  | Harga Satuan       | Harga per unit (format Rupiah)     |

**Contoh data referensi di `data.js`:**
```js
const dataBahanAjar = [
  { kode: "BA-001", nama: "Algoritma & Pemrograman", kategori: "Buku", stok: 50, harga: 75000 },
  { kode: "BA-002", nama: "Basis Data Lanjut", kategori: "Modul", stok: 30, harga: 45000 },
  { kode: "BA-003", nama: "Jaringan Komputer", kategori: "Buku", stok: 20, harga: 85000 },
  // ... tambahan data lainnya
];
```

**Fitur Tambah Stok Baru:**
- Sediakan form input (bisa inline di atas tabel atau dalam modal).
- Ketika user mengisi form dan klik tombol "Tambah", baris baru ditambahkan ke tabel **secara dinamis menggunakan JavaScript DOM** (`createElement`, `appendChild`, dll.).
- Data baru **tidak perlu persisten** (hilang saat halaman di-refresh — karena tidak ada backend).

---

## 📁 File Data (`data.js`)

Semua data dummy dikumpulkan dalam satu file `js/data.js` dengan variabel-variabel berikut:

```js
// ===== DATA USERS =====
const dataUsers = [ ... ];

// ===== DATA BAHAN AJAR (STOK) =====
const dataBahanAjar = [ ... ];

// ===== DATA TRACKING PENGIRIMAN =====
const dataTracking = [ ... ];

// ===== DATA HISTORI TRANSAKSI =====
const dataHistoriTransaksi = [ ... ];

// ===== DATA LAPORAN / MONITORING =====
const dataMonitoringDO = [ ... ];
const dataRekapBahanAjar = [ ... ];
```

---

## ✅ Checklist Pengerjaan

- [ ] **Setup Proyek** — Buat struktur folder dan file sesuai spesifikasi
- [ ] **`data.js`** — Siapkan seluruh data dummy
- [ ] **`login.html`** — Form login + validasi + modal Lupa Password & Daftar
- [ ] **`dashboard.html`** — Greeting dinamis + menu navigasi lengkap
- [ ] **`tracking.html`** — Input pencarian DO + tampilan hasil tracking
- [ ] **`stok.html`** — Tabel dinamis + fitur tambah baris baru via DOM
- [ ] **`style.css`** — Styling responsif dan konsisten di semua halaman
- [ ] **Testing** — Pastikan semua fitur berjalan dengan baik di browser
- [ ] **Push ke GitHub** — Commit dan push ke repository

---

## 🛠️ Teknologi yang Digunakan

| Teknologi  | Keterangan                       |
| ---------- | -------------------------------- |
| HTML5      | Struktur halaman                 |
| CSS3       | Styling dan layout               |
| JavaScript | Logika, DOM manipulation, event  |

> **Catatan:** Tidak menggunakan framework/library (vanilla HTML, CSS, JS). Tidak ada backend atau database.

---

## 📝 Catatan Tambahan

1. Gunakan `localStorage` atau `sessionStorage` untuk menyimpan informasi user yang login agar bisa ditampilkan di dashboard.
2. Format mata uang menggunakan format **Rupiah** (contoh: `Rp 75.000`).
3. Pastikan tampilan **responsif** dan rapi di berbagai ukuran layar.
4. Berikan komentar pada kode JavaScript agar mudah dipahami.
