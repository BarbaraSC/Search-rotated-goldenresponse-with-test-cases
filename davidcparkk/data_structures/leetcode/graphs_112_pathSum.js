function hasPathSum(root, sum){
  let result = false;

  function add(node, total=0){
    if (!node){
      return false;
    }

    let current = total + node.val;

    add(node.left,current);
    add(node.right,current);

    if (!node.left && !node.right && current === sum){
      result = true;
    }

  }

  add(root);
  return result;


}