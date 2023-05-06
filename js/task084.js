/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!*/

// function solve(s) {
//   let toLowerCase = []
//   let toUpperCase = []
//   for (let i = 0; i < s.length; i++) {
//     if (/[a-zA-Z]/.test(s[i])) {
//       if (s[i] === s[i].toUpperCase()) {
//         toUpperCase.push(s[i])
//       } else {
//         toLowerCase.push(s[i])
//       }
//     }
//   }
//   return toUpperCase.length > toLowerCase.length
//     ? s.toUpperCase()
//     : s.toLowerCase()
// }

function solve(s) {
  let lowerC = 0
  let upperC = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      upperC++
    } else {
      lowerC++
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('code')) // 'code'
console.log(solve('CODe')) // 'CODE'
console.log(solve('COde')) // 'code'
console.log(solve('Code')) // 'code'
