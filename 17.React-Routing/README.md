# React Routing

React routing adalah salah satu modul dalam react yang digunakan untuk navigasi dari satu page ke page lain. React routing ini berjalan di single page aplication, jadi maksudnya hanya ada satu halaman yang mengatur semua aktivitas yang terjadi pada aplikasi (bisanya pada halaman/file App.jsx). Dengan adanya react routing ini, waktu loading website jadi lebih cepat karena web hanya akan melakukan load pada component tertentu sesuai kebutuhan/tidak keseluruhan halaman.

## URL Parameter

Dalam implementasinya react routing menggunakan parameter URL untuk menetapkan nilainya di ULR halaman. Pada react juga terdapat Link dan Redirect. Link biasanya digunakan seperti a href dan memberikan history pada browse, sedangkan Redirect biasanya digunakan untuk aktifitas yang hanya munucul pada kondisi tertentu misalnya digunakan untuk halaman 404 dan sifatnya menimpa history pada browser.

## React Hook

Dalam React terdapat beberapa hook yang dapat digunakan.

1. useHistory, digunakan untuk memberikan akses pada instance riwayat yang digunakan untuk navigasi.
2. useLocation, digunakan untuk mengakses informasi mengenai lokasi atau URL yang sedang diakses oleh user di aplikasi.
3. useParams, digunakan untuk mengembalikan objek pasangan kunci/nilai parameter.
4. useRouteMatch, digunakan untuk mencocokan url untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender
