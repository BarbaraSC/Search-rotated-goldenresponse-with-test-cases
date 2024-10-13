function lengthOfLongestSubstring(s){
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i ++) {
    const endChar = s[i];

    if (windowCharsMap[endChar] >= windowStart){
      windowStart = windowCharsMap[endChar] + 1;

    }

    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;

}

/// Time (n)
/// Space(min(m,n)); n = size of string and m is size of alphabet