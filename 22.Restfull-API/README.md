# Introduction Restfull API

## API

API (Aplication Programming Interface) adalah sebuah function atau prosedur yang digunakan agar aplikasi dapat mendapatkan akses fitur atau data dari aplikasi lain, server lain ataupun servis lainnya. Intinya API ini dapat menjadi jembatan antar aplikasi, server atau servis lainnya. Contohnya untuk berkomunikasi antara Front-End dan Back-End dalam memperlihatkan data yang ada di database yang dibuat oleh Back-End, maka perlu ada sebuah jembatan (API) untuk digunakan Front-End dalam mengambil data tersebut.

## Restfull API

RESTful API (Representational State Transfer) adalah cara untuk menghubungkan aplikasi React dengan server untuk mengirim dan menerima data melalui HTTP. RESTful API menggunakan konsep HTTP request seperti **GET**, **POST**, **PUT**, **DELETE** untuk berkomunikasi dengan server.

Berikut adalah HTTP request method yang digunakan pada RESTful API:

- **GET**: Digunakan untuk mengambil data dari server. Biasanya digunakan untuk menampilkan data dari API ke dalam komponen React.
- **POST**: Digunakan untuk mengirim data baru ke server, misalnya saat pengguna mengirim form.
- **PUT**: Digunakan untuk memperbarui data yang sudah ada di server.
- **DELETE**: Digunakan untuk menghapus data di server.

## JSON

JSON (JavaScript Object Notation) adalah format data ringan yang digunakan untuk menyimpan dan mentransfer data antar sistem. JSON banyak digunakan dalam API untuk pertukaran data antara klien (seperti aplikasi web atau mobile) dan server.

### JSON hanya mendukung tipe data berikut:

- String: Contoh: `"adib"`.
- Number: Contoh: `17, 3.14`.
- Boolean: `true` atau `false`.
- Null: Digunakan untuk menunjukkan nilai kosong, misalnya: `null`.
- Array: Daftar elemen dengan tipe data apa pun: `[1, "text", true, { "key": "value" }]`.
- Object: Kumpulan pasangan kunci-nilai: `{ "key1": "value1", "key2": "value2" }`.

## HTTP Response Code

Berikut adalah code yang sering keluar dan perlu diketahui apa artinya:

- **200** OK: Permintaan berhasil dan respons dikirimkan
- **201** Created: Permintaan berhasil dan menghasilkan sumber daya baru, seperti ketika data berhasil ditambahkan.
- **204** No Content: Permintaan berhasil, tetapi tidak ada konten yang dikembalikan. Digunakan ketika data berhasil diproses tetapi tidak ada respons data yang perlu dikirim.
- **400** Bad Request: Permintaan tidak valid atau rusak, biasanya karena parameter atau sintaks permintaan yang salah.
- **401** Unauthorized: Permintaan membutuhkan autentikasi, seperti token atau login.
- **403** Forbidden: Klien tidak diizinkan mengakses sumber daya meskipun sudah diautentikasi.
- **404** Not Found: Sumber daya yang diminta tidak ditemukan di server.
- **405** Method Not Allowed: Metode HTTP yang digunakan tidak diizinkan untuk sumber daya tersebut.
- **500** Internal Server Error: Kesalahan pada server yang tidak diharapkan atau umum, seperti error konfigurasi atau bug.
- **503** Service Unavailable: Server tidak dapat memproses permintaan, biasanya karena sedang dalam pemeliharaan atau terlalu banyak lalu lintas.
