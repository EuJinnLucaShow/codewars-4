function problem(x) {
  return typeof x === 'number' ? x * 50 + 6 : 'Error'
}

console.log(problem('hello')) // 'Error'
console.log(problem(1)) // 56
console.log(problem(5)) // 256
console.log(problem('')) // 6
