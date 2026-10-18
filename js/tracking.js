// ===== TRACKING.JS =====
// Logika untuk halaman tracking pengiriman

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
});

// ===== FUNGSI LOGOUT =====
function logout() {
  sessionStorage.clear();
  window.location.href = 'login.html';
}

// ===== FUNGSI CARI TRACKING =====
function cariTracking() {
  var nomorInput = document.getElementById('inputNomorDO').value.trim();
  var alertNotFound = document.getElementById('alertNotFound');
  var trackingResult = document.getElementById('trackingResult');

  // Sembunyikan hasil sebelumnya
  alertNotFound.classList.add('hidden');
  trackingResult.classList.add('hidden');

  // Validasi input kosong
  if (!nomorInput) {
    alertNotFound.classList.remove('hidden');
    return;
  }

  // Cari data di dataTracking (object map, lookup by key)
  var data = dataTracking[nomorInput];

  if (!data) {
    // Data tidak ditemukan
    alertNotFound.classList.remove('hidden');
    return;
  }

  // Data ditemukan - tampilkan informasi ringkasan
  document.getElementById('resultNomorDO').textContent = data.nomorDO;
  document.getElementById('resultNama').textContent = data.nama;
  document.getElementById('resultEkspedisi').textContent = data.ekspedisi;
  document.getElementById('resultTanggal').textContent = formatTanggal(data.tanggalKirim);
  document.getElementById('resultPaket').textContent = data.paket;
  document.getElementById('resultTotal').textContent = data.total;

  // Tampilkan status dengan badge warna (replace spasi dengan dash)
  var statusEl = document.getElementById('resultStatus');
  var statusClass = data.status.toLowerCase().replace(/\s+/g, '-');
  statusEl.innerHTML = '<span class="status-badge ' + statusClass + '">' + data.status + '</span>';

  // Render timeline perjalanan
  renderTimeline(data.perjalanan);

  // Tampilkan hasil
  trackingResult.classList.remove('hidden');

  // Scroll ke hasil
  trackingResult.scrollIntoView({ behavior: 'smooth' });
}

// ===== FUNGSI RENDER TIMELINE =====
function renderTimeline(perjalanan) {
  var container = document.getElementById('timelineContainer');
  container.innerHTML = '';

  for (var i = 0; i < perjalanan.length; i++) {
    var item = perjalanan[i];

    // Buat elemen timeline item
    var timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    // Format waktu untuk ditampilkan
    var waktuFormatted = formatWaktu(item.waktu);

    // Buat elemen waktu
    var waktuEl = document.createElement('div');
    waktuEl.className = 'timeline-waktu';
    waktuEl.textContent = waktuFormatted;

    // Buat elemen keterangan
    var ketEl = document.createElement('div');
    ketEl.className = 'timeline-keterangan';
    ketEl.textContent = item.keterangan;

    // Susun elemen
    timelineItem.appendChild(waktuEl);
    timelineItem.appendChild(ketEl);
    container.appendChild(timelineItem);
  }
}

// ===== FUNGSI FORMAT TANGGAL =====
// Mengubah format YYYY-MM-DD menjadi DD MMMM YYYY
function formatTanggal(tanggal) {
  var bulanNama = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  var parts = tanggal.split('-');
  var tahun = parts[0];
  var bulan = parseInt(parts[1]) - 1;
  var hari = parseInt(parts[2]);
  return hari + ' ' + bulanNama[bulan] + ' ' + tahun;
}

// ===== FUNGSI FORMAT WAKTU =====
// Mengubah format "YYYY-MM-DD HH:mm:ss" menjadi format yang lebih readable
function formatWaktu(waktu) {
  var parts = waktu.split(' ');
  var tanggal = formatTanggal(parts[0]);
  var jam = parts[1];
  return tanggal + ', ' + jam;
}

// Event listener untuk tombol Enter pada input
window.addEventListener('DOMContentLoaded', function() {
  var inputEl = document.getElementById('inputNomorDO');
  if (inputEl) {
    inputEl.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        cariTracking();
      }
    });
  }
});
