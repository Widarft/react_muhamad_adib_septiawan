# Javascript Refreshment

Javascript merupakan salah satu bahasa pemograman High-level, Scripting, Untyped, dan interpreted yang biasa digunakan untuk
Front-end web development.

## Value dan References

Dalam pemograman terdapat komponen dasar pemograman yang perlu diketahui, komponen dasar pemograman sendiri dibagi menjadi 2 yaitu Primitives atau tipe data (string, number, boolean, null dan lainnya) dan juga object atau struktur data (object, array, function, date, set dan lainnya).

Value dalam pemograman dapat diartikan sebagai cara untuk menyimpan salinan data atau perubahan pada satu variabel dan tidak mempengaruhi yang lain. Sedangkan reference diartikan sebagai cara untuk menyimpan alamat ke data yang sama atau perubahan pada satu variabel yang mempengaruhi variabel lain yang mereferensikan data yang sama.

## Variabel

Dalam mendeklarasiakn variabel, terdapat 3 jenis cara yaitu var, let dan const. Dalam penggunaannya var sudah tidak dipakai lagi karena dia tidak bisa mendeteksi bug, untuk let biasanya digunakan jika membutuhkan nilai yang berubah, sedangkan untuk const biasanya untuk mendeklarasikan variabel yang tetap.
Kemudian dalam variable hal yang perlu diketahui adalah scoping, yaitu menentukan variabel, fungsi dan object yang diatur dan dapat diakses dalam kode. dan yang terakhir adalah hoisting yaitu pengangkatan deklarasi variabel dan fungsi ke bagian atas sebelum eksekusi kode

## Destructuring

Destructuring adalah sebuah ekpresi untuk menyalin nilai dari array atau properti dari object, ke dalam variabel yang berbeda. Selain itu ada pula spread syntax yaitu suatu cara untuk memasukan semua elemen dari object atau array dalam suatu daftar.

## Method

Method merupakan ebuah fungsi sederhana yang sudah disediakan javascript untuk memudahkan dalam pemograman. contohnya yaitu

- Concat, digunakan untuk menggabungkan dua atau lebih array dan mengembalikan salinan array yang telah digabungkan.
- Map, metode array yang membuat array baru dengan menerapkan fungsi tertentu pada setiap elemen array asli.
- Foreach, metode array yang digunakan untuk mengeksekusi fungsi tertentu pada setiap elemen array.
- Slice, metode yang mengembalikan potongan dari array asli berdasarkan indeks awal dan akhir yang diberikan.
- Filter, mengembalikan array baru yang hanya berisi elemen-elemen yang memenuhi kondisi yang ditentukan dalam fungsi filter.
- Reduce, metode yang mengurangi seluruh array menjadi satu nilai berdasarkan fungsi yang diterapkan.

## Control Flow

Merupakan sebuah cara di pemograman untuk mengontrol alur eksekusi dari kode. Contohnya yaitu perulangan, pengkondisian, try catch dan throw.

## Function

Function merupakan sebuah object, karena memiliki properti dan method. Fungsi dari Function ini adalah prosedur yang dapat digunakan berkali-kali dengan cara memanggil function pada code, sehingga setiap prosedur dalam function dapat terpanggil atau tereksekusi.

## Asynchronous

Asynchronous merupakan proses eksekusi kode yang tidak berurutan bedasarkan urutan kode, tetapi bedasarkan waktu proses. Contohnya adalah setTimeout yang digunakan untuk menunda proses eksekusi lebih lama selagi menjalankan proses yang lain.

## Class

Class adalah Template untuk membuat objek dengan properti dan metode. Dalam class terdapat constructor yang berfungsi untuk menginisiasi properti, Atribut merupakan kumpulan variabel yang membentuk object dan Inheritance `Extends` yaitu class dapat mewarisi properti dan metode dari class lain.

## DOM Document Object Model

Merupakan API untuk HTML yang mempresentasikan halaman web pada suatu dokumen menjadi object. Dengan DOM, pengembang dapat mengakses dan memodifikasi elemen halaman menggunakan JavaScript untuk menciptakan pengalaman web yang interaktif.
