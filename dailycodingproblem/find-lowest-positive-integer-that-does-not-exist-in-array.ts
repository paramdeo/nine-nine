/*
Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.
*/

const solution = (array: Array<number>): number | any => {
  // make copy of array, then sort ascending, then filter for positive integers
  let workingArray = array.slice().sort().filter(i => i >= 0)

  // loop through the array and if the incremented value
  // of each element isn't found
  // then increment and return that element
  for (let item of workingArray) {
    if (workingArray.includes(item + 1) == false) {
      let result = item + 1
      return result
    }
  }
}

console.log(
  solution([1, 2, 0, -3, 5, 4, 8, 7, -2])
) // 3

console.log(
  solution([3, 4, -1, 1])
) // 2

console.log(
  solution([1, 2, 0])
) // 3
