const readline = require("readline");
const { loadList, saveList, loadPrices, savePrices } = require("./storage");
const { calcLineTotal, calcGrandTotal, countUnits } = require("./utils");

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
  // Iegūstam komandu un argumentus
  const [, , command, name, qtyInput] = process.argv;
  // Sākotnēji ielādējam datus atmiņā
  let list = loadList();

  switch (command) {
    case "add":
      const qty = Number(qtyInput);

      // Validācija (uz šo brīdi pārbaudām tikai nosaukumu un daudzumu)
      if (!name || isNaN(qty) || qty <= 0) {
        console.log("Kļūda: Izmanto: add [nosaukums] [daudzums]");
        console.log("Piemērs: node shop.js add Maize 3");
      } else {
        // Izsaucam readline interakciju
        const price = await askForPrice();

        const item = { name, qty, price };
        list.push(item);
        saveList(list);

        const lineTotal = calcLineTotal(item).toFixed(2);
        console.log(
          `✓ Pievienots: ${name} × ${qty} (${price.toFixed(2)} EUR/gab.) = ${lineTotal} EUR`,
        );
      }
      break;

    case "list":
      if (list.length === 0) {
        console.log("Iepirkumu saraksts ir tukšs.");
      } else {
        console.log("Iepirkumu saraksts:");
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
        `Kopā: ${grandTotal} EUR (${totalUnits} vienības, ${list.length} produkti)`,
      );
      break;

    case "clear":
      saveList([]);
      console.log("✓ Saraksts ir notīrīts.");
      break;

    default:
      console.log("Nezināma komanda! Izmanto: add, list, total, clear");
  }

  rl.close(); // Obligāti aizveram interfeisu beigās
}

run();

// Palaižam programmu
// CLI commands to ran shop.js
// node shop.js add Maize 3 1.20
// node shop.js add Piens 2 1.50
// node shop.js list
// node shop.js total
// node shop.js clear
