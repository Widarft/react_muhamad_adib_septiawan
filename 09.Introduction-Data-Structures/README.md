# Introduction Data Structures (Javascript)

Data merupakan semua tipe informasi yang berada di memori komputer. Struktur data adalah bagaimana cara mengelola dan menyimpan data kita pada komputer. Struktur data perlu di pelajari agar kode yang kita buat menjadi lebih efisien. Terdapat 2 buah basic struktur data yaitu array dan set(tidak mengizinkan duplikasi).

## Operasi Data Structure

Dalam penerapannya operasi data dibagi menjadi 4 macam yaitu Read, Search, Insert, dan Delete.

### Read

Pada dasarnya read ini merupakan operasi untuk melihat nilai apa yang terkandung di dalam sebuah memori komputer. Read juga merupakan operasi paling simpel karena hanya membutuhkan 1 step saja. Ketika membaca sebuah value, read dapat langsung melompat ke indeks tersebut karena komputer dapat melompat ke memori yang sudah disimpan dan sudah membuat catatan dimana letak dari value tersebut.

### Searching

Searcing berfungsi untuk mencari apakah sebuah value ada atau tidak. Berbanding terbalik dengan read, searching ini tidak dapat langsung melompat ke value tertentu. Komputer juga tidak tahu value apa yang terkandung pada setiap memori. Jadi nantinya seaching akan memeriksa setiap cells yang berada di memori dan akan memberikan hasil dari input yang diberikan jika ada.

### Insert

Insert ini tergolong efisien namun tergantung dimana memasukkan value nya. Misalnya saat memasukkan nilai pada array di bagian akhir, maka insert hanya memerlukan 1 step saja karena komputer sudah tahu value yang sudah ada sebelumnya. Namun jika memasukan nilai di tengah-tengah maka akan ada step tambahan yang harus dilakukan.

### Delete

Delete berfungsi untuk menghilangkan value pada indeks tertentu. Dalam delete, step yang dilakukan adalah 1 kali, namun karena saat menghapus akan menggeser data, jadi delete membutuhkan step tambahan dari data atau stepnya adalah N.
