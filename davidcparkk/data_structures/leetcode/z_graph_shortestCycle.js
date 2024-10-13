function getCycle(graph){
  graph = Object.assign(...Object.keys(graph).map( node => {
    return { [node]: graph[node].map(String) }
  }));

  let queue = Object.keys(graph).map (node => [node] );
  console.log(queue);
  
  while(queue.length){
    const batch = [];
    for (const path of queue){
      const parents = graph[path[0]] || [];
      for (const node of parents){
        if (node === path[path.length - 1]) return [node, ...path];
        batch.push([node, ...path]);
      }
    }
    queue = batch;
  }
}

// Example
let graph = {
  a: ['b', 'c'],
  b: ['d', 'c'],
  e: ['a', 'b'],
  d: ['e']
};
let result = getCycle(graph);
console.log(result);
// console.log('hi');


// Second
let graph2 = {
  0: [4],
  1: [4,0],
  2: [0,1],
  3: [1],
  4: [3]
};