/**
 * Checks if a string is a valid email (simple regex).
 * @param {string} str - Input email
 * @returns {boolean} True if valid email
 * @example
 * isEmail("test@example.com") // true
 */
const isEmail = (str) => {
  if (typeof str !== "string") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
};

/**
 * Checks if a string is a valid Latvian phone number (+371 XXXXXXXX).
 * @param {string} str - Input phone number
 * @returns {boolean} True if valid Latvian phone
 * @example
 * isPhoneNumber("+37112345678") // true
 */
const isPhoneNumber = (str) => {
  if (typeof str !== "string") return false;
  const regex = /^\+371\d{8}$/;
  return regex.test(str);
};

/**
 * Checks if a number is a valid age (0-150).
 * @param {number} age - Input age
 * @returns {boolean} True if valid age
 * @example
 * isValidAge(25) // true
 */
const isValidAge = (age) => {
  if (typeof age !== "number" || isNaN(age)) return false;
  return age >= 0 && age <= 150;
};

/**
 * Checks if a password is strong (min 8 chars, letters + numbers).
 * @param {string} str - Password string
 * @returns {boolean} True if strong password
 * @example
 * isStrongPassword("Abc12345") // true
 */
const isStrongPassword = (str) => {
  if (typeof str !== "string") return false;
  // Min 8 chars, at least one letter and one digit
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(str);
};

/**
 * Checks if a string is a valid date in YYYY-MM-DD format.
 * @param {string} str - Date string
 * @returns {boolean} True if valid date
 * @example
 * isValidDate("2023-12-01") // true
 */
const isValidDate = (str) => {
  if (typeof str !== "string") return false;
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(str)) return false;

  const date = new Date(str);
  const timestamp = date.getTime();
  if (isNaN(timestamp)) return false;

  // Pārbauda, vai datums neatšķiras no string
  const [year, month, day] = str.split("-").map(Number);
  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
};

module.exports = {
  isEmail,
  isPhoneNumber,
  isValidAge,
  isStrongPassword,
  isValidDate,
};
