// Iegūstam argumentus no termināļa
const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

let result;

// 1. Pārbaudām, vai ievadītie skaitļi ir derīgi (nav NaN)
if (isNaN(num1) || isNaN(num2)) {
  console.log(`Kļūda: Lūdzu ievadiet derīgus skaitļus!`);
} else {
  // 2. Veicam aprēķinu atkarībā no operatora
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      // 3. Apstrādājam dalīšanu ar nulli
      if (num2 === 0) {
        result = "Kļūda: Dalīšana ar nulli nav atļauta";
      } else {
        result = num1 / num2;
      }
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      // 4. Apstrādājam nepareizu operatoru
      result = `Kļūda: Nezināms operators "${operator}"`;
  }

  // 5. Izvade, izmantojot template literals
  if (typeof result === "number") {
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } else {
    console.log(result);
  }
}

// isNaN
// console.log("isNaN(5) ->", isNaN(5)); // false
// console.log('isNaN("pieci") ->', isNaN("pieci")); // true
