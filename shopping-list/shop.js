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
      let prices = loadPrices(); // Ielādējam esošās cenas

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
        saveList(list);

        console.log(
          `✓ Pievienots: ${productName} × ${qty} (${finalPrice.toFixed(2)} EUR/gab.) = ${(qty * finalPrice).toFixed(2)} EUR`,
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
