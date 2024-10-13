# Event Handling

File ini berisikan summary pelajaran Event Handling

## State Learning

Merupakan sebuah private component yang hanya dapat digunakan pada component tersebut dan tidak bisa diakses oleh component lain. Berikut adalah sifat-sifat dari state.

- Data bisa dimodifikasi dengan menggunakan setState
- Setiap terjadi modifikasi maka akan ada render ulang
- Bersifat Asynchroous
- Dipakai di dalam class

## Statefull and Stateless

Statefull memiliki state, komponennya dibuat pada class dan memiliki lifecycle, sedangkan Stateless tidak memiliki state (hanya props), dan dibuat sebagai function karena codenya lebih ringkas. Statefull memiliki nama lain smart component sedangkan Stateless dump component dan nama lainnya Statefull container component sedangakan Stateless presentational component.

## Event Handling pada React

Event handling sendiri adalah sebuah metode yang digunakan untuk menangani sebuah aksi yang diberikan pengguna pada suatu komponen. Beberapa contohnya Clipboard event (Promise terpenuhi), Form event (onChange, onSubmit), Mouse event (onClick, onDoubleClick, onMouseOver), Generic event (onError, onLoad)
