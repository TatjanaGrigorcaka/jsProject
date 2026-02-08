/**
 * Aprēķina vienas rindas kopsummu (daudzums x cena)
 */
const calcLineTotal = (item) => item.qty * item.price;

/**
 * Aprēķina visa saraksta kopējo summu
 */
const calcGrandTotal = (items) => {
  return items.reduce((sum, item) => sum + calcLineTotal(item), 0);
};

/**
 * Saskaita kopējo fizisko vienību skaitu (visu qty summa)
 */
const countUnits = (items) => {
  return items.reduce((sum, item) => sum + item.qty, 0);
};

/**
 * Funkcijas, kas sagatavo sarakstu sūtīšanai
 */
const formatForSms = (items, grandTotal) => {
  let text = "IEPIRKUMU SARAKSTS:\n";
  items.forEach((item, i) => {
    // Aprēķinām konkrētās rindas summu
    const lineTotal = (item.qty * item.price).toFixed(2);
    text += `${i + 1}. ${item.name} x ${item.qty} (${item.price.toFixed(2)} EUR/gab.) = ${lineTotal} EUR \n`;
  });
  text += `------------------------------\n`;
  text += `KOPĀ NEPIECIEŠAMS: ${grandTotal} EUR`;
  return text;
};

module.exports = { calcLineTotal, calcGrandTotal, countUnits, formatForSms };
