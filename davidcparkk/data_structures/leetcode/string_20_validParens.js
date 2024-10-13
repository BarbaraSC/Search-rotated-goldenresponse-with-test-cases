function isValid(s) {
  let stack = [];
  let parens = {
    "[":"]",
    "{":"}",
    "(":")"
  };

  for (let i =0; i < s.length; i++){
    let char = s[i];
    
    if (parens[char]){
      stack.push(char);
    } else {
      let topOfStack = stack[stack.length - 1];
      char === parens[topOfStack] ? stack.pop() : stack.push(char);
    }
  }

  return stack.length === 0;

}