const { loadList, saveList } = require("./storage");

// Iegūstam komandu un argumentus
const [, , command, name, qtyInput, priceInput] = process.argv;

// Sākotnēji ielādējam datus atmiņā
let list = loadList();

switch (command) {
  case "add":
    const qty = Number(qtyInput);
    const price = Number(priceInput);

    // Validācija
    if (!name || isNaN(qty) || isNaN(price) || qty <= 0 || price <= 0) {
      console.log("Kļūda: Izmanto: add [nosaukums] [daudzums] [cena]");
      console.log("Piemērs: node shop.js add Maize 3 1.20");
    } else {
      const item = { name, qty, price };
      list.push(item);
      saveList(list);
      console.log(`✓ Pievienots: ${name} (${Number(price).toFixed(2)} EUR)`);
    }
    break;

  case "list":
    if (list.length === 0) {
      console.log("Iepirkumu saraksts ir tukšs.");
    } else {
      console.log("Iepirkumu saraksts:");
      list.forEach((item, index) => {
        console.log(
          `${index + 1}. ${item.name} — ${item.price.toFixed(2)} EUR`,
        );
      });
    }
    break;

  case "total":
    const total = list.reduce((sum, item) => sum + item.price, 0);
    console.log(`Kopā: ${total.toFixed(2)} EUR (${list.length} produkti)`);
    break;

  case "clear":
    saveList([]);
    console.log("✓ Saraksts ir notīrīts.");
    break;

  default:
    console.log("Nezināma komanda! Izmanto: add, list, total, clear");
}

// CLI commands to ran shop.js
// node shop.js add Maize 1.20
// node shop.js add Piens 1.50
// node shop.js list
// node shop.js total
// node shop.js clear
