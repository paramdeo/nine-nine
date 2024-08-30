/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const solution = (numbers: Array<number>, k: number): boolean | any => {
  for (let num of numbers) {
    let rem = k - num
    return (numbers.includes(rem)) ? true : false
  }
}

console.log(
  solution([10, 15, 3, 7], 17)
) // true
