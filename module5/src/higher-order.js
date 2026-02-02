// Higher-Order Functions

//Izsauc callback katram elementam
/**
 * Custom forEach implementation
 * @param {Array} arr - Input array
 * @param {Function} callback - Function to call for each element
 * @example
 * myForEach([1,2,3], x => console.log(x));
 */
const myForEach = (arr, callback) => {
  if (!Array.isArray(arr)) {
    console.log("Kļūda: pirmajam argumentam jābūt masīvam");
    return;
  }
  if (typeof callback !== "function") {
    console.log("Kļūda: otrajam argumentam jābūt funkcijai");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

// Atgriež jaunu masīvu ar transformētām vertībām
/**
 * Custom map implementation
 * @param {Array} arr - Input array
 * @param {Function} callback - Function to transform each element
 * @returns {Array} New array with transformed elements
 * @example
 * myMap([1,2,3], x => x*2) // [2,4,6]
 */
const myMap = (arr, callback) => {
  if (!Array.isArray(arr)) {
    console.log("Kļūda: pirmajam argumentam jābūt masīvam");
    return [];
  }
  if (typeof callback !== "function") {
    console.log("Kļūda: otrajam argumentam jābūt funkcijai");
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[result.length] = callback(arr[i], i, arr);
  }
  return result;
};

// Atgriež jaunu masīvu ar filtrētām vērtībām
/**
 * Custom filter implementation
 * @param {Array} arr - Input array
 * @param {Function} callback - Function returns true to keep element
 * @returns {Array} New array with filtered elements
 * @example
 * myFilter([1,2,3,4], x => x%2===0) // [2,4]
 */
const myFilter = (arr, callback) => {
  if (!Array.isArray(arr)) {
    console.log("Kļūda: pirmajam argumentam jābūt masīvam");
    return [];
  }
  if (typeof callback !== "function") {
    console.log("Kļūda: otrajam argumentam jābūt funkcijai");
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result[result.length] = arr[i];
    }
  }
  return result;
};

// Reducē masīvu uz  vienu vērtību
/**
 * Custom reduce implementation
 * @param {Array} arr - Input array
 * @param {Function} callback - (accumulator, currentValue) => newAccumulator
 * @param {*} initial - Initial value for accumulator
 * @returns {*} Reduced value
 * @example
 * myReduce([1,2,3,4], (acc, x) => acc + x, 0) // 10
 */
const myReduce = (arr, callback, initial) => {
  if (!Array.isArray(arr)) {
    console.log("Kļūda: pirmajam argumentam jābūt masīvam");
    return undefined;
  }
  if (typeof callback !== "function") {
    console.log("Kļūda: otrajam argumentam jābūt funkcijai");
    return undefined;
  }

  let acc = initial;
  let startIdx = 0;

  if (acc === undefined) {
    if (arr.length === 0)
      throw new TypeError("Reduce of empty array with no initial value");
    acc = arr[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
};

module.exports = {
  myForEach,
  myMap,
  myFilter,
  myReduce,
};
