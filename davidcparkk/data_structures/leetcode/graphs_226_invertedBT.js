function invertTree(root){
  function helper(node)){
    if (!node) return;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    helper(node.left);
    helper(node.right);
  }

  helper(root);
  return root;
}

TIME
o(n)

SPACE
O(1)
recursive calls as space? O(n)