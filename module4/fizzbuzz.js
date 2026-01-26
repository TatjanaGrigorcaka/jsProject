// fizzbuzz.js (parametrizēts)

const N = Number(process.argv[2]);
const div1 = Number(process.argv[3]) || 3;
const word1 = process.argv[4] || "Fizz";
const div2 = Number(process.argv[5]) || 5;
const word2 = process.argv[6] || "Buzz";

if (isNaN(N) || N <= 0) {
  console.log("Lūdzu ievadi pozitīvu skaitli N");
  process.exit(1);
}

for (let i = 1; i <= N; i++) {
  let output = "";

  if (i % div1 === 0) output += word1;
  if (i % div2 === 0) output += word2;

  console.log(output || i);
}

// // fizzbuzz.js

// const N = Number(process.argv[2]);

// if (isNaN(N) || N <= 0) {
//   console.log("Lūdzu ievadi pozitīvu skaitli N");
//   process.exit(1);
// }

// for (let i = 1; i <= N; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
