function getSum(a, b) {
  if (a === b) {
    return a
  }

  if (a > b) {
    ;[a, b] = [b, a]
  }

  let sum = 0
  for (let i = a; i <= b; i++) {
    sum += i
  }

  return sum
}

console.log(getSum(5, -1))
console.log(getSum(577, 597))
