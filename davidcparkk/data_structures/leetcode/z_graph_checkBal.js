//4.4
// recursively, O(nlogn) since each node is touched by node above it
function getHeight(root){
  if (!root) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  
}

function isBalanced(root){
    if (!root) return true;

    let heighDiff = Math.abs(getHeight(root.left) - getHeight(root.right));
    if (heighDiff > 1){
      return false;
    } else {
      return isBalanced(root.left) && isBalanced(root.right);
    }
}

// Optimatzation

function checkHeight(root){
  if (!root) return -1;

let leftHeight = checkHeight(root.left);
if (leftHeight === -1) return -1;
let rightHeight = checkHeight(root.right);
if (rightHeight === -1) return -1;

let diff = leftHeight - rightHeight;

if (diff > 1){
  return -1;
} else {
  return Math.max(leftHeight, rightHeight) + 1;
}

}

function isBal(root){
  return checkHeight(root) != -1;
}