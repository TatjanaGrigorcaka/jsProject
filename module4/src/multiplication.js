// multiplication table generator
const N = Number(process.argv[2]);

if (isNaN(N) || N <= 0) {
  console.log("Lūdzu ievadi pozitīvu skaitli N");
  process.exit(1);
}

// Funkcija, lai formatētu katru skaitli ar vienādu platumu
function formatNumber(num, width) {
  return String(num).padStart(width, " ");
}

// Atrodam platāko skaitli (N*N) un tā platumu
const maxNumber = N * N;
const width = String(maxNumber).length;

// Ārējais cikls
for (let i = 1; i <= N; i++) {
  let row = "";
  // console.log(`--- Rinda ${i} sāk ---`); // izsekos ārējo ciklu

  // Iekšējais cikls
  for (let j = 1; j <= N; j++) {
    const value = i * j;
    // console.log(`i=${i}, j=${j}, value=${value}`); // izsekos iekšējo ciklu
    row += formatNumber(value, width) + " ";
  }
  console.log(row.trim());
  // console.log(`Rinda ${i} rezultāts: ${row.trim()}`);
}
