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

module.exports = { calcLineTotal, calcGrandTotal, countUnits };
