let Graph = function() {
  this.nodes = {};
};

Graph.prototype.addEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return 'node does not exist';
  } else if (this.nodes[node][edge]) {
    return `edge ${node}-${edge} already exists`;
  } else {
    this.nodes[node][edge] = true;
  }
};

Graph.prototype.addNode = function(value) {
  if (this.nodes[value] !== undefined) {
    return `node of value ${value} already exists`;
  } else {
    this.nodes[value] = {};
  }
};

Graph.prototype.findEdges = function(node) {
  if (this.nodes[node] === undefined) {
    return 'node dne';
  } else {
    return this.nodes[node];
  }
};

Graph.prototype.hasEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return false;
  } else {
    return this.nodes[node][edge] !== undefined;
  }
}

Graph.prototype.hasNode = function(node) {
  return this.nodes[node] !== undefined;
}

Graph.prototype.removeEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return 'node dge';
  }else {
    delete this.nodes[node][edge];
  }
};

Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] === undefined) {
    return 'node dne';
  } else {
    delete this.nodes[node];
    for ( let currNode in this.nodes) {
      if (this.nodes[currNode][node] !== undefined) {
        delete this.nodes[currNode][node];
      }
    }
  }
}