/*
Use .findIndex to write the function find(arr, callback). It should return the first element
where callback(element) is true. If the element is not found, it should return undefined.
*/

function find(arr: Array<any>, callback: any) {
  let index = arr.findIndex(callback)
  return ( index >= 0 ) ? arr[index] : undefined
}

console.log(
    find([1, 2, 3], (n: number) => n === 1), // 1
    find([5, 6, 7], (n: number) => n / 2 === 3), // 6
    find([1, 2, 3], (n: number) => n > 5), // undefined
    find([], (n: number) => n > 5), // undefined
    find([null], (n: any) => n === null), // null
)

const arr = [1, 2]
arr[-1] = 3
console.log(
    find(arr, (n: number) => n === 5), // undefined
)
