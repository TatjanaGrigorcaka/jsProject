// guess
const readline = require("readline");

// Izveido readline interfeisu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Nejaušs skaitlis no 1 līdz 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 10;

console.log("Es esmu iedomājies skaitli no 1 līdz 100.");
console.log("Tev ir 10 mēģinājumi to uzminēt!");

// Funkcija minēšanai
function askGuess() {
  rl.question("Ievadi savu minējumu: ", (answer) => {
    const guess = Number(answer);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("❌ Lūdzu ievadi skaitli no 1 līdz 100.");
      attempts--; // nekorektu ievadi neskaitām
      return askGuess();
    }

    if (guess === secretNumber) {
      console.log(
        `🎉 Apsveicu! Tu uzminēji skaitli ${secretNumber} ar ${attempts} mēģinājumiem.`,
      );
      rl.close();
    } else if (attempts >= maxAttempts) {
      console.log(
        `💥 Spēle beigusies! Pareizais skaitlis bija ${secretNumber}.`,
      );
      rl.close();
    } else if (guess < secretNumber) {
      console.log("📉 Par mazu!");
      askGuess();
    } else {
      console.log("📈 Par lielu!");
      askGuess();
    }
  });
}

// Sāk spēli
askGuess();
