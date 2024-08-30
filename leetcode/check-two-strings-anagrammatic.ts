/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

function isAnagram(s: string, t: string): boolean {
  // An anagram isn't possible if the lengths differ
  if (s.length !== t.length) { return false }

  // Convert strings to sorted arrays
  let _s = [...s].sort()
  let _t = [...t].sort()
  
  // Stringify the arrays and compare them
  return JSON.stringify(_s) === JSON.stringify(_t)
}

console.log(
  isAnagram("anagram", "nagaram"), // true
  isAnagram("rat", "car"), // false
  isAnagram("alpha", "bravo"), // false
  isAnagram("root", "toor"), // true
  isAnagram("a", "abc"), // false
  isAnagram("aacc", "ccac") // false
)
