// 4.10

function isSubtree(t, s){
  if (s == null) return true;
  if (t == null) return false;

  if (areIdentical(t,s)) return true;

  return isSubtree(t.left, S) || isSubtree(t.right, s);

  function areIdentical(root1, root2){
    if(root1 == null && root2 == null) return true;
    if(root1 == null || root2 == null) return false;

    return (root1.data == root2.data && areIdentical(roo1.left, root2.left) && areIdentical(roo1.right, root2.right));
  }

}
