# Version Control and Branch Management

## Versioning

Versioning adalah suatu metode untuk mengatur versi dari source code program. Tools yang digunakan untuk versionong ini adalah Version Control System. Terdapat beberapa jenis Version Control System yaitu Single User, Centralized, Distributed. 

## Git

Salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Git adalah software version control yang dijalankan secara lokal pada komputer. Git melacak perubahan pada kode sumber, memungkinkan developer untuk mengelola versi dan mengembalikan kode ke versi sebelumnya. Fungsi utamanya adalah Membuat, menyimpan, dan mengelola versi proyek secara lokal. Git juga mendukung kolaborasi melalui merge dan branching.

## Collaboration

Dalam version control system, collaboration merupakan salah satu fungsi dari git untuk memudahkan programer untuk melakukan kolaborasi, sehingga proses kolaborasi bisa lebih mudah dan cepat. Dalam git commit digunakan untuk melakukan save/record versi dari source code. Salah satu version control system hosting yang terkenal adalah GitHub.

### GIT INIT CLONE CONFIG

- `git init` berfungsi untuk menginisialisasi repository Git baru di folder lokal.
- `git clone` berfungsi untuk mmenyalin repository yang sudah ada dari server Git ke komputer lokal.
- `git config` berfungsi untuk mengonfigurasi pengaturan Git, seperti informasi pengguna dan preferensi global atau lokal.

### The Staging Area

Alur nya seperti ini
- Buat atau ubah file di working directory.
- Tambahkan file yang berubah ke staging area menggunakan `git add`.
- Commit perubahan ke repository menggunakan `git commit`, yang menyimpan perubahan secara permanen.

### GIT DIFF AND STASH

- `git diff` berfungsi untuk menampilkan perbedaan antara dua versi file dalam repository Git.
- `git stash` berfungsi untuk menyimpan sementara perubahan yang belum di-commit agar bisa kembali ke working directory yang bersih.

### GIT LOG AND CHECKOUT

- `git log` berfungsi untuk menampilkan riwayat commit pada repository.
- `git checkout` berfungsi untuk beralih ke branch atau commit tertentu.

### GIT RESET

`git reset` berfungsi untuk menghapus perubahan yang ada di staging area atau mengembalikan repository ke commit sebelumnya.

### GIT PUSH, FETCH, PULL

- `git push` berfungsi untuk mengirim commit dari repository lokal ke repository remote (misalnya GitHub).
- `git fetch` berfungsi untuk mengambil perubahan terbaru dari repository remote tanpa menggabungkannya dengan branch lokal.
- `git pull` berfungsi untuk mengambil dan langsung menggabungkan perubahan dari repository remote ke branch lokal.

### GIT BRANCHING

`git branch` berfungsi untuk mengelola branch dalam repository Git. `git branch` digunakan untuk membuat, menghapus, atau menampilkan daftar branch yang ada di repository. Branch digunakan untuk memisahkan pekerjaan sehingga tidak mengganggu branch utama (misalnya `main` atau `master`).

### GIT MERGE

`git merge` berfungsi untuk menggabungkan perubahan dari satu branch ke branch lain.

### PULL REQUEST

Mengajukan permintaan untuk menggabungkan perubahan dari satu branch ke branch lain (biasanya branch utama) di repository remote (seperti GitHub).
