/*
Write a function that takes an array and a callback function, then returns
the number of elements where callback returns true. Use .forEach to iterate through the array.
*/

// Function type (takes in param of any type, returns any type)
type Callback = (param: any) => any

function count(arr: Array<any>, callback: Callback) {
  let count = 0
  arr.forEach(element => {
    if (callback(element)) {
      count += 1
    }
  })
  return count
}

console.log(
count([1, 2, 3, 4], e => e === 3),
count([1, 2, 3, 4], e => e > 1),
count([2, 1, 4, 5, 2, 8], e => e === 2),
count(['a', 'b'], e => e === 'd'),
count([], e => e === 'd'),
) // 1, 3, 2, 0, 0
