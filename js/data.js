// ============================================================
// FILE: data.js
// DESKRIPSI: Berisi semua data dummy / API data untuk aplikasi web
//            Sistem Distribusi Bahan Ajar Universitas Terbuka
// ============================================================

// ===== DATA PENGGUNA =====
// Daftar pengguna yang terdaftar dalam sistem
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

// Alias untuk kompatibilitas dataUsers
var dataUsers = dataPengguna;

// ===== DATA BAHAN AJAR (STOK) =====
// Daftar bahan ajar beserta kode lokasi, kode barang, edisi, stok, dan cover
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg",
    // Alias kompatibilitas
    kode: "ASIP4301",
    nama: "Pengantar Ilmu Komunikasi",
    kategori: "BMP"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg",
    kode: "EKMA4216",
    nama: "Manajemen Keuangan",
    kategori: "BMP"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg",
    kode: "EKMA4310",
    nama: "Kepemimpinan",
    kategori: "BMP"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg",
    kode: "BIOL4211",
    nama: "Mikrobiologi Dasar",
    kategori: "BMP"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpg",
    kode: "PAUD4401",
    nama: "Perkembangan Anak Usia Dini",
    kategori: "BMP"
  }
];

// ===== DATA TRACKING PENGIRIMAN (Object Map) =====
// Data pelacakan pengiriman paket delivery order (DO)
var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      }
    ]
  },
  "2023005678": {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  }
};

// ===== DATA HISTORI TRANSAKSI =====
// Riwayat transaksi pengiriman bahan ajar
var dataHistoriTransaksi = [
  { tanggal: "2025-08-25", nomorDO: "2023001234", nama: "Rina Wulandari", bahanAjar: "Pengantar Ilmu Komunikasi", jumlah: 2, total: "Rp 180.000", status: "Dalam Perjalanan" },
  { tanggal: "2025-08-25", nomorDO: "2023005678", nama: "Agus Pranoto", bahanAjar: "Perkembangan Anak Usia Dini", jumlah: 3, total: "Rp 220.000", status: "Dikirim" },
  { tanggal: "2025-09-01", nomorDO: "2023009012", nama: "Siti Marlina", bahanAjar: "Manajemen Keuangan", jumlah: 1, total: "Rp 95.000", status: "Diproses" },
  { tanggal: "2025-09-05", nomorDO: "2023003456", nama: "Doni Setiawan", bahanAjar: "Kepemimpinan", jumlah: 2, total: "Rp 150.000", status: "Selesai" },
  { tanggal: "2025-09-10", nomorDO: "2023007890", nama: "Admin SITTA", bahanAjar: "Mikrobiologi Dasar", jumlah: 5, total: "Rp 425.000", status: "Selesai" }
];

// ===== DATA MONITORING PROGRESS DO =====
// Data untuk memantau progress pengiriman Delivery Order (DO)
var dataMonitoringDO = [
  { nomorDO: "2023001234", nama: "Rina Wulandari", tujuan: "Jakarta Selatan", status: "Dalam Perjalanan", progress: 65 },
  { nomorDO: "2023005678", nama: "Agus Pranoto", tujuan: "Bandung / Cimahi", status: "Dikirim", progress: 85 },
  { nomorDO: "2023009012", nama: "Siti Marlina", tujuan: "Pusat (Puslaba)", status: "Diproses", progress: 25 },
  { nomorDO: "2023003456", nama: "Doni Setiawan", tujuan: "FISIP", status: "Diterima", progress: 100 },
  { nomorDO: "2023007890", nama: "Admin SITTA", tujuan: "Pusat", status: "Diterima", progress: 100 }
];

// ===== DATA REKAP BAHAN AJAR =====
// Rekapitulasi data bahan ajar berdasarkan dataBahanAjar
var dataRekapBahanAjar = [
  { kode: "ASIP4301", nama: "Pengantar Ilmu Komunikasi", totalDikirim: 150, totalDiterima: 142, sisaStok: 548 },
  { kode: "EKMA4216", nama: "Manajemen Keuangan", totalDikirim: 210, totalDiterima: 205, sisaStok: 392 },
  { kode: "EKMA4310", nama: "Kepemimpinan", totalDikirim: 120, totalDiterima: 118, sisaStok: 278 },
  { kode: "BIOL4211", nama: "Mikrobiologi Dasar", totalDikirim: 85, totalDiterima: 80, sisaStok: 165 },
  { kode: "PAUD4401", nama: "Perkembangan Anak Usia Dini", totalDikirim: 130, totalDiterima: 125, sisaStok: 204 }
];
