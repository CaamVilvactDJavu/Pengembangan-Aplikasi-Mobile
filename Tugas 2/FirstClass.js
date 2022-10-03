/* First-class Function */
const Aritmatika = {
  tambah: (a, b) => {
    return "${a} + ${b} = ${a + b}";
  },
  kurang: (a, b) => {
    return "${a} - ${b} = ${a - b}";
  },
  kali: (a, b) => {
    return "${a} * ${b} = ${a * b}";
  },
  bagi: (a, b) => {
    if (b != 0) return "${a} / ${b} = ${a / b}";
    return "Tidak dapat dibagi nol";
  },
};

console.log(Aritmatika.tambah(100, 100) + "<br>");
console.log(Aritmatika.kurang(100, 7) + "<br>");
console.log(Aritmatika.kali(5, 5) + "<br>");
console.log(Aritmatika.bagi(100, 5));
