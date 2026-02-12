const readline = require("readline");
const {
  loadList,
  saveList,
  loadPrices,
  savePrices,
  getAvailableLists,
  exportToText,
} = require("./storage");
const {
  calcLineTotal,
  calcGrandTotal,
  countUnits,
  formatForSms,
} = require("./utils");

// Izveidojam interfeisu saziņai ar lietotāju
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Palīgfunkcija, kas asinhroni pajautā cenu.
 * Tā turpina jautāt, līdz tiek ievadīts derīgs pozitīvs skaitlis.
 */
function askForPrice() {
  return new Promise((resolve) => {
    rl.question("Cena nav zināma. Ievadi cenu: > ", (input) => {
      const p = parseFloat(input);
      if (isNaN(p) || p <= 0) {
        console.log("Kļūda: Lūdzu ievadiet derīgu pozitīvu skaitli!");
        resolve(askForPrice()); // Rekursija, ja ievade nepareiza
      } else {
        resolve(p);
      }
    });
  });
}

// Galvenā asinhronā funkcija
async function run() {
  // Saraksta izvēle
  const existingLists = getAvailableLists();
  if (existingLists.length > 0) {
    console.log("Pieejamie saraksti: " + existingLists.join(", "));
  }

  const fileChoice = await new Promise((res) =>
    rl.question("Ar kuru sarakstu strādāsim? (ievadi nosaukumu): ", res),
  );

  // Standartizējam faila nosaukumu
  const activeFile = fileChoice.endsWith(".json")
    ? fileChoice
    : `${fileChoice}.json`;

  // Iegūstam komandu un argumentus
  const [, , command, name, qtyInput] = process.argv;
  // Sākotnēji ielādējam datus atmiņā
  let list = loadList(activeFile);
  if (list.length === 0) {
    console.log(
      `ℹ️ Saraksts '${activeFile}' ir tukšs vai jauns. Pievienojot pirmo preci, fails tiks izveidots.`,
    );
  } else {
    console.log(
      `✅ Ielādēts esošs saraksts: '${activeFile}' (${list.length} pozīcijas).`,
    );
  }
  // Ielādējam esošās cenas
  let prices = loadPrices();

  switch (command) {
    case "add":
      const qty = Number(qtyInput);

      if (!name || isNaN(qty) || qty <= 0) {
        console.log("Kļūda: Izmanto: add [nosaukums] [daudzums]");
      } else {
        let finalPrice;
        const productName =
          name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Standartizējam nosaukumu
        const existingPrice = prices[productName];

        if (existingPrice) {
          // 1. Cena jau eksistē
          console.log(`Atrasta cena: ${existingPrice.toFixed(2)} EUR/gab.`);
          const answer = await new Promise((res) =>
            rl.question("[A]kceptēt / [M]ainīt? > ", res),
          );

          if (answer.toUpperCase() === "M") {
            finalPrice = await askForPrice();
            prices[productName] = finalPrice; // Atjaunina cenu objektā
            savePrices(prices); // Saglabā prices.json
            console.log(
              `✓ Cena atjaunināta: ${productName} → ${finalPrice.toFixed(2)} EUR`,
            );
          } else {
            finalPrice = existingPrice;
          }
        } else {
          // 2. Cena nav zināma
          finalPrice = await askForPrice();
          prices[productName] = finalPrice;
          savePrices(prices);
          console.log(
            `✓ Cena saglabāta: ${productName} (${finalPrice.toFixed(2)} EUR)`,
          );
        }

        // Pievienojam sarakstam
        const item = { name: productName, qty, price: finalPrice };
        list.push(item);
        saveList(activeFile, list);
        const lineTotal = calcLineTotal(item).toFixed(2);
        console.log(`Pievienots sarakstā ${activeFile}`);
        console.log(
          `✓ Pievienots: ${productName} × ${qty} (${finalPrice.toFixed(2)} EUR/gab.) = ${lineTotal} EUR`,
        );
      }
      break;

    case "list":
      if (list.length === 0) {
        console.log(`Saraksts '${activeFile}' ir tukšs.`);
      } else {
        console.log(`Saraksta '${activeFile}' saturs:`);
        list.forEach((item, index) => {
          const lineTotal = calcLineTotal(item).toFixed(2);
          console.log(
            `  ${index + 1}. ${item.name} × ${item.qty} — ${item.price.toFixed(2)} EUR/gab. — ${lineTotal} EUR`,
          );
        });
      }
      break;

    case "total":
      const grandTotal = calcGrandTotal(list).toFixed(2);
      const totalUnits = countUnits(list);
      console.log(
        `Kopā sarakstā ${activeFile}: ${grandTotal} EUR (${totalUnits} vienības, ${list.length} produkti)`,
      );
      break;

    case "export":
      if (list.length === 0) {
        console.log("Nav ko eksportēt - saraksts ir tukšs!");
      } else {
        const grandTotal = calcGrandTotal(list).toFixed(2);
        const smsContent = formatForSms(list, grandTotal);
        const exportedFile = exportToText(activeFile, smsContent);

        console.log(`\n✓ VEIKSMĪGI EKSPORTĒTS uz: ${exportedFile}`);
        console.log("--- FAILA SATURS (SMS/WhatsApp) ---");
        console.log(smsContent);
        console.log("------------------------------");
      }
      break;

    case "clear":
      saveList(activeFile, []);
      console.log(`✓ Saraksts ${activeFile} ir notīrīts.`);
      break;

    default:
      console.log("Nezināma komanda! Izmanto: add, list, total, clear, export");
  }

  rl.close(); // Obligāti aizveram interfeisu beigās
}

run();

// Palaižam programmu
// CLI commands to ran shop.js
// node shop.js add Maize 3
// node shop.js add Piens 2
// node shop.js list
// node shop.js total
// node shop.js clear
