// Iegūstam komandrindas argumentus
const value = Number(process.argv[2]); // temperatūras vērtība
const unit = process.argv[3]; // mērvienība (C vai F)

// Validācija
if (isNaN(value) || !unit) {
  console.log("Lietošana: node temperature.js <temperatūra> <C|F>");
  process.exit(1);
}

// Konvertēšana
if (unit === "C") {
  const fahrenheit = (value * 9) / 5 + 32;
  console.log(`${value}°C = ${fahrenheit}°F`);
} else if (unit === "F") {
  const celsius = ((value - 32) * 5) / 9;
  console.log(`${value}°F = ${celsius}°C`);
} else {
  console.log("Kļūda: mērvienībai jābūt C vai F");
}
