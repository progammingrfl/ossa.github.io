// Periksa apakah browser mendukung geolocation
if ("geolocation" in navigator) {
    // Minta izin pengguna untuk mengakses lokasi
    navigator.geolocation.getCurrentPosition(function(position) {
      // Callback yang akan dijalankan jika pengguna memberikan izin
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      // Menampilkan informasi lokasi dalam bentuk teks pada halaman web
      var locationElement = document.getElementById("lokasi");
      locationElement.innerHTML = "Lokasi Anda: " + latitude + ", " + longitude;
    }, function(error) {
      // Callback yang akan dijalankan jika pengguna menolak izin atau terjadi kesalahan
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.log("Izin lokasi ditolak oleh pengguna.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Informasi lokasi tidak tersedia.");
          break;
        case error.TIMEOUT:
          console.log("Waktu permintaan lokasi habis.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("Terjadi kesalahan yang tidak diketahui.");
          break;
      }
    });
  } else {
    console.log("Browser Anda tidak mendukung geolocation.");
  }