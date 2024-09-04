/*
Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.
On the ith jump, you may move exactly i places to the left or right.
Find a path with the fewest number of jumps required to get from 0 to N.
*/

// the last element is the integer N, represented by an array of length N
let ten = [1,2,3,4,5,6,7,8,9,10]
// we can avoid using a literal for longer arrays
let eleven = Array(11)
let two = Array(2)
let one = [1]
let twentyOne = Array(21)
let fortySeven = Array(47)

/**
 * @param {number[]} arr
 * @returns {number}
 */

function jumps(arr) {
    // jump from 0 to 1
    if (arr.length === 1) { return 1 }

    // jump from 0 to N/2, and then to N
    if (arr.length % 2 === 0) {
        return 2
    } else {
        // jump from 0 to 1, and then to N/2, and then to N
        return 3
    }
}

console.log(
    jumps(ten), // 2
    jumps(eleven), // 3    
    jumps(two), // 2  
    jumps(one), // 1    
    jumps(twentyOne), // 3
    jumps(fortySeven) // 3
)
