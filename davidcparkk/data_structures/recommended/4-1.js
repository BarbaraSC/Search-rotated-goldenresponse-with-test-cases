// Trees and Graphs
// Route between Nodes
// Given a directed graph and two nodes (S and E), design an algorithm to find out whether there is a route from S to E

import Graph from './Graph';
import Queue from './Queue';

let checkRoute = function(value1, value2, graph) {
  let q1 = new Queue();
  let q2 = new Queue();
  let visited1 = {};
  let visited2 = {};

  visited1[value1] = true;
  visited2[value2] = true;

  if (graph.hasNode(value1)) {
    for (let edge in graph.findEdges(value1)) {
      q1.add(edge);
    }
  }
  if (graph.hasNode(value2)) {
    for (let edge in graph.findEdges(value2)) {
      q2.add(edge);
    }
  }

  let nextEdge1;
  let nextEdge2;

  while (!q1.isEmpty() || !q2.isEmpty()) {
    if (!q1.isEmpty()) {
      nextEdge1 = q1.remove();
      if (nextEdge1 === value2) {
        return true;
      }
      if (visited1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;
        if (graph.hasNode(nextEdge1)) {
          for (let edge in graph.findEdges(nextEdge1)) {
            q1.add(edge);
          }
        }
      }
    }

    if (!q2.isEmpty()) {
      nextEdge2 = q2.remove();
      if (nextEdge2 === value1) {
        return true;
      }
      if (visited2[nextEdge2] === undefined) {
        visited2[nextEdge2] = true;
        if (graph.hasNOde(nextEdge2)) {
          for (let edge in graph.findEdges(nextEdge2)) {
            q2.add(edge);
          }
        }
      }
    }
  }
  return false;
};