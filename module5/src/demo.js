const utils = require("./utils");
const validators = require("./validators");
const higherOrder = require("./higher-order");

// String functions
console.log("String functions");
// capitalize(str) // "hello" → "Hello"
console.log('capitalize(str) // "hello" → "Hello"');
console.log(utils.capitalize("hello")); // Hello
console.log(utils.capitalize()); // Kļūda: arguments 'str' nav padots
console.log(utils.capitalize(123)); // Kļūda: ievade nav string
console.log(utils.capitalize("")); // Kļūda: ievadīta tukša virkne4

// truncate(str, maxLen) // Apgriež un pievieno "..."
console.log('truncate(str, maxLen) // Apgriež un pievieno "..."');
console.log(utils.truncate("Hello world", 5)); // Hello ...
console.log(utils.truncate()); // Kļūda: arguments 'str' nav padots
console.log(utils.truncate(123)); // Kļūda: ievade nav string
console.log(utils.truncate("", 5)); // Kļūda: ievadīta tukša virkne
console.log(utils.truncate("Hello world", 0)); // Kļūda: maxLen jābūt pozitīvam skaitlim

// countWords(str) // Saskaita vārdus
console.log("countWords(str) // Saskaita vārdus");
console.log(utils.countWords("Hello world")); // 2
console.log(utils.countWords("   Hello world ! ")); // 3
console.log(utils.countWords()); // Kļūda: arguments 'str' nav padots → 0
console.log(utils.countWords(12345)); // Kļūda: ievade nav string → 0
console.log(utils.countWords("")); // Kļūda: ievadīta tukša virkne -> 0
console.log(utils.countWords("     ")); // Kļūda: ievadīta tukša virkne -> 0

// Number functions
console.log("Number functions");
console.log("clamp(num, min, max) // Ierobežo vērtību diapazonā");
// clamp(num, min, max) // Ierobežo vērtību diapazonā
console.log(utils.clamp(10, 0, 5)); // 5
console.log(utils.clamp(-3, 0, 10)); // 0
console.log(utils.clamp(7, 0, 10)); // 7
console.log(utils.clamp(5)); // Kļūda: visi 3 argumenti (num, min, max) ir jāpadod → NaN
console.log(utils.clamp("7", 0, 10)); // Kļūda: 'num' jābūt skaitlim → NaN
console.log(utils.clamp(5, 0, NaN)); // Kļūda: 'max' jābūt skaitlim → NaN

// isPrime(num) // Vai ir pirmskaitlis
console.log("isPrime(num) // Vai ir pirmskaitlis");
console.log(utils.isPrime(7)); // true
console.log(utils.isPrime(10)); // false
console.log(utils.isPrime(2)); // true
console.log(utils.isPrime(1)); // Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(utils.isPrime(-5)); //  Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(utils.isPrime("7")); // Kļūda: ievade nav skaitlis → false
console.log(utils.isPrime()); // Kļūda: arguments 'num' nav padots → false
console.log(utils.isPrime(NaN)); // Kļūda: ievade nav skaitlis -> false

// factorial(n) // n!
console.log("factorial(n) // n!");
console.log(utils.factorial(5)); // 120
console.log(utils.factorial(0)); // 1
console.log(utils.factorial(1)); // 1
console.log(utils.factorial(-2)); // Kļūda: skaitlim jābūt >= 0 -> NaN
console.log(utils.factorial("5")); // Kļūda: ievade nav skaitlis -> NaN
console.log(utils.factorial(NaN)); // Kļūda: ievade nav skaitlis -> NaN
console.log(utils.factorial(3.5)); // Kļūda: jābūt veselam skaitlim -> NaN

// Array functions
console.log("Array functions");
// sum(arr) // Masīva summa
console.log("sum(arr) // Masīva summa");
console.log(utils.sum([1, 2, 3])); // 6
console.log(utils.sum([])); // Kļūda: masīvs ir tukšs -> 0
console.log(utils.sum([1, "2", 3])); // ļūda: masīva elements ar indeksu 1 nav skaitlis -> NaN
console.log(utils.sum("123")); // Kļūda: ievade nav masīvs -> NaN
console.log(utils.sum()); // Kļūda: masīvs nav padots -> NaN

