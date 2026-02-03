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

// String functions
console.log("String functions");
// capitalize(str) // "hello" → "Hello"
console.log('capitalize(str) // "hello" → "Hello"');
console.log(capitalize("hello")); // Hello
console.log(capitalize()); // Kļūda: arguments 'str' nav padots
console.log(capitalize(123)); // Kļūda: ievade nav string
console.log(capitalize("")); // Kļūda: ievadīta tukša virkne4

// truncate(str, maxLen) // Apgriež un pievieno "..."
console.log('truncate(str, maxLen) // Apgriež un pievieno "..."');
console.log(truncate("Hello world", 5)); // Hello ...
console.log(truncate()); // Kļūda: arguments 'str' nav padots
console.log(truncate(123)); // Kļūda: ievade nav string
console.log(truncate("", 5)); // Kļūda: ievadīta tukša virkne
console.log(truncate("Hello world", 0)); // Kļūda: maxLen jābūt pozitīvam skaitlim

// countWords(str) // Saskaita vārdus
console.log("countWords(str) // Saskaita vārdus");
console.log(countWords("Hello world")); // 2
console.log(countWords("   Hello world ! ")); // 3
console.log(countWords()); // Kļūda: arguments 'str' nav padots → 0
console.log(countWords(12345)); // Kļūda: ievade nav string → 0
console.log(countWords("")); // Kļūda: ievadīta tukša virkne -> 0
console.log(countWords("     ")); // Kļūda: ievadīta tukša virkne -> 0

// Number functions
console.log("Number functions");
console.log("clamp(num, min, max) // Ierobežo vērtību diapazonā");
// clamp(num, min, max) // Ierobežo vērtību diapazonā
console.log(clamp(10, 0, 5)); // 5
console.log(clamp(-3, 0, 10)); // 0
console.log(clamp(7, 0, 10)); // 7
console.log(clamp(5)); // Kļūda: visi 3 argumenti (num, min, max) ir jāpadod → NaN
console.log(clamp("7", 0, 10)); // Kļūda: 'num' jābūt skaitlim → NaN
console.log(clamp(5, 0, NaN)); // Kļūda: 'max' jābūt skaitlim → NaN

// isPrime(num) // Vai ir pirmskaitlis
console.log("isPrime(num) // Vai ir pirmskaitlis");
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(isPrime(-5)); //  Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(isPrime("7")); // Kļūda: ievade nav skaitlis → false
console.log(isPrime()); // Kļūda: arguments 'num' nav padots → false
console.log(isPrime(NaN)); // Kļūda: ievade nav skaitlis -> false

// factorial(n) // n!
console.log("factorial(n) // n!");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(-2)); // Kļūda: skaitlim jābūt >= 0 -> NaN
console.log(factorial("5")); // Kļūda: ievade nav skaitlis -> NaN
console.log(factorial(NaN)); // Kļūda: ievade nav skaitlis -> NaN
console.log(factorial(3.5)); // Kļūda: jābūt veselam skaitlim -> NaN

// Array functions
console.log("Array functions");
// sum(arr) // Masīva summa
console.log("sumResult(arr) // Masīva summa");
console.log(sumResult([1, 2, 3])); // 6
console.log(sumResult([])); // Kļūda: masīvs ir tukšs -> 0
console.log(sumResult([1, "2", 3])); // ļūda: masīva elements ar indeksu 1 nav skaitlis -> NaN
console.log(sumResult("123")); // Kļūda: ievade nav masīvs -> NaN
console.log(sumResult()); // Kļūda: masīvs nav padots -> NaN

// average(arr) // Vidējais aritmētiskais
console.log("average(arr) // Vidējais aritmētiskais");
console.log(average([2, 4, 6])); // 4
console.log(average([])); // Brīdinājums: masīvs ir tukšs, vidējais = 0 => 0
console.log(average([1, "2", 3])); // Kļūda: masīva elements ar indeksu 1 nav skaitlis => NaN
console.log(average("123")); // Kļūda: ievade nav masīvs => NaN
console.log(average()); // Kļūda: masīvs nav padots => NaN

// Validators
console.log("Validators");
// isEmail
console.log("isEmail: Vienkārša e-pasta validācija");
console.log(isEmail("test@example.com")); // true
console.log(isEmail("user123@domain.co")); // true
console.log(isEmail("invalid-email")); // false
console.log(isEmail("")); // false
console.log(isEmail(12345)); // false

// isPhoneNumber
console.log("isPhoneNumber: Latvijas formāts (+371 XXXXXXXX)");
console.log(isPhoneNumber("+37112345678")); // true – derīgs numurs
console.log(isPhoneNumber("+37187654321")); // true – derīgs numurs
console.log(isPhoneNumber("+3711234567")); // false – par īsu (7 cipari)
console.log(isPhoneNumber("+371123456789")); // false – par garu (9 cipari)
console.log(isPhoneNumber("37112345678")); // false – trūkst "+"
console.log(isPhoneNumber("+37212345678")); // false – nepareizs kods
console.log(isPhoneNumber(12345678)); // false – nav string
console.log(isPhoneNumber("+371abcdef12")); // false – burti, ne tikai cipari

// isValidAge
console.log("isValidAge: 0-150");
console.log(isValidAge(0)); // true – minimums
console.log(isValidAge(150)); // true – maksimums
console.log(isValidAge(-5)); // false – negatīvs vecums
console.log(isValidAge(200)); // false – pāri maksimumam
console.log(isValidAge("25")); // false – nav number tipa
console.log(isValidAge(NaN)); // false – nav skaitlis

// isStrongPassword
console.log("isStrongPassword: Vismaz 8 simboli, burti, cipari");
console.log(isStrongPassword("Abc12345")); // true  – derīgs
console.log(isStrongPassword("abcdef12")); // true  – derīgs
console.log(isStrongPassword("abc123")); // false – < 8 simboli
console.log(isStrongPassword("abcdefgh")); // false – nav ciparu
console.log(isStrongPassword("12345678")); // false – nav burtu
console.log(isStrongPassword(12345678)); // false – nav string

// isValidDate
console.log("YYYY-MM-DD formāts");
console.log(isValidDate("2025-12-01")); // true
console.log(isValidDate("2025-02-28")); // true
console.log(isValidDate("2025-02-30")); // false
console.log(isValidDate("2025-13-01")); // false
console.log(isValidDate("2025-2-1")); // false – formāts nepareizs
console.log(isValidDate(20231201)); // false – nav string

// Higher-Order Functions
console.log("Higher-Order Functions");
const nums = [1, 2, 3, 4, 5];
// myForEach
console.log("myForEach:");
myForEach(nums, (x) => console.log(x * 2));

// myMap
const doubled = myMap(nums, (x) => x * 2);
console.log("myMap:", doubled);

// myFilter
const evens = myFilter(nums, (x) => x % 2 === 0);
console.log("myFilter:", evens);

// myReduce
const sumResult2 = myReduce(nums, (acc, x) => acc + x, 0);
console.log("myReduce:", sumResult2);

// chained operations (manuāli)
const step1 = myMap(nums, (x) => x + 1);
const step2 = myFilter(step1, (x) => x % 2 === 0);
const chain = myMap(step2, (x) => x * 3);

console.log("chained operations:", chain);
