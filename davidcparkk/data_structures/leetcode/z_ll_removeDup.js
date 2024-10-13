//CTCI LL 2.1

const removeDup = node => {
  let visited = {};
  let prev = null;
  
  while(!node){
    if (visited[node.val]){
      prev.next = node.next;
    } else {
      visited[node] = true;
      prev = n;
    }
    node = node.next;
  }
};

