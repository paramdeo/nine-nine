/*
Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.
Do this faster than the native method of repeated multiplication.
*/

const native = (x: number, y: number): number => Math.pow(x, y)

const exponent = (x: number, y: number): number => x ** y

const custom = (x: number, y: number): number => {
  let result = x
  for (let _ = 1; _ < y; _++) {
    result *= x
  }
  return result
}

// Both functions handle exponentiation: the exponent function does it using the exponential operator,
// and the custom function implements it arithmetically. The custom function is probably the more correct answer,
// but both functions are faster when tested against the native Math.pow() method.

const methods = [native, exponent, custom]

const integerPairs: Array<number[]> = [
  [5,5],
  [50,50],
  [150,30]
]

const measure = (array: Array<number>, callback: any) => {
  console.time(callback.name)
  callback(array[0], array[1])
  console.timeEnd(callback.name)
}

for (const pair of integerPairs) {
  console.log(pair)
  methods.forEach(method => measure(pair, method))
}

// Rerun in reverse because warmup/cache/etc
for (const pair of integerPairs.reverse()) {
  console.log(pair)
  methods.forEach(method => measure(pair, method))
}

/*
This entire file needs to be run in a CLI using ts-node
because TypeScript Playground or other REPLs will not show console.time results

Sample output:

[ 5, 5 ]
native: 0.182ms
exponent: 0.051ms
custom: 0.072ms
[ 50, 50 ]
native: 0.011ms
exponent: 0.009ms
custom: 0.015ms
[ 150, 30 ]
native: 0.01ms
exponent: 0.008ms
custom: 0.009ms
[ 150, 30 ]
native: 0.043ms
exponent: 0.008ms
custom: 0.011ms
[ 50, 50 ]
native: 0.009ms
exponent: 0.005ms
custom: 0.006ms
[ 5, 5 ]
native: 0.013ms
exponent: 0.008ms
custom: 0.004ms
*/
