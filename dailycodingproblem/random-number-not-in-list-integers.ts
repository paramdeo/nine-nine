/*
Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn’t in l (uniform).
*/

function uniformRandom(integer: number, list: Array<number>): number {
  // Generate the range of number from zero to n - 1
  let integerRange = []
  for (let _ = 0; _ < integer; _++) {
    integerRange.push(_)
    }

  // Find the symmetric difference between integerRange and list
  let integerRangeSet = new Set(integerRange)
  let listSet = new Set(list)
  let safeRangeSet = new Set(integerRange)
  for (let element of listSet) {
    if (integerRangeSet.has(element)) {
      safeRangeSet.delete(element)
    }
  }
  // Create a safe array containing the difference
  let safeRange = Array.from(safeRangeSet)

  // Find a random array index within the safe array
  let randomIndex = Math.floor(Math.random() * safeRange.length)

  return safeRange[randomIndex]
}

let n = 20
let l = [1, 2, 3, 4, 5, 6, 9, 13, 18]

console.log(
  uniformRandom(n, l) // Any element from [0, 7, 8, 10, 11, 12, 14, 15, 16, 17, 19]
)

let _n = 10
let _l = [0, 1, 2, 3, 6, 7, 8]

console.log(
  uniformRandom(_n, _l) // Any element from [4, 5, 9]
)

let __n = 10
let __l = [0, 1, 2, 3, 4, 6, 7, 8, 12, 13]

console.log(
  uniformRandom(__n, __l) // Any element from [5, 9]
)
