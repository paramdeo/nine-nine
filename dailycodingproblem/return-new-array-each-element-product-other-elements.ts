/*
Given an array of integers, return a new array such that each element at index i of the new array
is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const solution = (numbers: Array<number>): Array<number> => {
  let result = []
  for (let num of numbers) {
    let tempStart = numbers.slice(0, num)
    tempStart.pop()
    let tempEnd = numbers.slice(num, numbers.length)
    let tempArray = tempStart.concat(tempEnd)
    let tempResult = tempArray.reduce((product, x) => product * x)
    result.push(tempResult)
  }
  return result
}

let numbers = [1,2,3,4,5]

console.log(
  solution(numbers)
) // [120, 60, 40, 30, 24]
