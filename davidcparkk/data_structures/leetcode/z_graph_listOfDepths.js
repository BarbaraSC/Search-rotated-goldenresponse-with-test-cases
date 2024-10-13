// 4.3

function listDepths(node) {
  let result = [];
  let current = [];
  if (node != null) current.push(node);

  while(current.length > 0){
    result.push(current);
    let parents = current;
    current = [];

    for (let i = 0; i  < parents.length; i++){
      if (parents[i].left){
        current.push(parents[i].left);
      }
      if (parents[i].right){
        current.push(parents[i].right);
      }
    }
  }
  return result;

}