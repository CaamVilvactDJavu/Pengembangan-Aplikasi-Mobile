/* Execution Context */
function nama() {
  console.log("Ilham");
  function prodi() {
    console.log("Teknik Informatika");
    function nim() {
      console.log("120140125");
    }
    nim();
  }
  prodi();
}
nama();
