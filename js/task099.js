/*Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.*/

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5
}

console.log(roundToNext5(0)) // output: 0
console.log(roundToNext5(2)) // output: 5
console.log(roundToNext5(3)) // output: 5
console.log(roundToNext5(12)) // output: 15
console.log(roundToNext5(21)) // output: 25
console.log(roundToNext5(30)) // output: 30
console.log(roundToNext5(-2)) // output: 0
console.log(roundToNext5(-5)) // output: -5
console.log(roundToNext5(-7)) // output: -5
console.log(roundToNext5(-12)) // output: -10
console.log(roundToNext5(-1973307)) // output: -1973305
