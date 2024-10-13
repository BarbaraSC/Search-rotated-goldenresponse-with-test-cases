function maxDepth(root){
  let maxDepth = 0;

  function helper(node, currentDepth){
    if (!node){
      maxDepth = Math.max(currentDepth - 1, maxDepth);
      return;
    }

    helper(node.left, currentDepth + 1);
    helper(node.right, currentDepth + 1);


  }

  helper(root, 1);
  return maxDepth;
}