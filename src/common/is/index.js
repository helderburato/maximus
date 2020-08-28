/**
 * @description Check if type is a String
 * @param {String} str - Value to be validate.
 * @return {Boolean} - Returns true if it's a String.
 */
function string(str) {
  return str && typeof str === 'string'
}

/**
 * @description Check if value is an Array
 * @param {Array} arr - Value to be validate.
 * @returns {Boolean} - Returns true if it's an Array.
 */
function array(arr) {
  return Array.isArray(arr)
}

/**
 * @description Check if the given parameter is an object.
 * @param {Object} obj - The parameter to be validated as an object.
 * @returns {Boolean} - Returns true if it's an object.
 */
function object(obj) {
  return obj === Object(obj)
}

/**
 * @description Check if the given parameter is a number.
 * @param {Number} value - The parameter to be validated as a number.
 * @returns {Bollean} - Returns true if it's a number.
 */
function number(value) {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * @description Check if the given parameter is a function.
 * @param {Function} value - The parameter to be validated as a function.
 * @returns {Boolean} - Returns true if it's a function.
 */
function fn(value) {
  return typeof value === 'function'
}

/**
 * @description Check if the given parameter is a promise.
 * @param {Promise} value - The parameter to be validated as a promise.
 * @returns {Boolean} - Returns true if it's a promise.
 */
function promise(value) {
  return !!value && fn(value.then)
}

export default {
  string,
  array,
  object,
  number,
  fn,
  promise,
}
