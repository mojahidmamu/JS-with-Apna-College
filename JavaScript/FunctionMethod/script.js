// function addSomeNumber() {
//   console.log("we are learning JS");
//   console.log("hello mojahi");
// }
// addSomeNumber();
// addSomeNumber();
// addSomeNumber();

// function myFunction(msg){
//     console.log(msg)
// }
// myFunction('hello')
const sum = (a, b) => {
  return a + b;
};
// console.log(sum(10,20))
// const printHello = () => {
//  console.log('hello')
// }
// console.log(printHello())
// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//         count++;
//     }
//   }
//   console.log(count)
// }
// countVowels("apnacollege");
let countVowels = (str) => {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "A" ||
      char === "e" ||
      char === "E" ||
      char === "i" ||
      char === "I" ||
      char === "o" ||
      char === "O" ||
      char === "u" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log(count);
};
countVowels("Apna College");
