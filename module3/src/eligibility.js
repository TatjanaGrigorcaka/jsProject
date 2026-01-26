// Persona dati (maini šīs vērtības, lai testētu)
const age = 21;
const hasLicense = true;
const isVeteran = false;
const isStudent = true;

console.log(
  `--- Personas dati: Vecums ${age}, Apliecība: ${hasLicense}, Veterāns: ${isVeteran}, Students: ${isStudent} --- \n`,
);

// 1. Balsošana (Vienkāršs salīdzinājums)
const canVote = age >= 18;
console.log(`Var balsot: ${canVote ? "Jā" : "Nē"}`);

// 2. Auto īre (Abi nosacījumi ir obligāti: &&)
const canRentCar = age >= 21 && hasLicense;
console.log(`Var īrēt auto: ${canRentCar ? "Jā" : "Nē"}`);

// 3. Senioru atlaide (Pietiek ar vienu no nosacījumiem: ||)
const seniorDiscount = age >= 65 || isVeteran;
console.log(`Senioru atlaide: ${seniorDiscount ? "Jā" : "Nē"}`);

// 4. Studentu atlaide (Vairāku nosacījumu virkne: &&)
const studentDiscount = age >= 16 && age <= 26 && isStudent;
console.log(`Studentu atlaide: ${studentDiscount ? "Jā" : "Nē"}`);