// average(arr) // Vidējais aritmētiskais
console.log("average(arr) // Vidējais aritmētiskais");
console.log(utils.average([2, 4, 6])); // 4
console.log(utils.average([])); // Brīdinājums: masīvs ir tukšs, vidējais = 0 => 0
console.log(utils.average([1, "2", 3])); // Kļūda: masīva elements ar indeksu 1 nav skaitlis => NaN
console.log(utils.average("123")); // Kļūda: ievade nav masīvs => NaN
console.log(utils.average()); // Kļūda: masīvs nav padots => NaN

// Validators
console.log("Validators");
// isEmail
console.log("isEmail: Vienkārša e-pasta validācija");
console.log(validators.isEmail("test@example.com")); // true
console.log(validators.isEmail("user123@domain.co")); // true
console.log(validators.isEmail("invalid-email")); // false
console.log(validators.isEmail("")); // false
console.log(validators.isEmail(12345)); // false

// isPhoneNumber
console.log("isPhoneNumber: Latvijas formāts (+371 XXXXXXXX)");
console.log(validators.isPhoneNumber("+37112345678")); // true – derīgs numurs
console.log(validators.isPhoneNumber("+37187654321")); // true – derīgs numurs
console.log(validators.isPhoneNumber("+3711234567")); // false – par īsu (7 cipari)
console.log(validators.isPhoneNumber("+371123456789")); // false – par garu (9 cipari)
console.log(validators.isPhoneNumber("37112345678")); // false – trūkst "+"
console.log(validators.isPhoneNumber("+37212345678")); // false – nepareizs kods
console.log(validators.isPhoneNumber(12345678)); // false – nav string
console.log(validators.isPhoneNumber("+371abcdef12")); // false – burti, ne tikai cipari

// isValidAge
console.log("isValidAge: 0-150");
console.log(validators.isValidAge(25)); // true – derīgs vecums
console.log(validators.isValidAge(0)); // true – minimums
console.log(validators.isValidAge(150)); // true – maksimums
console.log(validators.isValidAge(-5)); // false – negatīvs vecums
console.log(validators.isValidAge(200)); // false – pāri maksimumam
console.log(validators.isValidAge("25")); // false – nav number tipa
console.log(validators.isValidAge(NaN)); // false – nav skaitlis

// isStrongPassword
console.log("isStrongPassword: Vismaz 8 simboli, burti, cipari");
console.log(validators.isStrongPassword("Abc12345")); // true  – derīgs
console.log(validators.isStrongPassword("abcdef12")); // true  – derīgs
console.log(validators.isStrongPassword("abc123")); // false – < 8 simboli
console.log(validators.isStrongPassword("abcdefgh")); // false – nav ciparu
console.log(validators.isStrongPassword("12345678")); // false – nav burtu
console.log(validators.isStrongPassword(12345678)); // false – nav string

// isValidDate
console.log("YYYY-MM-DD formāts");
console.log(validators.isValidDate("2025-12-01")); // true
console.log(validators.isValidDate("2025-02-28")); // true
console.log(validators.isValidDate("2025-02-30")); // false
console.log(validators.isValidDate("2025-13-01")); // false
console.log(validators.isValidDate("2025-2-1")); // false – formāts nepareizs
console.log(validators.isValidDate(20231201)); // false – nav string

const nums = [1, 2, 3, 4, 5];

// Higher-Order Functions
console.log("Higher-Order Functions");
// myForEach
console.log("myForEach:");
higherOrder.myForEach(nums, (x) => console.log(x * 2));

// myMap
const doubled = higherOrder.myMap(nums, (x) => x * 2);
console.log("myMap:", doubled);

// myFilter
const evens = higherOrder.myFilter(nums, (x) => x % 2 === 0);
console.log("myFilter:", evens);

// myReduce
const sum = higherOrder.myReduce(nums, (acc, x) => acc + x, 0);
console.log("myReduce:", sum);
