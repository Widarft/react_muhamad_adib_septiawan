# Tailwind CSS

Tailwind CSS merupakan sebuah tools yang dapat mempermudah developer dalam mmembuat tampilan website dengan lebih mudah dan cepat dibandingkan dengan CSS konvensional. Dalam penggunaannya Tailwind CSS ini menyediakan kelas-kelas atau aturan kecil, sehingga pengguna tidak perlu menuliskan code yang panjang lebar seperti pada CSS biasa.

## Cara Penggunaan Tailwind

Untuk penggunaannya CSS dapat di import pada VSC dengan dua cara yaitu CLI dan CDN.

1. Instalasi menggunakan CLI

- Untuk CLI pengguna dapat menuliskan command sebagai berikut pada terminal `npm install -D tailwindcss` dan `npx tailwindcss init`. (dengan catatan sudah memiliki npm)
- Buat file , dan isi dengan code ini
  `@tailwind base;`
  `@tailwind components;`
  `@tailwind utilities;`
- Kemudian tinggal jalankan di terminal dengan menuliskan command ini pada terminal `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
- Dan yang terakhir masukkan source nya pada file html pada bagian `<head>` dengan isi `<link rel="stylesheet" href="/dist/output.css" />`

2. Instalasi menggunakan CDN

- Untuk cara kedua cukup tuliskan pada bagian `<head>` dengan isi `<script src="https://cdn.tailwindcss.com"></script>`
- Lalu Tailwind CSS sudah dapat digunakan.

## Penggunaan Tailwind CSS Pada File HTML

Dalam penggunaan Tailwind CSS, developer cukup menambahkan class lalu dapat menambahkan gaya yang diinginkan. Keuntungan dari Tailwind CSS ini selain lebih mudah dan ringkas, terdapat komponen-komponen yang bisa kita pakai dengan cara copy di website Tailwind CSS. Selain itu, tailwind juga dapat di kostumisasi sehingga tidak perlu khawatir jika ingin menggunakan warna yang berbeda atau style font yang berbeda.
