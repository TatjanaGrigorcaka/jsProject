// Argumentu nolasīšana: node converter.js [tips] [vērtība]
// Piemērs: node converter.js km-mi 10
const type = process.argv[2];
const value = Number(process.argv[3]);

// Konversijas koeficienti
const KM_TO_MI = 0.621371;
const KG_TO_LB = 2.20462;
const L_TO_GAL = 0.264172;

let result;
let unitFrom = "";
let unitTo = "";

if (isNaN(value)) {
  console.log("Kļūda: Lūdzu ievadiet skaitlisku vērtību!");
  process.exit();
}

switch (type) {
  // Kilometri un jūdzes
  case "km-mi":
    result = value * KM_TO_MI;
    unitFrom = "km";
    unitTo = "mi";
    break;
  case "mi-km":
    result = value / KM_TO_MI;
    unitFrom = "mi";
    unitTo = "km";
    break;

  // Kilogrami un mārciņas
  case "kg-lb":
    result = value * KG_TO_LB;
    unitFrom = "kg";
    unitTo = "lb";
    break;
  case "lb-kg":
    result = value / KG_TO_LB;
    unitFrom = "lb";
    unitTo = "kg";
    break;

  // Litri un galoni
  case "l-gal":
    result = value * L_TO_GAL;
    unitFrom = "l";
    unitTo = "gal";
    break;
  case "gal-l":
    result = value / L_TO_GAL;
    unitFrom = "gal";
    unitTo = "l";
    break;

  default:
    console.log("Kļūda: Nezināms konversijas tips!");
    console.log("Pieejamie: km-mi, mi-km, kg-lb, lb-kg, l-gal, gal-l");
    process.exit();
}

// Izvade ar 2 decimālzīmēm, izmantojot .toFixed(2)
console.log(`${value} ${unitFrom} ir: ${result.toFixed(2)} ${unitTo}`);
