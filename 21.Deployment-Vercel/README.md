# Deployment

Deployment adalah suatu proses yang dilakukan untuk menyebarluaskan hasil dari aplikasi website agar bisa dibuka oleh orang lain melalui browser. Dalam react tools yang biasa digunakan untuk melakukan deployment adalah Vercel, Firebase Hosting, Heroku, Surge dan lainnya.

## Vercel

Seperti yang disinggung sebelumnya, vercel merupakan salah satu tools yang digunakan untuk melakukan deployment. Vercel ini merupakan tools yang mudah untuk digunakan. Berikut langkah-langkah melakukan deploy menggunakan vercel:

- Buat akun vercel.
- Hubungkan repository dari Github ke vercel untuk dibaca oleh vercelnya.
- Melakukan konfigurasi dibagian mana tepatnya project tersebut berada dan mengatur pengaturan build atau deploynya.
- Klik tombol deploy, lalu tunggu hingga selesai.
- Setelah selesai nanti akan diberikan alamat untuk dibuka pada browser, contohnya seperti ini " https://react-muhamad-adib-septiawan.vercel.app/ "
- Dengan begitu aplikasi sudah dapat diakses oleh orang lain, untuk melakukan update cukup push code kita ke GitHub maka akan otomatis akan ada pembaharuan pada aplikasi web yang telah di deploy.

### Tips Deploy Vercel

Jika project yang dibuat menggunakan React Routing, saat melakukan refresh selain dibagian home atau `"/"`, maka akan muncul page 404. Nah untuk mencegah hal tersebut, dapat memasukkan file baru pada project yaitu **vercel.json**. Isi file tersebut dengan code ini `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`, Dengan code tersebut kita dapat melakukan refresh tanpa takut page 404.
