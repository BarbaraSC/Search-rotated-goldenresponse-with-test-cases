//CTCI LL 4.2

function minTree(array) {
  
  function helper(array, start, end){
    let mid = Math.floor((start+end)/2);
    let node = array[mid];
    node.left = helper(array, start, mid - 1);
    node.right = helper(array, mid + 1, end);
    return node;
  }

  helper(array, 0, array.length - 1);
};


