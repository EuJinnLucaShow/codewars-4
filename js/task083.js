/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

// function XO(str) {
//   let x = []
//   let o = []
//   const arrs = str.toLowerCase().split('')
//   for (let i = 0; i <= arrs.length; i++)
//     if (arrs[i] === 'o') {
//       o.push(i)
//     } else if (arrs[i] === 'x') {
//       x.push(i)
//     }
//   return o.length === x.length
// }

function XO(str) {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return (x && x.length) === (o && o.length)
}

console.log(XO('xo')) //true;
console.log(XO('xxOo')) //true;
console.log(XO('xxxm')) //false;
console.log(XO('Oo')) //false;
console.log(XO('ooom')) //false;
