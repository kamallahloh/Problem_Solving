// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((elem) => elem[0].toUpperCase() + elem.substring(1))
    .join(" ");
};

/* 
String.prototype.toJadenCase = function() {
    return this
        .split(" ")
        .map(i => i.replace(i[0], i[0].toUpperCase()))
        .join(" ");
    };
 */
