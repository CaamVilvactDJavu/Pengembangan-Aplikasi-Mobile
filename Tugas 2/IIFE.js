/* Deklarasi biasa */
const firstName = "Ilham";
const lastName = "Rahman";
const getName = () => {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
};

console.log(firstName);
console.log(getName());

/* Immediately Invoked Function Expression */
(() => {
  const firstName = "Ilham";
  const lastName = "Rahman";
  const getName = () => {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
  };

  console.log(firstName);
  console.log(getName());
})();
