/* Execution Stack */
var str = "Test";

function pertama() {
  var a = 3;
  kedua();
  console.log(`${str} ${a}`);
}
function kedua() {
  var b = 2;
  ketiga();
  console.log(`${str} ${b}`);
}
function ketiga() {
  var c = 1;
  console.log(`${str} ${c}`);
}

pertama();
