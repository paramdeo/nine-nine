/*
Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.
For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.
Given the array [10, 5, 1], you should return false, since we can’t modify any one element to get a non-decreasing array.
*/

function couldBeNonDecreasing(arr: Array<number>): boolean {
  // As long as the first element is larger than the second,
  // and the second larger than the third, always return false
  if (arr[0] > arr[1] && arr[1] > arr[2]) {
    return false
  }
    
  // Otherwise, return true
  return true
}

console.log(
  couldBeNonDecreasing([10, 5, 1]), // false
  couldBeNonDecreasing([10, 5, 7]), // true [4, 5, 7]
  couldBeNonDecreasing([1, 5, 1]), // true [1, 1 1]
  couldBeNonDecreasing([9, 13, 1]), // true [9, 13, 14]
  couldBeNonDecreasing([3, 1, 0]), // false
)

// If at most one element can be changed, then the maximum array length is always 3.
// Also, non-decreasing means the array items are less than or equal to each other
// in ascending order, i.e. arr[0] <= arr[1] && arr[1] <= arr[2]
