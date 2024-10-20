# Global State Management

Global state adalah state atau data yang dapat diakses dan digunakan oleh banyak komponen tanpa harus mengirimkan secara prop dari satu komponen ke komponen lain. Jadi Global State Management adalah pengelolaan dari state atau data tersebut agar pengelola data dapat digunakan dengan lebih efisien dan terpusat.

## Beberapa library global state management yang sering dipakai

Berikut adalah beberapa library global state management yang sering dipakai.

- Context API, merupakan pengelolaan state bawaan dari react dan cocok untuk project skala kecil.
- Redux, merupakan library pengelolaan state yang tingkat kompleksitasnya tinggi dan cocok untuk project skala besar.
- Zustand, merupakan library pengelolaan state sederhana dan ringan yang cocok untuk skala kecil hingga menengah.

## Cara kerja global state management

1. Komponen mengambil state global.
2. Pengguna mengklik tombol untuk mengirim action.
3. Reducer atau fungsi pengubah state menerima action dan memperbarui state di store.
4. React mendeteksi perubahan di store dan merender ulang komponen yang bergantung pada state tersebut.
