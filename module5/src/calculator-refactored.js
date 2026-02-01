// 1. Validācijas funkcija

// Validē ievadītos argumentus
function validateInput(n1, op, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return "Kļūda: Lūdzu ievadiet derīgus skaitļus!";
  }
  const validOperators = ["+", "-", "*", "/", "%"];
  if (!validOperators.includes(op)) {
    return `Kļūda: Nezināms operators "${op}"`;
  }
  return null; // Null nozīmē, ka kļūdu nav
}

// 2. Operāciju funkcijas

// Saskaita divus skaitļus
const add = (a, b) => a + b;

//Atņem divus skaitļus
const subtract = (a, b) => a - b;

//Reizina divus skaitļus
const multiply = (a, b) => a * b;

// Dalīšana ar pārbaudi, vai b nav 0
const divide = (a, b) =>
  b === 0 ? "Kļūda: Dalīšana ar nulli nav atļauta" : a / b;

//Atlikums dalot a ar b
const modulo = (a, b) =>
  b === 0 ? "Kļūda: Dalīšana ar nulli nav atļauta" : a % b;

// 3. Galvenā aprēķina funkcija

// Aprēķina rezultātu atkarībā no operatora
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
    default:
      return `Kļūda: Nezināms operators "${op}"`;
  }
};

// 4. Formatēšanas funkcija

// Izvada rezultātu konsolē
const formatResult = (result, a, op, b) => {
  if (typeof result === "number") {
    console.log(`${a} ${op} ${b} = ${result}`);
  } else {
    console.log(result);
  }
};

// 5. Galvenā programmas loģika

// Iegūstam argumentus no termināļa
const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

// Validācija
const error = validateInput(num1, operator, num2);

if (error) {
  console.log(error);
} else {
  const result = calculate(num1, operator, num2);
  formatResult(result, num1, operator, num2);
}

// To ran calculator:
// node .\calculator.js 10 - 5
