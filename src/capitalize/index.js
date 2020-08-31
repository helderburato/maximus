import is from '../is'

/**
 * @name capitalize
 * @category String Helpers
 * @summary Capitalize the first letter of a word.
 *
 * @description Capitalize the first letter of a word.
 *
 * @param {String} text - the text to capitalize
 * @returns {String} the capitalized text
 * @throws {TypeError} 1 argument required
 *
 * @example
 * capitalize('hElLo')
 * //=> 'Hello'
 */
export default function capitalize(text) {
  if (!is(text)) {
    throw new TypeError('Invalid parameter type.')
  }
  return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
}
