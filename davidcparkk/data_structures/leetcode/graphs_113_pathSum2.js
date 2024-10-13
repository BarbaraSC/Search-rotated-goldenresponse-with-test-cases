function pathSum(root, sum){
  let result = [];
  dfs(root, sum, 0, result, []);

  function dfs(node, sum, val, result, r){
    if (!node) return;
    val += node.val;
    r.push(node.val);
    if (!node.left && !node.right && sum === val){
      result.push(r);
    } else {
      if (node.left){
        dfs(node.left, sum, val, result, Object.assign([], r));
      }
      if (node.right){
        dfs(node.right, sum, val, result, Object.assign([], r));
      }
    }
  }
  return result;
}