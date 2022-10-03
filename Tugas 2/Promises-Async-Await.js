/* Promises */
var promises = new Promises((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

/* Async dan Await*/
const getAllUser = async () => {
  try {
    const result = await getUser();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getAllUser;
