class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hallo semua! Perkenalkan nama saya ${this.name} dan sekarang umur saya ${this.age} tahun.`
    );
  }
}

const person = new Person("Adib", 23);
person.introduce();
