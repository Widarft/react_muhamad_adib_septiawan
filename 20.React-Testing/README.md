# React Testing

Testing adalah proses pemeriksaan komponen dan fungsionalitas pada project apakah sudah berjalan sesuai harapan atau belum. Tujuan dari testing ini adalah kita akan lebih percaya diri karena sudah ada tes yang dilakukan oleh project dan meminimalisir bug pada aplikasi. Dalam melakukan testing tools yang dapat digunakan adalah "**Jest**"

## Level Testing untuk Front-End Developer

Testing yang dilakukan oleh developer front-end berada di level **Unit Testing** yaitu pengujian komponen terkecil dari perangkat lunak, seperti fungsi atau metode, secara terpisah dari sistem secara keseluruhan. Selain itu developer front-end juga melakukan testing di level **Integration Testing** yang artinya adalah pengujian interaksi antar unit atau komponen untuk memastikan bahwa mereka bekerja sama dengan baik.

## React Testing Library (RTL)

React Testing Library (RTL) memudahkan pengujian berbasis DOM dengan cara yang menyerupai perilaku pengguna. RTL berfokus pada bagaimana aplikasi terlihat dan berfungsi bagi pengguna. Contohnya melakukan tes untuk menguji apakah komponen menampilkan sebuah teks ketika tombol diklik.

## Testing React Hooks

Pengujian hooks khusus seperti `useState`, `useEffect`, dan hooks custom lainnya. Testing React Hooks sangat penting untuk menguji logika state management yang ditangani oleh hooks. Hooks yang custom juga dapat diuji secara terisolasi untuk memastikan logikanya berjalan dengan baik.
