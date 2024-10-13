// Arrays and Strings
// String Rotation
// Assume you have a method isSubstring which checks if one word is a substring oif another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of 'erbottlewat')

const stringRotation = function(string1, string2) {
  if (string1.length !== string1.length) {
    return false;
  }
  return (string1 + string1).includes(string2);
}