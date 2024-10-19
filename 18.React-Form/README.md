# React Form

Seperti namanya, rect form ini digunakan untuk menghandele inputan dari user. Dalam react ada beberapa bahkan banyak tipe form yang dapat digunakan. seperti `<input>` yang digunakan untuk inputan yang tidak panjang, `<textarea>` digunakan untuk inputan yang panjang, `<select>` digunakan untuk inputan yang pilihannya sudah ditentukan dan masih banyak yang lainnya.

## Controlled Component

Controlled Component merupakan cara menghandle inputan yang dikontrol sepenuhnya oleh state React. Data dari form disimpan dalam state, dan perubahan pada input dilakukan melalui event handler yang memperbarui state. Dengan menggunakan controlled component ini memudahkan developer untuk memanipulasi dan melacak nilai input secara real-time.

## UnControlled Component

UnControlled Component merupakan cara menghandle inputan yang dikelola langsung oleh DOM, bukan oleh state React. Untuk mengambil nilai dari input, referensi (ref) digunakan untuk mengakses DOM secara langsung. Dengan menggunakan uncontrolled component ini implementasinya lebih sederhana dan cocok untuk situasi di mana kontrol penuh oleh React tidak diperlukan.

## Controlled Component vs UnControlled Component

Lalu kapan menggunakan salah satu dari component tersebut ? Controlled Component digunakan saat butuh kontrol penuh dan reaktif terhadap nilai input, seperti validasi live atau sinkronisasi data. Sedangakan UnControlled Component digunakan saat hanya membutuhkan pengambilan data akhir dari form, dan kontrol ketat tidak diperlukan, seperti form komentar atau form sederhana dengan minimal validasi.

## Basic Validation

Validasi diperlukan untuk mencari inputan data yang benar dan sesuai dengan format, menlindungi akun pengguna dan melindungi sistem/aplikasi. Secara jenis validasi dibagi menjadi dua yaitu client-side validation dan server-side validation. Berikut penjelasan lebih detailnya.

1. Client-side validation, pada client side user dapat melihat secara langsung apakah input yang diberikan sudah sesuai atau belum.
2. Server-side validation, pada server side kesalahan input hanya dapat terlihat saat melakukan submit.

Beberapa build-in validation,

- `required`, digunakan untuk form yang wajib diisi.
- `minlenght` dan `maxlenght`, digunakan untuk menentukan jumlah minnimal dan maksimal karakter.
- `min` dan `max`, digunakan untuk menentukan jumlah minnimal dan maksimal angka.
- `type`, digunakan untuk menentukan tipe data.
- `pattern`, digunakan untuk menentukan pola regex yang telah ditentukan.
