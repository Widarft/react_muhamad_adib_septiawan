# React Fundamental

Terdapat beberapa fundamental yang perlu diketahui dalam mempelajari React JS. Berikut adalah beberapa fundamental yang perlu diketahui.

## 1. JSX

JSX merupakan singkatan dari Javascript dan XML. Seperti namanya, JSX ini merupakan ekstensi pada javascript yang dikhususkan untuk tampilan. Dibandingkan dengan React.createElement, JSX ini memudahkan developer untuk membuat logic UI.

## 2. React Components

Component pada react merupakan bagian code yang dapat digunakan kembali sesuai kebutuhan developer. Biasanya component digunakan untuk tampilan, behavior, dan state sebagai UI. Dengan menulis code pada komponen, developer hanya perlu memanggil component tersebut pada bagian code yang ingin ditampilkan komponen yang telah dibuat sebelumnya, sehingga developer tidak perlu lagi menuliskan code yang sama berkali-kali, cukup dipanggil saja komponennya.

## 3. Component Composite dan Props

Props merupakan singkatan dari properties yang digunakan untuk memberikan argumen atau data pada komponen. Pada react, flow datanya adalah one way, yaitu dari komponen induk (parent) ke komponen anak (child). Jadi Komponen induk mengirim data sebagai props ke komponen anak, tetapi komponen anak tidak dapat mengubah data tersebut secara langsung. Jika ada perubahan yang perlu terjadi, komponen anak harus mengirimkan sebuah event (callback) kembali ke komponen induk, yang kemudian bisa memperbarui state-nya, yang pada gilirannya akan memperbarui data yang diteruskan ke komponen anak.

## 4. React Lifecycle

Lifecycle pada react dibagi menjadi 3 yaitu Mounting, Updating, dan Unmounting.

- Mounting, meruapakan tahap awal saat komponen pertama kali dimasukkan ke dalam DOM. Dalam hal ini react akan membuat komponen dan menampilkan UI awalnya.
- Updating, terjadi saat adanya perubahan pada komponen seperti saat state atau props berubah. Dalam hal ini react memperbarui tampilan komponen sesuai perubahan tersebut.
- Unmounting, merupakan tahap akhir dari react yaitu saat komponen dihapus dari DOM. Dalam hal ini react akan membersihkan semua tampilannya, atau saat kita menutup website.

## 5. Condition dan List

React dapat membuat komponen berbeda yang sesuai dengan kebutuhan. Untuk menjalankannya dapat di render beberapa bagian saja atau bedasarkan state dari website aplikasi. Dalam penggunaannya dapat menggunakan if, inline if dengan operator &&, inline if-else dengan ternary condition operator , dan mencegah komponen untuk rendering. Dalam React, render list dapat digunakan dengan cara menggunakan kurung kurawal. Key merupakan hal penting dalam list untuk mengidentifikasi item mana yang telah diubah, ditambahkan atau dihilangkan.

## 6. Directory Structure

Dalam pengelompokan file, react dapat di buat bedasarkan fitur atau rute, bedasarkan jenis file, keperluan dari developer atau ketentuan perusahaan.

## 7. Styling Inline

Dalam styling react dapat menggunakan classes dan CSS, atribut style, serta modul CSS. Namun react juga dapat menggunakan library misalnya seperti tailwind css.
