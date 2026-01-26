// Importē readline moduli
const readline = require("readline");

// Izveido readline interfeisu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Mainīgie atbilžu saglabāšanai
let name;
let age;
let city;

// 1. jautājums
rl.question("Kā tevi sauc? ", (answer1) => {
  name = answer1;

  // 2. jautājums
  rl.question("Cik tev ir gadu? ", (answer2) => {
    age = answer2;

    // 3. jautājums
    rl.question("Kurā pilsētā tu dzīvo? ", (answer3) => {
      city = answer3;

      // Kopsavilkums
      console.log("\n--- Kopsavilkums ---");
      console.log(`Vārds: ${name}`);
      console.log(`Vecums: ${age}`);
      console.log(`Pilsēta: ${city}`);

      // Aizver readline
      rl.close();
    });
  });
});
