function progress(firstName, lastName, callback) {
  const total = firstName + lastName;
  setTimeout(() => {
    callback(total);
  }, 5000);
}

const number = [1, 3, 5, 6, 7];
function callnum(called) {
  setTimeout(() => {
    const total = number
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr, 0);
    called(total);
  }, 3000);
}



progress("rama", "dika", (name) => console.log`halo ${name}`);
callnum((total) => console.log(total));
