var hurufMutu;

if (hurufMutu >= 80) {
  return "A";
} else if (hurufMutu < 80 && hurufMutu >= 70) {
  return "AB";
} else if (hurufMutu < 70 && hurufMutu >= 60) {
  return "B";
} else if (hurufMutu < 60 && hurufMutu >= 50) {
  return "BC";
} else if (hurufMutu < 50 && hurufMutu >= 40) {
  return "C";
} else if (hurufMutu < 40 && hurufMutu >= 10) {
  return "D";
} else {
  return "E";
}

export default hurufMutu;
