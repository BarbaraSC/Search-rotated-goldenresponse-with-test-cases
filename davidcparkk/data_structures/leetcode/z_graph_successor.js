// 4.6

function successor(node){
  if (node === null) return null;

  if(node.right !== null){
    return leftMostChild(n.right);
  } else {
    let q = node;
    let x = q.parent;

    while( x !== null && x.left != q){
      q = x;
      x = x.parent;
    }

    return x;
  }
}

function leftMostChild(node){
  if (node === null){
    return null;
  }
  while (n.left !== null){
    node = node.left;
  }
  return node;
}