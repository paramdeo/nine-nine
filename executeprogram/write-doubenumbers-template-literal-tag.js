/*
Write a doubleNumbers template literal tag. It mimics normal string interpolation,
but doubles all of the interpolated values as they're inserted.
*/

/**
 * @param {TemplateStringsArray} strings
 * @param {number[]} values
 * @return {string}
 */

function doubleNumbers(strings, ...values) {
  let result = '';
  for (let i=0; i<strings.length; i++) {
    result += strings[i]
    if (values[i]) {
    result += (values[i] * 2).toString()
    }
  }
  return result
}

console.log(
    doubleNumbers`the numbers ${1} and ${2}` // 'the numbers 2 and 4'
)
