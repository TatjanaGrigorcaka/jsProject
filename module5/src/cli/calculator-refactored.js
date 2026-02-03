/**
 * Validē kalkulatora ievades datus
 * @param {number} a - Pirmais skaitlis
 * @param {string} op - Operators (+, -, *, /, %)
 * @param {number} b - Otrais skaitlis
 * @returns {string|null} Kļūdas ziņojums vai null, ja ievade ir derīga
 * @example
 * validateInput(5, "+", 3) // null
 * validateInput("a", "+", 2) // "Kļūda: Lūdzu ievadiet derīgus skaitļus!"
 */
const validateInput = (a, op, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Kļūda: Lūdzu ievadiet derīgus skaitļus!";
  }

  const validOperators = ["+", "-", "*", "/", "%"];
  if (!validOperators.includes(op)) {
    return `Kļūda: Nezināms operators "${op}"`;
  }

  return null;
};

/**
 * Saskaita divus skaitļus
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 * add(2, 3) // 5
 */
const add = (a, b) => a + b;

/**
 * Atņem divus skaitļus
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const subtract = (a, b) => a - b;

/**
 * Reizina divus skaitļus
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a, b) => a * b;

/**
 * Dalīšana ar nulles pārbaudi
 * @param {number} a
 * @param {number} b
 * @returns {number|string} Rezultāts vai kļūdas ziņojums
 * @example
 * divide(10, 2) // 5
 * divide(10, 0) // "Kļūda: Dalīšana ar nulli nav atļauta"
 */
const divide = (a, b) =>
  b === 0 ? "Kļūda: Dalīšana ar nulli nav atļauta" : a / b;

/**
 * Aprēķina atlikumu dalot
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
const modulo = (a, b) =>
  b === 0 ? "Kļūda: Dalīšana ar nulli nav atļauta" : a % b;

/**
 * Izvēlas un izpilda matemātisko operāciju
 * @param {number} a
 * @param {string} op
 * @param {number} b
 * @returns {number|string} Aprēķina rezultāts vai kļūda
 * @example
 * calculate(5, "*", 4) // 20
 */
const calculate = (a, op, b) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulo(a, b);
  }
};

/**
 * Formatē un izvada rezultātu konsolē
 * @param {number|string} result - Aprēķina rezultāts vai kļūda
 * @param {number} a
 * @param {string} op
 * @param {number} b
 */
const formatResult = (result, a, op, b) => {
  if (typeof result === "number") {
    console.log(`${a} ${op} ${b} = ${result}`);
  } else {
    console.log(result);
  }
};

/**
 * Galvenā kalkulatora palaišanas funkcija
 * @param {number} a - Pirmais skaitlis
 * @param {string} op - Operators
 * @param {number} b - Otrais skaitlis
 * @example
 * runCalculator(5, "+", 3)
 */
const runCalculator = (a, op, b) => {
  const error = validateInput(a, op, b);
  if (error) {
    console.log(error);
    return;
  }

  const result = calculate(a, op, b);
  formatResult(result, a, op, b);
};

module.exports = {
  runCalculator,
};
