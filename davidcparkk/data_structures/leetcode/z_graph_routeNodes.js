// Route Between NOdes
// Given a directed graph and two nodes (S and E) design an algo to find out whether there is a route from S to S

// Author solution
function routeBetweenNodes(graph, start, end){
  let queue = [];
  let visited = {};
  queue.push(start);
  visited[start] = true;

  while (queue.length){
    let node = queue.shift();
    if (node === end){
      return true;
    }

    let destinations = graph[node] || [];
    // if (!destinations) continue;

    for (let i = 0 ; i < destinations.length; i++){
      let destination = destinations[i];
      if (!visited[destination]){
        queue.push(destination);
        visited[destination] = true;
      }
    }
  }

  return false;
}
let graph = {
  a: ['b', 'c'],
  b: ['d', 'c'],
  e: ['a', 'b'],
  d: ['e']
};

console.log(routeBetweenNodes(graph,'b','e'));

// DFS simpler with recursion
// BFS useful for finding the shorest path


// Alternative using SET
function bfs(graph, node){
  let q = [];
  let explored = new Set();
  q.push(node);
  explored.add(node);
  while(q.length){
    let t = q.shift();
    let dest = graph[t] || [];
    
    console.log(t);
    dest.filter(n => !explored.has(n)).forEach( n => {
      explored.add(n);
      q.push(n);
    });
  }
}

// console.log(bfs(graph,'b'));