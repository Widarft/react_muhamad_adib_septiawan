async function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Digunakan untuk membuat peluang tingkat keberhasilan sebesar 50% dengan Math.random
    if (success) {
      setTimeout(() => {
        resolve("Data berhasil diambil !");
      }, 5000);
    } else {
      setTimeout(() => {
        reject("Gagal mengambil data!");
      }, 2000);
    }
  });
}

async function main() {
  console.log("Mengunduh data...");
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

main();
