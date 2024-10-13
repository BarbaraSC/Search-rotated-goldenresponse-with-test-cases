function isValidBST(root){
  let validity = true;

  function helper(node, min, max){
    if (!node) return;

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      validity = false;
      return;
    }

    helper(node.left, min, node.val);
    helper(node.right, node.val, max);
  }

  helper(root, null, null);
  return validity;
}

//
TIME: O(N) we traverse through every Node
SPACE: o(1)
UNLESS interviewer says each recursive call counts as space complexity => O(N)