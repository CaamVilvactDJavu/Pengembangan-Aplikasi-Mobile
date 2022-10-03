/* Callbacks */
function helloWord(nama) {
  alert("Hello World " + nama);
}
function tampilkanPesan(callback) {
  const nama = prompt("Masukkan nama anda:");
  callback(nama);
}
tampilkanPesan(helloWord);
