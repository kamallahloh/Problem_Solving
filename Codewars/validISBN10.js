// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript
// ISBN-10 Validation

function validISBN10(isbn) {
  // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
}

/* 
For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
*/

console.log(validISBN10("1112223339")); // True
console.log(validISBN10("048665088X")); // True
console.log(validISBN10("1293000000")); // True
console.log(validISBN10("1234554321")); // True
console.log(validISBN10("1234512345")); // False
console.log(validISBN10("1293")); // False
console.log(validISBN10("X123456788")); // False
console.log(validISBN10("ABCDEFGHIJ")); // False
console.log(validISBN10("XXXXXXXXXX")); // False
console.log(validISBN10("048665088XZ")); // False

