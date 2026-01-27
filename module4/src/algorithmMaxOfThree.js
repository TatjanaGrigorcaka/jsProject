// maxOfThree
// Algoritms: LIELĀKAIS NO TRIM

const readline = require("readline");

// Readline interfeiss
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A, B, C;

// ========== 1. SOLIS ==========
// Atkārtot ievadi, kamēr nav ievadīti 3 skaitļi
function askNumbers() {
  rl.question("Ievadi trīs skaitļus A B C (piem: 5 10 3): ", (input) => {
    const parts = input.trim().split(" ");

    // 1. solis: Ja nav ievadīti 3 skaitļi
    if (parts.length !== 3) {
      console.log("Kļūda: Nav ievadīti 3 skaitļi");
      return askNumbers(); // atkārto (cikls)
    }

    A = Number(parts[0]);
    B = Number(parts[1]);
    C = Number(parts[2]);

    // Validācija: vai visi ir skaitļi
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      console.log("Kļūda: Visiem jābūt skaitļiem!");
      return askNumbers(); // atkārto (cikls)
    }

    // Ja viss korekti → turpinām algoritmu
    findMax();
  });
}

// ========== 2. SOLIS ==========
// Salīdzināšana
function findMax() {
  let largest;

  // 2. solis: Ja A ≥ B un A ≥ C
  if (A >= B && A >= C) {
    largest = A;
  }
  // Citādi, ja B ≥ A un B ≥ C
  else if (B >= A && B >= C) {
    largest = B;
  }
  // Citādi
  else {
    largest = C;
  }

  // ========== 3. SOLIS ==========
  // Izvadīt rezultātu
  console.log("Lielākais skaitlis ir:", largest);

  rl.close();
}

// SĀKT algoritmu
askNumbers();
