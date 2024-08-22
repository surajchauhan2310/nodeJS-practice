const a = 120;
let b = 340;
console.log(a + b);
// setTimeout(() => {
//   console.log(a + b);
// }, 3000);
// console.log(z);
const waitingPeriod = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 3000);
});
waitingPeriod.then((data) => {
  b = data;
  console.log(a + b);
});
