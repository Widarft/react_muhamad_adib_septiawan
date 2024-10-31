# Auth in React

Auth merupakan sebuah proses utuk mengidentifikasi dan memverifikasi pengguna yang mengakses aplikasi. Auth sendiri dibagi menjadi dua yaitu Authentication dan Authorization. Meskipun mirip namun keduanya merupakan 2 proses berbeda.

## Authentication

Autentikasi adalah proses verifikasi identitas pengguna dan juga merupakan langkah pertama untuk melakukan verifikasi siapa pengguna yang mengakses. Contohnya saat kita melakukan login.

## Authorization

Authorization adalah proses pengelolaan hak akses pengguna untuk mengakses sumber daya atau fitur tertentu di dalam aplikasi atau sistem. Contohnya role admin akan memiliki akses yang berbeda dengan user biasa.

## Alur singkat mengenai Auth

- **Login** ➔ Server mengirimkan token jika kredensial valid.
- **Token Storage** ➔ Klien menyimpan token untuk digunakan dalam setiap permintaan.
- **Permintaan dengan Token** ➔ Klien mengirimkan token saat mengakses halaman atau fitur.
- **Authorization** ➔ Server mengecek token dan hak akses, memberikan atau menolak akses sesuai peran.
