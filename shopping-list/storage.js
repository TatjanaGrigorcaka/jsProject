const fs = require("fs");
const FILE_PATH = "./shopping.json";

/**
 * Nolasa shopping.json, atgriež masīvu.
 * Ja fails neeksistē vai ir kļūdains — atgriež []
 */
function loadList() {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const data = fs.readFileSync(FILE_PATH, "utf8");
  return JSON.parse(data || "[]");
}

/**
 * Saglabā masīvu shopping.json failā glītā formātā
 */
function saveList(items) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(items, null, 2));
}

// Eksportējam funkcijas lietošanai citos failos
module.exports = { loadList, saveList };
