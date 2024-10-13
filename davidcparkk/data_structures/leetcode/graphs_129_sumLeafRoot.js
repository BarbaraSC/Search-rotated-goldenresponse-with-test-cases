var dfs = function(curSum, pNum, node) {
  if (!node.left && !node.right) {
      return curSum + pNum * 10 + node.val;
  } else {
      pNum = pNum * 10 + node.val;        
      if (node.left) curSum = dfs(curSum, pNum, node.left);        
      if (node.right) curSum = dfs(curSum, pNum, node.right);        
      return curSum;
  }    
}

var sumNumbers = function(root) {
  if (root == null) return 0;    
  return dfs(0, 0, root);
};