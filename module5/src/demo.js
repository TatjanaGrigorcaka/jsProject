const utils = require("./utils");

// String functions
console.log(`\n String functions`);
// capitalize(str) // "hello" → "Hello"
console.log(`\n capitalize(str) // "hello" → "Hello"`);
console.log(utils.capitalize("hello")); // Hello
console.log(utils.capitalize()); // Kļūda: arguments 'str' nav padots
console.log(utils.capitalize(123)); // Kļūda: ievade nav string
console.log(utils.capitalize("")); // Kļūda: ievadīta tukša virkne4

// truncate(str, maxLen) // Apgriež un pievieno "..."
console.log(`\n truncate(str, maxLen) // Apgriež un pievieno "..."`);
console.log(utils.truncate("Hello world", 5)); // Hello ...
console.log(utils.truncate()); // Kļūda: arguments 'str' nav padots
console.log(utils.truncate(123)); // Kļūda: ievade nav string
console.log(utils.truncate("", 5)); // Kļūda: ievadīta tukša virkne
console.log(utils.truncate("Hello world", 0)); // Kļūda: maxLen jābūt pozitīvam skaitlim

// countWords(str) // Saskaita vārdus
console.log(`\n countWords(str) // Saskaita vārdus`);
console.log(utils.countWords("Hello world")); // 2
console.log(utils.countWords("   Hello world ! ")); // 3
console.log(utils.countWords()); // Kļūda: arguments 'str' nav padots → 0
console.log(utils.countWords(12345)); // Kļūda: ievade nav string → 0
console.log(utils.countWords("")); // Kļūda: ievadīta tukša virkne -> 0
console.log(utils.countWords("     ")); // Kļūda: ievadīta tukša virkne -> 0

// Number functions
console.log(`\n Number functions`);
console.log(`\n clamp(num, min, max) // Ierobežo vērtību diapazonā`);
// clamp(num, min, max) // Ierobežo vērtību diapazonā
console.log(utils.clamp(10, 0, 5)); // 5
console.log(utils.clamp(-3, 0, 10)); // 0
console.log(utils.clamp(7, 0, 10)); // 7
console.log(utils.clamp(5)); // Kļūda: visi 3 argumenti (num, min, max) ir jāpadod → NaN
console.log(utils.clamp("7", 0, 10)); // Kļūda: 'num' jābūt skaitlim → NaN
console.log(utils.clamp(5, 0, NaN)); // Kļūda: 'max' jābūt skaitlim → NaN

// isPrime(num) // Vai ir pirmskaitlis
console.log(`\n isPrime(num) // Vai ir pirmskaitlis`);
console.log(utils.isPrime(7)); // true
console.log(utils.isPrime(10)); // false
console.log(utils.isPrime(2)); // true
console.log(utils.isPrime(1)); // Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(utils.isPrime(-5)); //  Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1 -> false
console.log(utils.isPrime("7")); // Kļūda: ievade nav skaitlis → false
console.log(utils.isPrime()); // Kļūda: arguments 'num' nav padots → false
console.log(utils.isPrime(NaN)); // Kļūda: ievade nav skaitlis -> false

// factorial(n) // n!
console.log(`\n factorial(n) // n!`);
console.log(utils.factorial(5)); // 120
console.log(utils.factorial(0)); // 1
console.log(utils.factorial(1)); // 1
console.log(utils.factorial(-2)); // Kļūda: skaitlim jābūt >= 0 -> NaN
console.log(utils.factorial("5")); // Kļūda: ievade nav skaitlis -> NaN
console.log(utils.factorial(NaN)); // Kļūda: ievade nav skaitlis -> NaN
console.log(utils.factorial(3.5)); // Kļūda: jābūt veselam skaitlim -> NaN

// Array functions
console.log(`\n Array functions`);
// sum(arr) // Masīva summa
console.log(`\n sum(arr) // Masīva summa`);
console.log(utils.sum([1, 2, 3])); // 6
console.log(utils.sum([])); // Kļūda: masīvs ir tukšs -> 0
console.log(utils.sum([1, "2", 3])); // ļūda: masīva elements ar indeksu 1 nav skaitlis -> NaN
console.log(utils.sum("123")); // Kļūda: ievade nav masīvs -> NaN
console.log(utils.sum()); // Kļūda: masīvs nav padots -> NaN

// average(arr) // Vidējais aritmētiskais
console.log(`\n average(arr) // Vidējais aritmētiskais`);
console.log(utils.average([2, 4, 6])); // 4
console.log(utils.average([])); // Brīdinājums: masīvs ir tukšs, vidējais = 0 => 0
console.log(utils.average([1, "2", 3])); // Kļūda: masīva elements ar indeksu 1 nav skaitlis => NaN
console.log(utils.average("123")); // Kļūda: ievade nav masīvs => NaN
console.log(utils.average()); // Kļūda: masīvs nav padots => NaN

// isEmail
console.log(`\n isEmail: Vienkārša e-pasta validācija`);
console.log(isEmail("test@example.com")); // true
console.log(isEmail("user123@domain.co")); // true
console.log(isEmail("invalid-email")); // false
console.log(isEmail("")); // false
console.log(isEmail(12345)); // false

// isPhoneNumber
console.log(`\n isPhoneNumber: Latvijas formāts (+371 XXXXXXXX)`);
console.log(isPhoneNumber("+37112345678")); // true – derīgs numurs
console.log(isPhoneNumber("+37187654321")); // true – derīgs numurs
console.log(isPhoneNumber("+3711234567")); // false – par īsu (7 cipari)
console.log(isPhoneNumber("+371123456789")); // false – par garu (9 cipari)
console.log(isPhoneNumber("37112345678")); // false – trūkst "+"
console.log(isPhoneNumber("+37212345678")); // false – nepareizs kods
console.log(isPhoneNumber(12345678)); // false – nav string
console.log(isPhoneNumber("+371abcdef12")); // false – burti, ne tikai cipari

// isValidAge
console.log(`\n isValidAge: 0-150`);
console.log(isValidAge(25)); // true – derīgs vecums
console.log(isValidAge(0)); // true – minimums
console.log(isValidAge(150)); // true – maksimums
console.log(isValidAge(-5)); // false – negatīvs vecums
console.log(isValidAge(200)); // false – pāri maksimumam
console.log(isValidAge("25")); // false – nav number tipa
console.log(isValidAge(NaN)); // false – nav skaitlis

// isStrongPassword
console.log(`\n isStrongPassword: Vismaz 8 simboli, burti, cipari`);
console.log(isStrongPassword("Abc12345")); // true  – derīgs
console.log(isStrongPassword("abcdef12")); // true  – derīgs
console.log(isStrongPassword("abc123")); // false – < 8 simboli
console.log(isStrongPassword("abcdefgh")); // false – nav ciparu
console.log(isStrongPassword("12345678")); // false – nav burtu
console.log(isStrongPassword(12345678)); // false – nav string

// isValidDate
console.log(`\n YYYY-MM-DD formāts`);
console.log(isValidDate("2025-12-01")); // true
console.log(isValidDate("2025-02-28")); // true
console.log(isValidDate("2025-02-30")); // false
console.log(isValidDate("2025-13-01")); // false
console.log(isValidDate("2025-2-1")); // false – formāts nepareizs
console.log(isValidDate(20231201)); // false – nav string
