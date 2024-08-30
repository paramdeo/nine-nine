/*
Your task is to figure out if a sentence is a pangram.
A pangram is a sentence using every letter of the alphabet at least once.
It is case insensitive, so it doesn’t matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).
For this exercise we only use the basic letters used in the English alphabet: a to z.
*/

function isPangram(sentence: string): boolean {
  // Create a Set from the alphabet
  let alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
  let alphaSet: Set<string> = new Set([...alphabet])

  // Convert the sentence to lowercase, filter against the alphabet Set
  let rawSentenceArray: Array<string> = [...sentence.toLowerCase()]
  let filteredSentenceArray: Array<string> = []

  rawSentenceArray.forEach(element => {
    if (alphaSet.has(element)) {
      filteredSentenceArray.push(element)
    }
  })

  // Convert the filtered sentence Array into a Set, 
  let sentenceSet: Set<string> = new Set([...filteredSentenceArray])

  // Compare the two Sets via number of elements (since 26 chars in alphabet)
  return (sentenceSet.size === alphaSet.size) ? true : false
}

console.log(isPangram('The_quick_brown_fox_jumps_over_the_lazy_dog')) // true
console.log(isPangram('The quick brown fox jumps over the lazy dog')) // true

console.log(isPangram('The quick brown fo jumps over the lay dog')) // false
console.log(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')) // false

console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."')) // true
console.log(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')) // true

// The tests checked for underscores, numbers, and punctuation but the implementation
// covered all edge cases since filtering against a Set is discriminative.
