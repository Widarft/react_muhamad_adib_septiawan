function swapValuesVar(a, b) {
  var swap = a;
  a = b;
  b = swap;
  console.log("Menggunakan var", "a = " + a, "b = " + b);
}
swapValuesVar(5, 10);

//Untuk Versi pertama ini menggunakan Var

function swapValuesLet(a, b) {
  let swap = a;
  a = b;
  b = swap;
  console.log("Menggunakan let", "a = " + a, "b = " + b);
}
swapValuesLet(5, 10);

// Untuk Versi kedua ini menggunakan Let

function swapValuesConst(a, b) {
  const swap = a;
  a = b;
  b = swap;
  console.log("Menggunakan const", "a = " + a, "b = " + b);
}
swapValuesConst(5, 10);

// Untuk Versi ketiga ini menggunakan Const

/**
 * Dari apa yang sudah berjalan, semua outputnya sama yaitu a menjadi 10 dan b menjadi 5.
 * Namun jika harus memilih mana yang lebih baik digunakan maka let adalah jawabannya.
 * Let memungkinkan untuk nilai variabel diganti, tidak seperti const yang nilainya harus tetap.
 * Namun untuk var, tipe ini sudah tidak direkomendasikan lagi untuk dipakai karena bug akan tidak bisa dideteksi jika ada kesalahan code.
 */
