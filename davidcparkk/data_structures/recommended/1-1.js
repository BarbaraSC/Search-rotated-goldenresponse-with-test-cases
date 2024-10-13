// Arrays and Strings
// Is Unique
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// O(n^2) approach

const allUniqueChars = function(string) {
  for (let i = 0; i < string.length; i++) {
    for( let j = i+1; j < string.length; j++) {
      if (string[i] === string[j]){
        return false;
      }
    }
  }
  return true;
}

