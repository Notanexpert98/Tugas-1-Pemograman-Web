// ===== DASHBOARD.JS =====
// Logika untuk halaman dashboard: greeting, navigasi, dan tabel laporan

// ===== CEK STATUS LOGIN =====
// Jika user belum login, redirect ke halaman login
window.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  // Tampilkan nama user dan role di navbar
  var nama = sessionStorage.getItem('userNama') || 'User';
  var role = sessionStorage.getItem('userRole');
  var userDisplay = role ? nama + ' (' + role + ')' : nama;
  document.getElementById('navUserName').textContent = userDisplay;

  // Set greeting berdasarkan waktu lokal
  setGreeting(nama);

  // Render tabel-tabel laporan
  renderMonitoring();
  renderRekap();
  renderHistori();
});

// ===== FUNGSI GREETING =====
function setGreeting(nama) {
  var jam = new Date().getHours();
  var greeting = '';

  if (jam >= 5 && jam < 12) {
    greeting = 'Selamat Pagi';
  } else if (jam >= 12 && jam < 15) {
    greeting = 'Selamat Siang';
  } else if (jam >= 15 && jam < 18) {
    greeting = 'Selamat Sore';
  } else {
    greeting = 'Selamat Malam';
  }

  document.getElementById('greetingText').textContent = greeting + ', ' + nama + '! 👋';
}

// ===== FUNGSI LOGOUT =====
function logout() {
  // Hapus data session
  sessionStorage.clear();
  // Redirect ke halaman login
  window.location.href = 'login.html';
}

// ===== FUNGSI TAMPILKAN / SEMBUNYIKAN SECTION =====
function tampilkanSection(sectionId) {
  // Sembunyikan semua section terlebih dahulu
  var sections = document.querySelectorAll('.content-container');
  sections.forEach(function(section) {
    section.classList.add('hidden');
  });
  // Tampilkan section yang dipilih
  document.getElementById(sectionId).classList.remove('hidden');
  // Scroll ke section
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function sembunyikanSection(sectionId) {
  document.getElementById(sectionId).classList.add('hidden');
  var menu = document.getElementById('sectionMenu');
  if (menu) {
    menu.classList.remove('hidden');
  }
}

// ===== RENDER TABEL MONITORING =====
function renderMonitoring() {
  var tbody = document.getElementById('monitoringTableBody');
  tbody.innerHTML = '';

  for (var i = 0; i < dataMonitoringDO.length; i++) {
    var item = dataMonitoringDO[i];
    var tr = document.createElement('tr');

    // Tentukan kelas progress bar berdasarkan persentase
    var progressClass = 'low';
    if (item.progress > 70) progressClass = 'high';
    else if (item.progress > 30) progressClass = 'medium';

    // Tentukan kelas status badge
    var statusClass = item.status.toLowerCase();

    tr.innerHTML = 
      '<td>' + item.nomorDO + '</td>' +
      '<td>' + item.nama + '</td>' +
      '<td>' + item.tujuan + '</td>' +
      '<td><span class="status-badge ' + statusClass + '">' + item.status + '</span></td>' +
      '<td>' +
        '<div class="progress-bar-container">' +
          '<div class="progress-bar ' + progressClass + '" style="width: ' + item.progress + '%"></div>' +
        '</div>' +
        '<small style="color:#888;">' + item.progress + '%</small>' +
      '</td>';

    tbody.appendChild(tr);
  }
}

// ===== RENDER TABEL REKAP =====
function renderRekap() {
  var tbody = document.getElementById('rekapTableBody');
  tbody.innerHTML = '';

  for (var i = 0; i < dataRekapBahanAjar.length; i++) {
    var item = dataRekapBahanAjar[i];
    var tr = document.createElement('tr');

    tr.innerHTML = 
      '<td>' + item.kode + '</td>' +
      '<td>' + item.nama + '</td>' +
      '<td>' + item.totalDikirim + '</td>' +
      '<td>' + item.totalDiterima + '</td>' +
      '<td>' + item.sisaStok + '</td>';

    tbody.appendChild(tr);
  }
}

// ===== RENDER TABEL HISTORI =====
function renderHistori() {
  var tbody = document.getElementById('historiTableBody');
  tbody.innerHTML = '';

  for (var i = 0; i < dataHistoriTransaksi.length; i++) {
    var item = dataHistoriTransaksi[i];
    var tr = document.createElement('tr');

    // Tentukan kelas status badge
    var statusClass = '';
    if (item.status === 'Selesai') statusClass = 'diterima';
    else if (item.status === 'Dikirim') statusClass = 'dikirim';
    else if (item.status === 'Diproses') statusClass = 'diproses';

    tr.innerHTML = 
      '<td>' + item.tanggal + '</td>' +
      '<td>' + item.nomorDO + '</td>' +
      '<td>' + item.nama + '</td>' +
      '<td>' + item.bahanAjar + '</td>' +
      '<td>' + item.jumlah + '</td>' +
      '<td>' + item.total + '</td>' +
      '<td><span class="status-badge ' + statusClass + '">' + item.status + '</span></td>';

    tbody.appendChild(tr);
  }
}
