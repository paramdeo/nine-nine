/*
Write a safeSqrt function that wraps Math.sqrt, but returns a union type to indicate errors.
It should only work for positive numbers and zero. That will force callers to handle the error
when the argument is a negative number.
If the input is negative, your function should return an object with {kind: 'failure'}.
If the input is positive or zero, it should return an object with {kind: 'success', value: VALUE }.
*/

function safeSqrt(n: number) {
  // The Math.sign() method returns 1 or -1 if the argument is a positive or negative integer, respectively.
  if ( Number.isNaN(n) || Math.sign(n) === -1 ) {
    return { kind: 'failure' }
  }
  return { kind: 'success', value: Math.sqrt(n) }
}

safeSqrt(0) // { kind: 'success', value: 0 }

safeSqrt(1) // { kind: 'success', value: 1 }

safeSqrt(10000) // { kind: 'success', value: 100 }

safeSqrt(-1) // { kind: 'failure' }

safeSqrt(-100) // { kind: 'failure' }

safeSqrt(NaN) // { kind: 'failure' }
