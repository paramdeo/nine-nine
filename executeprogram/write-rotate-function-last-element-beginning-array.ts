/*
Write a rotate function. It should move the last element to the beginning of the array.
The function should modify the original array.
You'll need to handle the special case when an array is empty (with a length of 0.)
When rotate gets an empty array, it should also return an empty array.
*/

function rotate(arr: Array<any>) {
  if (arr.length === 0) { return arr }

  let lastElement = arr.pop()

  return [lastElement, ...arr]
}

console.log(
  rotate([2, 3, 4, 5, 1]), // [1, 2, 3, 4, 5]
  rotate([1, 3, 3, 7, 3]), // [3, 1, 3, 3, 7]
  rotate([]) // []
)
