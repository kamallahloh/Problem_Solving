// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// Highest Scoring Word

/* const [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
]  */

/* array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
]; */

/* const high = (x) => {
  const wordCountArray = x
    .split(" ")
    .map((word) =>
      word.split("").reduce((acc, ltr) => acc + (ltr.charCodeAt() - 96), 0)
    );

  const highestCount = wordCountArray.sort((a, b) => b - a)[0];

  const HighestIndex = x
    .split(" ")
    .map((word) =>
      word.split("").reduce((acc, ltr) => acc + (ltr.charCodeAt() - 96), 0)
    )
    .indexOf(highestCount);

  return x.split(" ")[HighestIndex];
}; */

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }
  
console.log(high("man i need a taxi up to ubud")); // 'taxi'
console.log(high("what time are we climbing up the volcano")); //  'volcano'
console.log(high("take me to semynak")); //  'semynak'
console.log(high("aa b")); //  'aa'
console.log(high("b aa")); //  'b'
console.log(high("bb d")); //  'bb'
console.log(high("d bb")); //  'd'
console.log(high("aaa b")); //  'aaa'

console.log("a".charCodeAt()); // 97
console.log("b".charCodeAt()); // 98
console.log("c".codePointAt()); // 99
