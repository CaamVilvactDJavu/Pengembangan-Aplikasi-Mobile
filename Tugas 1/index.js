function gradePenilaian() {
  const hurufMutu = (nilai) => {
    if (nilai >= 80) {
      return "A";
    } else if (nilai < 80 && nilai >= 70) {
      return "AB";
    } else if (nilai < 70 && nilai >= 60) {
      return "B";
    } else if (nilai < 60 && nilai >= 50) {
      return "BC";
    } else if (nilai < 50 && nilai >= 40) {
      return "C";
    } else if (nilai < 40 && nilai >= 10) {
      return "D";
    } else {
      return "E";
    }
  };

  const tabelMahasiswa = [
    { nama: "Farhan", nim: "100110120", nilai: 55 },
    { nama: "Regan", nim: "110120130", nilai: 87 },
    { nama: "Abil", nim: "120130140", nilai: 56 },
    { nama: "Ridwan", nim: "130140150", nilai: 38 },
    { nama: "Salsa", nim: "140150160", nilai: 94 },
    { nama: "Lala", nim: "160170180", nilai: 6 },
    { nama: "Manda", nim: "170180190", nilai: 43 },
    { nama: "Puja", nim: "180190200", nilai: 15 },
    { nama: "Viki", nim: "190200210", nilai: 77 },
    { nama: "Ame", nim: "200210220", nilai: 86 },
    { nama: "Ibal", nim: "210220230", nilai: 42 },
    { nama: "Adrian", nim: "220230240", nilai: 64 },
  ];

  const Markup = (data, i) => {
    const markup = `<tr>
				<td>${i + 1}</td>
				<td>${data.nama}</td>
				<td>${data.nim}</td>
				<td>${data.nilai}</td>
				<td>${hurufMutu(data.nilai)}</td>
			</tr>
			`;
    return markup;
  };

  const markup = tabelMahasiswa.map((data, i) => Markup(data, i)).join("");
  const table = document.querySelector(".data");
  table.insertAdjacentHTML("beforeend", markup);
}
gradePenilaian();
