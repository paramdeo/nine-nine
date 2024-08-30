/*
Print integers one through n, but print ‘Fizz’ if an integer is divisible by three,
‘Buzz’ if an integer is divisible by five, and ‘FizzBuzz’ if an integer is divisible by both three and five.
*/

const f = (num: number): any => {
  return (num % 3 === 0) ? 'Fizz' : num
}

const b = (num: number): any => {
  return (num % 5 === 0) ? 'Buzz' : num
}

const fb = (num: number): any => {
  return ( num % 3 === 0 && num % 5 === 0 ) ? 'FizzBuzz' : num
}

// Implement the actual fizzBuzz function using composition
const fizzBuzz = (length: number): any => {
  for(let i = 1; i < length + 1; i++) {
    console.log(f(b(fb(i))))
  }
}

// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz",
// 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz",
// 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz",
// 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz",
// 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz",
// 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz",
// 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"
fizzBuzz(100)
