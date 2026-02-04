const {
  capitalize,
  truncate,
  countWords,
  clamp,
  isPrime,
  factorial,
  sumResult,
  average,
} = require("./utils/utils");
const {
  isEmail,
  isPhoneNumber,
  isValidAge,
  isStrongPassword,
  isValidDate,
} = require("./validators/validators");
const {
  myForEach,
  myMap,
  myFilter,
  myReduce,
} = require("./utils/higher-order");
const { runCalculator } = require("./cli/calculator-refactored");

// String functions
console.log("\nString functions");
// capitalize(str) // "hello" → "Hello"
console.log('\ncapitalize(str) // "hello" → "Hello"');
console.log(capitalize("hello")); // Hello
console.log(capitalize()); // Kļūda: arguments 'str' nav padots
console.log(capitalize(123)); // Kļūda: ievade nav string
console.log(capitalize("")); // Kļūda: ievadīta tukša virkne4

// truncate(str, maxLen) // Apgriež un pievieno "..."
console.log('\ntruncate(str, maxLen) // Apgriež un pievieno "..."');
console.log(truncate("Hello world", 5)); // Hello ...
console.log(truncate()); // Kļūda: arguments 'str' nav padots
console.log(truncate(123)); // Kļūda: ievade nav string
console.log(truncate("", 5)); // Kļūda: ievadīta tukša virkne
console.log(truncate("Hello world", 0)); // Kļūda: maxLen jābūt pozitīvam skaitlim

// countWords(str) // Saskaita vārdus
console.log("\ncountWords(str) // Saskaita vārdus");
console.log(countWords("Hello world")); // 2
console.log(countWords("   Hello world ! ")); // 3
console.log(countWords()); // Kļūda: arguments 'str' nav padots → 0
console.log(countWords(12345)); // Kļūda: ievade nav string → 0
console.log(countWords("")); // Kļūda: ievadīta tukša virkne -> 0
console.log(countWords("     ")); // Kļūda: ievadīta tukša virkne -> 0

// Number functions
console.log("\nNumber functions");
console.log("\nclamp(num, min, max) // Ierobežo vērtību diapazonā");
// clamp(num, min, max) // Ierobežo vērtību diapazonā
console.log(clamp(10, 0, 5)); // 5
console.log(clamp(-3, 0, 10)); // 0
console.log(clamp(7, 0, 10)); // 7
console.log(clamp(5)); // Kļūda: visi 3 argumenti (num, min, max) ir jāpadod → NaN
console.log(clamp("7", 0, 10)); // Kļūda: 'num' jābūt skaitlim → NaN
console.log(clamp(5, 0, NaN)); // Kļūda: 'max' jābūt skaitlim → NaN

// isPrime(num) // Vai ir pirmskaitlis
console.log("\nisPrime(num) // Vai ir pirmskaitlis");
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(isPrime(-5)); //  Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(isPrime("7")); // Kļūda: ievade nav skaitlis → false
console.log(isPrime()); // Kļūda: arguments 'num' nav padots → false
console.log(isPrime(NaN)); // Kļūda: ievade nav skaitlis -> false

// factorial(n) // n!
console.log("\nfactorial(n) // n!");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(-2)); // Kļūda: skaitlim jābūt >= 0 -> NaN
console.log(factorial("5")); // Kļūda: ievade nav skaitlis -> NaN
console.log(factorial(NaN)); // Kļūda: ievade nav skaitlis -> NaN
console.log(factorial(3.5)); // Kļūda: jābūt veselam skaitlim -> NaN

// Array functions
console.log("\nArray functions");
// sum(arr) // Masīva summa
console.log("\nsumResult(arr) // Masīva summa");
console.log(sumResult([1, 2, 3])); // 6
console.log(sumResult([])); // Kļūda: masīvs ir tukšs -> 0
console.log(sumResult([1, "2", 3])); // ļūda: masīva elements ar indeksu 1 nav skaitlis -> NaN
console.log(sumResult("123")); // Kļūda: ievade nav masīvs -> NaN
console.log(sumResult()); // Kļūda: masīvs nav padots -> NaN

// average(arr) // Vidējais aritmētiskais
console.log("\naverage(arr) // Vidējais aritmētiskais");
console.log(average([2, 4, 6])); // 4
console.log(average([])); // Brīdinājums: masīvs ir tukšs, vidējais = 0 => 0
console.log(average([1, "2", 3])); // Kļūda: masīva elements ar indeksu 1 nav skaitlis => NaN
console.log(average("123")); // Kļūda: ievade nav masīvs => NaN
console.log(average()); // Kļūda: masīvs nav padots => NaN

// Validators
console.log("\nValidators");
// isEmail
console.log("\nisEmail: Vienkārša e-pasta validācija");
console.log(isEmail("test@example.com")); // true
console.log(isEmail("user123@domain.co")); // true
console.log(isEmail("invalid-email")); // false
console.log(isEmail("")); // false
console.log(isEmail(12345)); // false

