
function isPalindrome(word) {
  const cleanedWord = word.replace(/[^a-z]/g, "").toLowerCase();
  return cleanedWord === cleanedWord.split("").reverse().join("");
}

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
console.log("=>", isPalindrome("A man, a plan, a canal: Panama"));
console.log("=>", isPalindrome("Was it a car or a cat I saw?"));

module.exports = isPalindrome;
