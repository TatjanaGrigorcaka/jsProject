// 1. Primitīvie tipi un 2. typeof
console.log("--- 1. & 2. Primitīvie tipi un to typeof ---");
let textName = "Anna";
let textEmpty = "";
console.log(textName, typeof textName);
console.log(textEmpty, typeof textEmpty);

let age = 20;
let price = 15.55;
console.log(age, typeof age);
console.log(price, typeof price);

let isLearning = true;
let isFinished = false;
console.log(isLearning, typeof isLearning);
console.log(isFinished, typeof isFinished);

let emptyRoom = null;
let unknownValue = null;
console.log(emptyRoom, typeof emptyRoom);
console.log(unknownValue, typeof unknownValue);

let userLocation; // undefined pēc noklusējuma
let undefinedExplict = undefined;
console.log(userLocation, typeof userLocation);
console.log(undefinedExplict, typeof undefinedExplict);

// 3.  Automātisko tipu pārveidošana (type coercion)
console.log("\n--- 3. Automātiskā tipu pārveidošana ---");

// Saskaitīšana ar string: prioritāte ir tekstam (concatenation)
console.log('"5" + 3 =', "5" + 3); // "53" string concatenation)

// Atņemšana: JS saprot, ka tekstu nevar atņemt, tāpēc mēģina pārvērst par skaitli
console.log('"5" - 3 =', "5" - 3); // 2  (number subtraction)

// Boolean un Number: true kļūst par 1, false par 0
console.log("true + 5 =", true + 5); // 6
console.log("false + 5 =", false + 5); // 5

// 4. Eksplicītās konversijas
console.log("\n--- 4. Eksplicītās konversijas ---");

// Number() ar tekstu, kas ir cipars
console.log('Number("7") ->', Number("7")); // 7

// Number() ar tekstu, kas ir 0
console.log('Number("0") ->', Number("0")); // 0

// Konversija uz Boolean
console.log("Boolean(5) ->", Boolean(5)); // true

// String() ar tekstu, kas nav cipars
console.log('String("abc") ->', String("abc")); // "abc"

// String() ar ciparu
console.log("String(7) ->", String(7)); // "7"

// String() ar 0
console.log("String(0) ->", String(0)); // "0"

// 5. Robežgadījumi
console.log("\n--- 5. Robežgadījumi ---");
// Konversija uz Number
// null pārvēršana par skaitli
console.log("Number(null) ->", Number(null)); // 0

// undefined pārvēršana par skaitli
console.log("Number(undefined) ->", Number(undefined)); // NaN

// tukša virkne kļūst par 0
console.log('Number("") ->', Number("")); // 0

// Konversija uz Boolean
// Boolean() ar pilnīgi tukšu virkni (falsy)
console.log('Boolean("") ->', Boolean("")); // false

// Boolean() ar virkni, kurā ir simbols "0" (truthy!)
// Jebkurš ne-tukšs string ir true, pat ja tajā ir nulle
console.log('Boolean("0") ->', Boolean("0")); // true
console.log('Boolean("false") ->', Boolean("false")); // true

// Konversija uz String
// Number() ar tekstu, kas nav cipars
console.log('Number("abc") ->', Number("abc")); // NaN

// null pārvēršana par tekstu
console.log("String(null) ->", String(null)); //null

// undefined pārvēršana par tekstu
console.log("String(undefined) ->", Number(undefined)); // NaN
