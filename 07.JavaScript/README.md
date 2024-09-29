# Javascript Refreshment

Javascript merupakan salah satu bahasa pemograman High-level, Scripting, Untyped, dan interpreted yang biasa digunakan untuk
Front-end web development.

## Value dan References

Dalam pemograman terdapat komponen dasar pemograman yang perlu diketahui, komponen dasar pemograman sendiri dibagi menjadi 2 yaitu Primitives atau tipe data (string, number, boolean, null dan lainnya) dan juga object atau struktur data (object, array, function, date, set dan lainnya).

Value dalam pemograman dapat di artikan menyimpan salinan data atau perubahan pada satu variabel tidak mempengaruhi yang lain. Sedangkan reference adalah Menyimpan alamat ke data yang sama atau perubahan pada satu variabel mempengaruhi variabel lain yang mereferensikan data yang sama.

## Variabel

Dalam mendeklarasiakn variabel, terdapat 3 jenis cara yaitu var, let dan const. Dalam penggunaannya var sudah tidak dipakai lagi karena dia tidak bisa mendeteksi bug, untuk let biasanya digunakan jika membutuhkan nilai yang berubah, sedangkan untuk const biasanya untuk mendeklarasikan variabel yang tetap.
Kemudian yang perlu diketahui adalah scoping, yaitu menentukan variabel, fungsi dan object diatur dan dapat diakses dalam kode. dan yang terakhir adalah hoisting yaitu pengangkatan deklarasi variabel dan fungsi ke bagian atas cakupan sebelum eksekusi kode

## Destructuring

Destructuring adalah sebuah ekpresi untuk menyalin nilai dari array atau properti dari object, ke dalam variabel yang berbeda.

contoh penggunaannya adalah
`let fruits = ["Apple", "Banana", "Orange"];`

`let [firstFruit, secondFruit] = fruits;`

`console.log(firstFruit);  // Output: Apple`
`console.log(secondFruit); // Output: Banana`

Dapat dilihat bahwa [[firstFruit, secondFruit]] merupakan destructuring untuk mengambil nilai pada array `["Apple", "Banana", "Orange"]`
