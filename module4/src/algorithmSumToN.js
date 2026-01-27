// sumToN
//Algoritms: sum to N

// SĀKT
// 1. Ievadīt skaitli N
const N = Number(process.argv[2]);

// Papildus validācija (nav pseido-kodā, bet pievienota JS kodā)
if (isNaN(N) || N < 1) {
  console.log("Kļūda: Lūdzu ievadi pozitīvu veselu skaitli");
  process.exit(1);
}

// 2. Summa = 0
let Summa = 0;

// 3. Skaitlis = 1
let Skaitlis = 1;

// 4. Kamēr Skaitlis ≤ N, darīt
while (Skaitlis <= N) {
  // Summa = Summa + Skaitlis
  Summa = Summa + Skaitlis;

  // Skaitlis = Skaitlis + 1
  Skaitlis = Skaitlis + 1;
}
// Beigt ciklu

// 5. Izvadīt rezultātu
console.log("Summa no 1 līdz N ir", Summa);

// BEIGT
