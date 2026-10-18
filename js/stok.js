// ===== STOK.JS =====
// Logika untuk halaman informasi stok bahan ajar
// Menampilkan data dari dataBahanAjar dan fitur tambah baris baru via DOM

// ===== CEK STATUS LOGIN =====
window.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  // Tampilkan nama user di navbar
  var nama = sessionStorage.getItem('userNama') || 'User';
  var role = sessionStorage.getItem('userRole');
  var userDisplay = role ? nama + ' (' + role + ')' : nama;
  document.getElementById('navUserName').textContent = userDisplay;

  // Render tabel stok dari data.js
  renderTabelStok();
});

// ===== FUNGSI LOGOUT =====
function logout() {
  sessionStorage.clear();
  window.location.href = 'login.html';
}

// ===== RENDER TABEL STOK =====
// Membaca data dari dataBahanAjar dan menampilkannya di tabel secara dinamis
function renderTabelStok() {
  var tbody = document.getElementById('stokTableBody');
  tbody.innerHTML = ''; // Kosongkan tabel terlebih dahulu

  for (var i = 0; i < dataBahanAjar.length; i++) {
    var item = dataBahanAjar[i];
    tambahBarisTabel(tbody, i + 1, item);
  }
}

// ===== FUNGSI TAMBAH BARIS KE TABEL =====
// Menggunakan JavaScript DOM (createElement, appendChild)
function tambahBarisTabel(tbody, nomor, item) {
  // Buat elemen <tr>
  var tr = document.createElement('tr');

  // Buat elemen <td> untuk setiap kolom
  var tdNo = document.createElement('td');
  tdNo.textContent = nomor;

  var tdLokasi = document.createElement('td');
  tdLokasi.textContent = item.kodeLokasi || '-';

  var tdKode = document.createElement('td');
  tdKode.textContent = item.kodeBarang || item.kode || '-';

  var tdNama = document.createElement('td');
  tdNama.textContent = item.namaBarang || item.nama || '-';

  var tdJenis = document.createElement('td');
  tdJenis.textContent = item.jenisBarang || item.kategori || '-';

  var tdEdisi = document.createElement('td');
  tdEdisi.textContent = item.edisi || '-';

  var tdStok = document.createElement('td');
  tdStok.textContent = item.stok;

  // Tambahkan semua <td> ke <tr> menggunakan appendChild
  tr.appendChild(tdNo);
  tr.appendChild(tdLokasi);
  tr.appendChild(tdKode);
  tr.appendChild(tdNama);
  tr.appendChild(tdJenis);
  tr.appendChild(tdEdisi);
  tr.appendChild(tdStok);

  // Tambahkan <tr> ke <tbody> menggunakan appendChild
  tbody.appendChild(tr);
}

// ===== FUNGSI TAMBAH STOK BARU =====
// Menambahkan baris stok baru ke tabel menggunakan JavaScript DOM
function tambahStok() {
  // Ambil nilai dari form input
  var kodeLokasi = document.getElementById('inputKodeLokasi').value.trim();
  var kodeBarang = document.getElementById('inputKodeBarang').value.trim();
  var namaBarang = document.getElementById('inputNamaBarang').value.trim();
  var jenisBarang = document.getElementById('inputJenisBarang').value;
  var edisi = document.getElementById('inputEdisi').value.trim();
  var stok = document.getElementById('inputStok').value.trim();

  // Validasi: field penting harus diisi
  if (!kodeLokasi || !kodeBarang || !namaBarang || !stok) {
    tampilkanStokAlert('error', 'Semua field wajib (Kode Lokasi, Kode Barang, Nama, Stok) harus diisi!');
    return;
  }

  // Validasi: stok harus angka positif
  if (parseInt(stok) < 0 || isNaN(parseInt(stok))) {
    tampilkanStokAlert('error', 'Stok harus berupa angka positif!');
    return;
  }

  // Buat object data baru sesuai skema API
  var dataBaru = {
    kodeLokasi: kodeLokasi,
    kodeBarang: kodeBarang,
    namaBarang: namaBarang,
    jenisBarang: jenisBarang,
    edisi: edisi || '1',
    stok: parseInt(stok),
    cover: '',
    // kompatibilitas
    kode: kodeBarang,
    nama: namaBarang,
    kategori: jenisBarang
  };

  // Tambahkan ke array dataBahanAjar
  dataBahanAjar.push(dataBaru);

  // Tambahkan baris baru ke tabel menggunakan DOM
  var tbody = document.getElementById('stokTableBody');
  var nomorBaru = tbody.rows.length + 1;
  tambahBarisTabel(tbody, nomorBaru, dataBaru);

  // Reset form input
  document.getElementById('inputKodeLokasi').value = '';
  document.getElementById('inputKodeBarang').value = '';
  document.getElementById('inputNamaBarang').value = '';
  document.getElementById('inputJenisBarang').selectedIndex = 0;
  document.getElementById('inputEdisi').value = '';
  document.getElementById('inputStok').value = '';

  // Tampilkan pesan sukses
  tampilkanStokAlert('success', 'Bahan ajar "' + namaBarang + '" (' + kodeBarang + ') berhasil ditambahkan!');
}

// ===== FUNGSI TAMPILKAN ALERT =====
function tampilkanStokAlert(tipe, pesan) {
  var alertDiv = document.getElementById('stokAlert');
  var alertIcon = document.getElementById('stokAlertIcon');
  var alertMsg = document.getElementById('stokAlertMessage');

  if (tipe === 'error') {
    alertDiv.className = 'alert alert-error';
    alertIcon.textContent = '⚠️';
  } else {
    alertDiv.className = 'alert alert-success';
    alertIcon.textContent = '✅';
  }

  alertMsg.textContent = pesan;

  // Sembunyikan alert setelah 3 detik
  setTimeout(function() {
    alertDiv.className = 'alert hidden';
  }, 3000);
}
