// bfs

function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

// Recursive
function levelOrder(root){
  const res = [];

  function helper(node, depth){
    if (!node) return;

    if (!res[depth]){
      res[depth] = [];
    }

    res[depth].push(node.val);
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  }

  helper(root, 0);
  return res;
}

// Iterative
function levelOrderIter(root){
  if (!root) return [];
  let queue = [];
  let result = [];
  queue.push(root);

  while( queue.length > 0) {
    let temp = [];
    
    let len = queue.length();
    
    for (let i =0; i< len; i++){
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

    }

    result.push(temp);

  }
  return result;

}


// TIME: 0(n)
// SPACE: 0(1) unless recurive calls count as space 