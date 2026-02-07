const fs = require("fs");
const LIST_FILE = "./shopping.json";
const PRICES_FILE = "./prices.json";

// Iepirkumu saraksta funkcijas
/**
 * Nolasa shopping.json, atgriež masīvu.
 * Ja fails neeksistē vai ir kļūdains — atgriež []
 */
function loadList() {
  if (!fs.existsSync(LIST_FILE)) {
    return [];
  }
  const data = fs.readFileSync(LIST_FILE, "utf8");
  return JSON.parse(data || "[]");
}

/**
 * Saglabā masīvu shopping.json failā glītā formātā
 */
function saveList(items) {
  fs.writeFileSync(LIST_FILE, JSON.stringify(items, null, 2));
}

// Cenu datubāzes funkcijas
function loadPrices() {
  if (!fs.existsSync(PRICES_FILE)) return {};
  return JSON.parse(fs.readFileSync(PRICES_FILE, "utf8") || "{}");
}

function savePrices(prices) {
  fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
}

// Eksportējam funkcijas lietošanai citos failos
module.exports = { loadList, saveList, loadPrices, savePrices };
