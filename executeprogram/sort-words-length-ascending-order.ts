/*
Write a function that sorts words by length in ascending order.
We call your sortByLength function on the array, but we don’t use your function’s return value.
Instead, your function should modify the array in-place. That’s what JavaScript’s array sort function does,
so you don’t need to do anything special! But if you copy the array with a method like slice,
sort the copy, and then return the sorted copy, that won’t work.
*/

function sortByLength(words: Array<string>): Array<string> {
  return words.sort((a, b) => a.length - b.length)
}

console.log(
  sortByLength.name,
  sortByLength(['bb', 'aaaaaaa', 'dddd', 'ccc'])
) // ["bb", "ccc", "dddd", "aaaaaaa"]
