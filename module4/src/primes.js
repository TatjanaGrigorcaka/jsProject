// primes finder
// Iegūstam N no argumentiem
const N = Number(process.argv[2]);

if (isNaN(N) || N < 2) {
  console.log("Lūdzu ievadi skaitli N ≥ 2");
  process.exit(1);
}

console.log(`Meklējam pirmskaitļus līdz ${N}...`);

// Sākam laika mērīšanu
console.time("Izpildes laiks");

// Izveidojam masīvu un pieņemam, ka visi skaitļi ir pirmskaitļi (true)
const isPrime = new Array(N + 1).fill(true);

isPrime[0] = false; // 0 un 1 nav pirmskaitļi
isPrime[1] = false;

// Eratostēna siets
for (let i = 2; i * i <= N; i++) {
  // Ja sieve[i] nav mainīts, tad tas ir pirmskaitlis
  if (isPrime[i]) {
    // Atzīmējam visus i daudzkārtņus kā ne-pirmskaitļus
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

// Savāc visus pirmskaitļus
const primes = [];
for (let i = 2; i <= N; i++) {
  if (isPrime[i]) {
    primes.push(i);
  }
}

// Beidzam laika mērīšanu
console.timeEnd("Izpildes laiks");
// Izvade
console.log(`Pirmskaitļi līdz ${N}:`);
console.log(primes.join(", "));
