# React Hook

React Hook adalah fitur pada react yang dapat mengambil fitur dan state lain tanpa menulis sebuah class. Beberapa hook dasar yang sering dipakai adalah useState, useEffect, dan useContext. Dalam memanggil hook, perlu dilakukan pada tingkat atas, hook juga hanya dapat diambil dari fungsi react saja.

## useState dan useEffect

`useState` adalah hook yang digunakan untuk menambahkan state lokal ke komponen fungsional di React, dalam penggunaannya `useState` mengembalikan sepasang nilai atau nilai state saat ini dan fungsi untuk memperbarui nilai state tersebut. Sedangkan `useEffect` adalah hook yang digunakan untuk mengelola efek samping (side effects) dalam komponen fungsional, dalam penggunaannya adalah memungkinkan kita untuk mengontrol kapan efek dijalankan dengan menggunakan daftar dependensi.

## Custom Hook

Custom hook memungkinkan kita untuk mengekstrak komponen logika ke fungsi untuk digunakan kembali. Dengan menggunakan custom hook, deveoper menjadi mudah untuk menggunakannya tanpa harus menduplikasi kode. Baris code juga dapat lebih bersih dan fokus ke UI saja. Dan terakhir adalah mudah untuk dibaca dibandingkan menulis code pada satu tempat.
