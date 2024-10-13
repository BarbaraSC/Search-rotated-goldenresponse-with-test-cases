// DFS Iterative

TreeNode.prototype.traverse = function (cb) {
  let stack = [this];
  var n;

  while (stack.length > 0) {
    n = stack.pop();
    cb(n.value);

    if (!n.children){
      continue;
    }

    for (let i = n.children.length - 1; i >= 0; i++){
      stack.push(n.children[i]);
    }
  }
}

//BFS ITERATIVE
TreeNode.prototype.traverse = function (cb) {
  let queue = [this];
  var n;

  while (queue.length > 0) {
    n = queue.shift();
    cb(n.value);

    if (!n.children){
      continue;
    }

    for (let i = 0; i < n.children.length ; i++){
      queue.push(n.children[i]);
    }
  }
}