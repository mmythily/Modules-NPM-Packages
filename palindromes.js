function isPalindrome(s) {
  var s2 = s.split(" ").join("")
  var stringReverse = s.split("").reverse().join("");
  var stringReverse2 = stringReverse.split(" ").join("")
  console.log(stringReverse2)
  return s2 == stringReverse2;
  
}
module.exports = isPalindrome;
