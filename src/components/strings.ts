/**
 * Capitalizes the first letter of a string
 * @param {string} string
 */
export function capitalizeString(str: string): string {
  var lowercaseStr = str.toLowerCase();
  var firstLetter = lowercaseStr[0].toUpperCase();
  var remainingWord = lowercaseStr.substr(1);
  var capitalizedString = firstLetter + remainingWord;
  return capitalizedString;
}

/**
 * Converts a string to upper case
 * @param {string} str
 */
export function toUpper(str: string): string {
  return str.toUpperCase();
}

/**
 * Converts a string to lower case
 * @param {string} str
 */
export function toLower(str: string): string {
  return str.toLowerCase();
}