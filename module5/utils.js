// String functions

/** Capitalizes the first letter of a string.
 * @param {string} str - Input string
 * @returns {string} String with the first letter capitalized
 * @example
 * capitalize("hello") // "Hello"
 */
const capitalize = (str) => {
  // Pārbaude: vai str ir padots
  if (str === undefined || str === null) {
    console.log("Kļūda: arguments 'str' nav padots");
    return "";
  }

  // Pārbaude: vai str ir string
  if (typeof str !== "string") {
    console.log("Kļūda: ievade nav string");
    return "";
  }

  // Pārbaude: tukša virkne
  if (str.length === 0) {
    console.log("Kļūda: ievadīta tukša virkne");
    return "";
  }

  // Pirmā burta kapitālizācija
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * Truncates a string to a maximum length and adds "..." if truncated.
 * @param {string} str - Input string
 * @param {number} maxLen - Optional maximum length
 * @returns {string} Truncated string with "..." if needed
 * @example
 * truncate("Hello world", 5) // "Hello..."
 */
const truncate = (str, maxLen) => {
  // Pārbaude: vai str ir padots
  if (str === undefined || str === null) {
    console.log("Kļūda: arguments 'str' nav padots");
    return "";
  }

  // Pārbaude: vai str ir string
  if (typeof str !== "string") {
    console.log("Kļūda: ievade nav string");
    return "";
  }

  // Pārbaude: tukša virkne
  if (str.length === 0) {
    console.log("Kļūda: ievadīta tukša virkne");
    return "";
  }

  // Pārbaude: maxLen
  if (maxLen !== undefined) {
    // 1. Pārbaude: vai maxLen ir skaitlis
    if (typeof maxLen !== "number" || isNaN(maxLen)) {
      console.log("Kļūda: ievade nav skaitlis");
      return "";
    }

    // 2. Pārbaude: vai maxLen ir pozitīvs
    if (maxLen <= 0) {
      console.log("Kļūda: maxLen jābūt pozitīvam skaitlim");
      return "";
    }
  } else {
    // Ja maxLen nav padots → izmanto visu str garumu
    maxLen = str.length;
  }

  // Ja virkne ir īsāka vai vienāda ar maxLen → nav nepieciešams apgriezt
  if (str.length <= maxLen) return str;

  // Apgriež virkni līdz maxLen un pievieno "..."
  return str.slice(0, maxLen) + "...";
};

/**
 * Counts the number of words in a string.
 * @param {string} str - Input string
 * @returns {number} Number of words
 * @example
 * countWords("Hello world") // 2
 */
const countWords = (str) => {
  // Pārbaude: vai arguments ir padots
  if (str === undefined || str === null) {
    console.log("Kļūda: arguments 'str' nav padots");
    return 0;
  }

  // Pārbaude: vai str ir string
  if (typeof str !== "string") {
    console.log("Kļūda: ievade nav string");
    return 0;
  }

  // Pārbaude: tukša virkne
  if (str.trim().length === 0) {
    console.log("Kļūda: ievadīta tukša virkne");
    return 0; // Tukšā virkne → nav vārdu
  }

  // Saskaita vārdus, sadalot pēc vienu vai vairāku atstarpju secības
  return str.trim().split(/\s+/).length;
};

// Number functions

/**
 * Limits a number to a given range (clamps it between min and max).
 * @param {number} num - Input number
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 * @example
 * clamp(10, 0, 5) // 5
 */
const clamp = (num, min, max) => {
  // Pārbaude: vai num, min un max ir padoti
  if (num === undefined || min === undefined || max === undefined) {
    console.log("Kļūda: visi 3 argumenti (num, min, max) ir jāpadod");
    return NaN;
  }
  // Pārbaude: vai num, min, max ir derīgi skaitļi
  if (typeof num !== "number" || isNaN(num)) {
    console.log("Kļūda: 'num' jābūt skaitlim");
    return NaN;
  }

  if (typeof min !== "number" || isNaN(min)) {
    console.log("Kļūda: 'min' jābūt skaitlim");
    return NaN;
  }

  if (typeof max !== "number" || isNaN(max)) {
    console.log("Kļūda: 'max' jābūt skaitlim");
    return NaN;
  }

  // Loģika: ierobežojam num starp min un max
  if (num < min) return min;
  if (num > max) return max;
  return num;
};

/**
 * Checks if a number is a prime number.
 * @param {number} num - Input number
 * @returns {boolean} True if prime, false otherwise
 * @example
 * isPrime(7) // true
 */
const isPrime = (num) => {
  // Pārbaude: vai arguments ir padots
  if (num === undefined || num === null) {
    console.log("Kļūda: arguments 'num' nav padots");
    return false;
  }

  // Apvienota pārbaude: vai num ir skaitlis un nav NaN
  if (typeof num !== "number" || isNaN(num)) {
    console.log("Kļūda: ievade nav skaitlis");
    return false;
  }

  // Ja num ir mazāks par 2 → nav pirmskaitlis
  if (num < 2) {
    console.log(`Kļūda: Skaitlim jābūt pozitīvam un lielākam par 1`);
    return false;
  }

  // Pārbauda dalāmību
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

/**
 * Calculates factorial of a number.
 * @param {number} n - Non-negative integer
 * @returns {number} Factorial result
 * @example
 * factorial(5) // 120
 */
const factorial = (n) => {
  // Vai ir derīgs skaitlis
  if (typeof n !== "number" || isNaN(n)) {
    console.log("Kļūda: ievade nav skaitlis");
    return NaN;
  }

  // Faktoriāls nav definēts negatīviem skaitļiem
  if (n < 0) {
    console.log("Kļūda: skaitlim jābūt >= 0");
    return NaN;
  }

  // Faktoriāls definēts tikai veseliem skaitļiem
  if (!Number.isInteger(n)) {
    console.log("Kļūda: jābūt veselam skaitlim");
    return NaN;
  }

  // 0! un 1!
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

// Array functions

/**
 * Calculates the sum of an array (without built-in methods).
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of elements
 * @example
 * sum([1, 2, 3]) // 6
 */
const sum = (arr) => {
  // Pārbaude: vai arguments ir padots
  if (arr === undefined || arr === null) {
    console.log("Kļūda: masīvs nav padots");
    return NaN;
  }

  // Pārbaude: vai tas tiešām ir masīvs
  if (!Array.isArray(arr)) {
    console.log("Kļūda: ievade nav masīvs");
    return NaN;
  }

  // Pārbaude: vai masīvs nav tukšs
  if (arr.length === 0) {
    console.log("Kļūda: masīvs ir tukšs");
    return 0; // loģiski – tukša masīva summa ir 0
  }

  let total = 0;

  // Cikls bez iebūvētām metodēm
  for (let i = 0; i < arr.length; i++) {
    // Pārbaude: vai katrs elements ir derīgs skaitlis
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      console.log(`Kļūda: masīva elements ar indeksu ${i} nav skaitlis`);
      return NaN;
    }

    total += arr[i];
  }

  return total;
};

/**
 * Calculates the average of an array (without built-in methods).
 * @param {number[]} arr - Array of numbers
 * @returns {number} Average value
 * @example
 * average([2, 4, 6]) // 4
 */
const average = (arr) => {
  // Pārbaude: vai arguments ir padots
  if (arr === undefined || arr === null) {
    console.log("Kļūda: masīvs nav padots");
    return NaN;
  }

  // Pārbaude: vai tas tiešām ir masīvs
  if (!Array.isArray(arr)) {
    console.log("Kļūda: ievade nav masīvs");
    return NaN;
  }

  // Pārbaude: vai masīvs nav tukšs
  if (arr.length === 0) {
    console.log("Brīdinājums: masīvs ir tukšs, vidējais = 0");
    return 0;
  }

  // Pārbaude: vai visi elementi ir skaitļi
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      console.log(`Kļūda: masīva elements ar indeksu ${i} nav skaitlis`);
      return NaN;
    }
  }

  // Aprēķina summu ar iepriekš definēto sum funkciju
  const total = sum(arr);

  // Aprēķina vidējo
  return total / arr.length;
};

module.exports = {
  capitalize,
  truncate,
  countWords,
  clamp,
  isPrime,
  factorial,
  sum,
  average,
};
