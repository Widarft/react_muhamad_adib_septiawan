# CSS

Cascading Style Sheets (CSS) merupakan bahasa pemograman yang digunakan untuk menghias halaman web baik untuk warna, font, background, height, width, margin dan lainnya. Dengan CSS ini, tampilan menjadi lebih menarik dan enak untuk dilihat oleh user.

## Menambahkan CSS

Untuk menambahkan CSS pada projek terdapat 3 cara, yaitu:
- External CSS, maksudnya adalah terdapat ekstensi secara terpisah dengan file html nya
- Internal CSS, maksudnya adalah CSS dimasukkan di dalam file html dan akan disimpan dalam satu tag yaitu `<style>`, tag ini dapat disimpan pada `<body>` ataupun `<head>`
- Inline CSS, untuk yang terakhir css ditambahkan langsung di dalam tag `<body` seperti `<h1>`, `<p>` dan lainnya

## Syntax CSS

Contoh untuk syntax css adalah sebagai berikut:
`h1 { color: blue; font-size: 15px; }`
Dengan keterangan h1 sebagai *selector*, color dan font-size sebagai *property*, pink dan 15px sebagai *value*.

## CSS Selector

Selain syntax di atas, CSS juga dapat menggunakan ID (#) dan Class (.). Dalam penggunaan ID, elemen yang digunakan hanya memiliki 1 tag dan elemen dalam satu dokumen HTML hanya boleh memiliki satu ID, dan tidak boleh ada dua elemen yang memiliki ID yang sama. Sedangkan untuk Class dapat digunakan berulang dalam satu halaman dan satu elemen boleh memiliki lebih dari satu class yang berbeda.

## CSS Grouping

Selector juga dapat dikelompokan dalam satu deklarasi style, berikut contohnya:
`h1, h2 { color: blue; font-size: 15px; }`
Dalam contoh tersebut dapat diketahui bahwa `<h1>` dan `<h2>` (sebagai selector), dapat memiliki style yang sama.

## CSS Font

CSS juga memungkinkan untuk merubah font dari mulai kelompok font teks, ukuran, ketebalan dan style nya. 

## CSS Margin dan Padding

Margin digunakan untuk mengatur jarak pada bagian luar sedangkan padding untuk mengatur jarak pada bagian dalam.

## CSS Background

CSS dapat mengatur background dari mulai warna, gambar, ukuran, posisi hingga apakah gambar akan di ulang untuk memenuhi layar atau tidak.

## CSS Link Event

Agar saat mengklik link lebih menarik, CSS dapat mengatur linknya dengan hover (saat kursor di atas link), active(saat link ditekan), visited (saat link sudah dikunjungi). Durasi transisi nya pun dapat diatur pada CSS.

## CSS Display

Display pada halaman web dapat diatur dengan perintah block, inline-block dan none (untuk tidak ditampilakan).

## CSS Table

CSS juga dapat membuat tampilan tabel lebih menarik dengan mengatur border dan warnanya. 
