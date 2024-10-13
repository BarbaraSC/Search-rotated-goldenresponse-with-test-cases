const buildTree = (inorder, postorder) => {
  return dfs(inorder.length - 1, 0, inorder.length - 1);

  function dfs(index, startPos, endPos) {
    if (startPos > endPos)
      return null;

    var node = new TreeNode(postorder[index]);
    var pos = inorder.indexOf(postorder[index]);

    node.left = dfs(index - (endPos - pos) - 1, startPos, pos - 1);
    node.right = dfs(index - 1, pos + 1, endPos);

    return node;
  }
};