// isPhoneNumber
console.log("\nisPhoneNumber: Latvijas formāts (+371 XXXXXXXX)");
console.log(isPhoneNumber("+37112345678")); // true – derīgs numurs
console.log(isPhoneNumber("+37187654321")); // true – derīgs numurs
console.log(isPhoneNumber("+3711234567")); // false – par īsu (7 cipari)
console.log(isPhoneNumber("+371123456789")); // false – par garu (9 cipari)
console.log(isPhoneNumber("37112345678")); // false – trūkst "+"
console.log(isPhoneNumber("+37212345678")); // false – nepareizs kods
console.log(isPhoneNumber(12345678)); // false – nav string
console.log(isPhoneNumber("+371abcdef12")); // false – burti, ne tikai cipari

// isValidAge
console.log("\nisValidAge: 0-150");
console.log(isValidAge(0)); // true – minimums
console.log(isValidAge(150)); // true – maksimums
console.log(isValidAge(-5)); // false – negatīvs vecums
console.log(isValidAge(200)); // false – pāri maksimumam
console.log(isValidAge("25")); // false – nav number tipa
console.log(isValidAge(NaN)); // false – nav skaitlis

// isStrongPassword
console.log("\nisStrongPassword: Vismaz 8 simboli, burti, cipari");
console.log(isStrongPassword("Abc12345")); // true  – derīgs
console.log(isStrongPassword("abcdef12")); // true  – derīgs
console.log(isStrongPassword("abc123")); // false – < 8 simboli
console.log(isStrongPassword("abcdefgh")); // false – nav ciparu
console.log(isStrongPassword("12345678")); // false – nav burtu
console.log(isStrongPassword(12345678)); // false – nav string

// isValidDate
console.log("\nYYYY-MM-DD formāts");
console.log(isValidDate("2025-12-01")); // true
console.log(isValidDate("2025-02-28")); // true
console.log(isValidDate("2025-02-30")); // false
console.log(isValidDate("2025-13-01")); // false
console.log(isValidDate("2025-2-1")); // false – formāts nepareizs
console.log(isValidDate(20231201)); // false – nav string

// Higher-Order Functions
console.log("\nHigher-Order Functions\n");
const nums = [1, 2, 3, 4, 5];

// myForEach
console.log("myForEach:");
// callback funkcija
const printElement = function (x) {
  console.log(x);
};
// funkcijas izsaukums
myForEach(nums, printElement);

// myMap
// callback funkcija
const doubleValue = function (x) {
  return x * 2;
};
// funkcijas izsaukums
const doubled = myMap(nums, doubleValue);
console.log("myMap:", doubled);

// myFilter
// callback funkcija
const isEven = function (x) {
  return x % 2 === 0;
};
// funkcijas izsaukums
const evens = myFilter(nums, isEven);
console.log("myFilter:", evens);

// myReduce
// callback funkcija
const sumValues = function (acc, x) {
  return acc + x;
};
// funkcijas izsaukums
const sumResult2 = myReduce(nums, sumValues, 0);
console.log("myReduce:", sumResult2);

// chained operations
// callback funkcijas
const addOne = function (x) {
  return x + 1;
};
const isEven2 = function (x) {
  return x % 2 === 0;
};
const multiplyByThree = function (x) {
  return x * 3;
};
// chained operations
const step1 = myMap(nums, addOne);
const step2 = myFilter(step1, isEven2);
const chain = myMap(step2, multiplyByThree);
console.log("chained operations:", chain);

// calculator-refactored

console.log("\nKalkulators\n");
// Pareizi aprēķini
runCalculator(5, "+", 3); // 5 + 3 = 8
runCalculator(10, "-", 4); // 10 - 4 = 6
runCalculator(6, "*", 7); // 6 * 7 = 42
runCalculator(20, "/", 5); // 20 / 5 = 4
runCalculator(10, "%", 3); // 10 % 3 = 1

console.log("\nKļūdu gadījumi");

// Nederīgi skaitļi
runCalculator("a", "+", 3); // Kļūda: Lūdzu ievadiet derīgus skaitļus!
runCalculator(5, "-", "b"); // Kļūda: Lūdzu ievadiet derīgus skaitļus!

// Nederīgs operators
runCalculator(5, "^", 2); // Kļūda: Nezināms operators "^"

// Dalīšana ar nulli
runCalculator(10, "/", 0); // Kļūda: Dalīšana ar nulli nav atļauta
runCalculator(10, "%", 0); // Kļūda: Dalīšana ar nulli nav atļauta

console.log("\nRobežgadījumi");

// Robežgadījumi
runCalculator(0, "+", 0); // 0 + 0 = 0
runCalculator(-5, "*", 2); // -5 * 2 = -10
runCalculator(3.5, "+", 2.1); // 3.5 + 2.1 = 5.6
