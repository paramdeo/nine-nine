/*
Using a functionrand7() that returns an integer from 1 to 7 (inclusive) with uniform probability,
implement a function rand5() that returns an integer from 1 to 5 (inclusive).
*/

function rand5(): number {
  return Math.ceil(Math.random() * 5)
}

// This is a really simple question, and I didn’t feel satisfied so I also implemented a solution
// that returns a random (inclusive) integer but guarantees that the integer remains unique
// until the entire range is exhausted – that is, rand(10) below would never return a duplicate number
// until all numbers from 1 through 10 have also been previously returned:

const set = new Set()

function rand(_number: number): number {
  if (set.size === _number) {
    set.clear()
  }

  let random = Math.ceil(Math.random() * _number)

  let regen = () => {
    random = Math.ceil(Math.random() * _number)
  }

  while (set.has(random)) {
    regen()
  }

  set.add(random)
  return random
}

// 2, 9, 7, 4, 8, 10, 1, 5, 6, 3, 10, 3, 6, 9, 1, 5, 8, 4, 7, 2
let i = 0
while (i < 20) {
  console.log(rand(10))
  i++
}
