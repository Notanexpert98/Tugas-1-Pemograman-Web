// ===== LOGIN.JS =====
// Logika untuk halaman login, modal lupa password, dan modal daftar

// Fungsi untuk membuka modal
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Inisialisasi event listener saat DOM siap
window.addEventListener('DOMContentLoaded', function() {
  var btnLupa = document.getElementById('btnLupaPassword');
  if (btnLupa) {
    btnLupa.addEventListener('click', function(e) {
      e.preventDefault();
      openModal('modalLupaPassword');
    });
  }

  var btnDaftar = document.getElementById('btnDaftar');
  if (btnDaftar) {
    btnDaftar.addEventListener('click', function(e) {
      e.preventDefault();
      openModal('modalDaftar');
    });
  }

  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      prosesLogin();
    });
  }
});

// ===== PROSES LOGIN =====
function prosesLogin() {

  // Ambil nilai input
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  // Validasi input kosong
  if (!email || !password) {
    tampilkanAlert('Email dan password harus diisi!');
    return;
  }

  // Cari user yang cocok di dataPengguna / dataUsers
  var listPengguna = (typeof dataPengguna !== 'undefined') ? dataPengguna : dataUsers;
  var userDitemukan = null;
  for (var i = 0; i < listPengguna.length; i++) {
    if (listPengguna[i].email === email && listPengguna[i].password === password) {
      userDitemukan = listPengguna[i];
      break;
    }
  }

  if (userDitemukan) {
    // Login berhasil - simpan info user ke sessionStorage
    sessionStorage.setItem('userNama', userDitemukan.nama);
    sessionStorage.setItem('userEmail', userDitemukan.email);
    sessionStorage.setItem('userRole', userDitemukan.role || '');
    sessionStorage.setItem('userLokasi', userDitemukan.lokasi || '');
    sessionStorage.setItem('isLoggedIn', 'true');

    // Redirect ke dashboard
    window.location.href = 'dashboard.html';
  } else {
    // Login gagal - tampilkan pop-up / alert
    alert('Email/password yang Anda masukkan salah');
    tampilkanAlert('Email/password yang Anda masukkan salah');
  }
}

// Fungsi untuk menampilkan alert error
function tampilkanAlert(pesan) {
  var alertBox = document.getElementById('alertBox');
  var alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = pesan;
  alertBox.classList.remove('hidden');

  // Sembunyikan alert setelah 4 detik
  setTimeout(function() {
    alertBox.classList.add('hidden');
  }, 4000);
}

// ===== PROSES LUPA PASSWORD =====
function resetPassword() {
  var resetEmail = document.getElementById('resetEmail').value.trim();
  if (!resetEmail) {
    alert('Masukkan email Anda!');
    return;
  }
  // Simulasi pengiriman email reset
  var resetAlert = document.getElementById('resetAlert');
  resetAlert.classList.remove('hidden');
  setTimeout(function() {
    resetAlert.classList.add('hidden');
  }, 3000);
}

// ===== PROSES DAFTAR AKUN =====
function daftarAkun() {
  var nama = document.getElementById('regNama').value.trim();
  var email = document.getElementById('regEmail').value.trim();
  var password = document.getElementById('regPassword').value.trim();
  var konfirmasi = document.getElementById('regKonfirmasi').value.trim();

  var alertDiv = document.getElementById('daftarAlert');
  var alertIcon = document.getElementById('daftarAlertIcon');
  var alertMsg = document.getElementById('daftarAlertMessage');

  // Validasi input
  if (!nama || !email || !password || !konfirmasi) {
    alertDiv.className = 'alert alert-error';
    alertIcon.textContent = '⚠️';
    alertMsg.textContent = 'Semua field harus diisi!';
    return;
  }

  if (password !== konfirmasi) {
    alertDiv.className = 'alert alert-error';
    alertIcon.textContent = '⚠️';
    alertMsg.textContent = 'Password dan konfirmasi password tidak cocok!';
    return;
  }

  // Simulasi pendaftaran berhasil
  alertDiv.className = 'alert alert-success';
  alertIcon.textContent = '✅';
  alertMsg.textContent = 'Pendaftaran berhasil! Silakan login.';

  // Reset form
  document.getElementById('regNama').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regPassword').value = '';
  document.getElementById('regKonfirmasi').value = '';

  // Tutup modal setelah 2 detik
  setTimeout(function() {
    closeModal('modalDaftar');
    alertDiv.className = 'alert hidden';
  }, 2000);
}
