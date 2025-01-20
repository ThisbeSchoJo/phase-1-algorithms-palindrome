function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split("").reverse().join("")
  if (word === reverseWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  if word is palindrome
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  - the split() method splits a string object into an array of substrings
  - the reverse() method reverse the order of elements in an array
  - the join() method joins all elements in an array into a string
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
