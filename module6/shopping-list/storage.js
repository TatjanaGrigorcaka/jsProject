const fs = require("fs");
const PRICES_FILE = "./prices.json";

// Iepirkumu saraksta funkcijas
/**
 * Funkcijas gaida 'fileName' kā parametru
 * Ja fails neeksistē vai ir kļūdains — atgriež []
 */
function loadList(fileName) {
  if (!fs.existsSync(fileName)) {
    return [];
  }
  const data = fs.readFileSync(fileName, "utf8");
  return JSON.parse(data || "[]");
}

/**
 * Saglabā masīvu saraksta failā glītā formātā
 */
function saveList(fileName, items) {
  fs.writeFileSync(fileName, JSON.stringify(items, null, 2));
}

// Cenu datubāzes funkcijas
function loadPrices() {
  if (!fs.existsSync(PRICES_FILE)) return {};
  return JSON.parse(fs.readFileSync(PRICES_FILE, "utf8") || "{}");
}

function savePrices(prices) {
  fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
}

// Funkcija, lai atrastu visus json failus (izņemot prices.json)
function getAvailableLists() {
  return fs
    .readdirSync("./")
    .filter((file) => file.endsWith(".json") && file !== "prices.json");
}

// Funkcija teksta eksportam
function exportToText(fileName, content) {
  const textFileName = fileName.replace(".json", ".txt");
  fs.writeFileSync(textFileName, content);
  return textFileName;
}

// Eksportējam funkcijas lietošanai citos failos
module.exports = {
  loadList,
  saveList,
  loadPrices,
  savePrices,
  getAvailableLists,
  exportToText,
};
