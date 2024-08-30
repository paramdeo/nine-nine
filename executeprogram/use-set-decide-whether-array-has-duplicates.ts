/*
Write a hasDuplicates function. It should use a set to decide whether an array of numbers has any duplicates.
It should return true if there are duplicates; otherwise it should return false.
*/

function hasDuplicates(numbers: Array<any>) {
  let tempSet = new Set()
  for (let number of numbers) {
    if (tempSet.has(number)) {
      return true
    }
    tempSet.add(number)
  }
  return false
}

console.log(
  hasDuplicates([10, 20, 20, 30])
) // true
