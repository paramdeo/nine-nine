/*
Use reduce to write a function that behaves like filter. You can do this with only one reduce and no other loops.

filter([1, 2, 3], num => num >= 0) Expected: [1, 2, 3]
filter([1, 2, 3], num => num > 1) Expected: [2, 3]
filter([1, 2, 3], num => num > 5) Expected: []
filter([null, undefined], num => true) Expected: [null, undefined]
filter([], num => true) Expected: []
*/

function filter(arr: Array<any>, callback: any) {
  let result: Array<any> = []
  arr.reduce((_, current) => (callback(current)) ? result.push(current) : [], [])
  return result
}

console.log(
  //@ts-ignore
  filter([1, 2, 3], num => num > 1)
) // [2, 3]
