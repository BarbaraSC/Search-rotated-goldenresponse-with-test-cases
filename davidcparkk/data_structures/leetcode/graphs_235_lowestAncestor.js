function lca(root, p, q){
  const pVal = p.val;
  const qVal = q.val;

  let currentNode = root;

  while(currentNode){
    const currentVal = currentNode.val;

    if (currentVal < pVal && currentVal < qVal){
      currentNode = currentNode.right;
    } else if (currentVal > pVal && currentVal > qVal){
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
}

TIME: O(N)
SPACE: O(1), no matter how large BST is, we only use one node, the currentNode