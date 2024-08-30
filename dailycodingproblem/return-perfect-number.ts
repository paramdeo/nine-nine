/*
A number is considered perfect if its digits sum to exactly 10.
Given a positive integer n, return the n-th perfect number.
For exmaple, given 1, you should return 19. Given 2, you should return 28.
*/

function perfect(n: number): number {
  let digits = [n, 0]
  while (digits[0] + digits[1] !== 10) {
    digits[1]++
  }
  return Number(digits.join(''))
}

console.log(
  perfect(1), // 19
  perfect(2), // 28
  perfect(5) // 55
)
