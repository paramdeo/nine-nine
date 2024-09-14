/*
You are given a string consisting of the letters x and y, such as xyxxxyxyy.
In addition, you have an operation called flip, which changes a single x to y or vice versa.
Determine how many times you would need to apply this operation to ensure that all x's come before all y's.
In the preceding example, it suffices to flip the second and sixth characters, so you should return 2.
*/

let str = "xyxxxyxyy"
let str_ = "xyyyxyxyyx"

/**
 * @param {string} string
 * @returns {number}
 */

function flip(string) {
    let count = 0
    let arr = Array.from(string)
    
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === "y" && arr[x + 1] === "x") {
            count += 1
        }
    }

    return count
}

console.log(
    flip(str), // 2
    flip(str_) // 3
)
