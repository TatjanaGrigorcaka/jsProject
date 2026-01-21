const name = process.argv[2];
const birthYear = Number(process.argv[3]); // pārvēršam uz skaitli

// Validācija: vai argumenti ir ievadīti un dzimšanas gads ir skaitlis
if (!name || !birthYear || isNaN(birthYear)) {
  console.log("Lūdzu ievadi savu vārdu un dzimšanas gadu!");
  process.exit(1); // beidz programmu
}

// Aprēķina vecumu
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

// Izvada personalizētu sveicienu
console.log(`Sveiks, ${name}! Tev ir ${age} gadi.`);
