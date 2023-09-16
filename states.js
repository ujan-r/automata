var nodeCount = 0
var graph = {}

var container = document.getElementById("mynetwork")

var nodes = new vis.DataSet()
var edges = new vis.DataSet()
var network = new vis.Network(
  container, {nodes: nodes, edges: edges}, {}
  )
addNode()

function addNode() {
  graph[nodeCount] = {}

  nodes.update(
    {id: nodeCount, text: 'node ' + nodeCount}
  )

  network = new vis.Network(container, {nodes: nodes, edges: edges}, {})

  nodeCount++
}

// function render() {}

// create an array with nodes
// var nodes = new vis.DataSet([
//   { id: 1, label: "Node 1" },
//   { id: 2, label: "Node 2" },
//   { id: 3, label: "Node 3" },
//   { id: 4, label: "Node 4" },
//   { id: 5, label: "Node 5" },
// ]);

// create an array with edges
// var edges = new vis.DataSet([
//   { from: 1, to: 3 },
//   { from: 1, to: 2 },
//   { from: 2, to: 4 },
//   { from: 2, to: 5 },
//   { from: 3, to: 3 },
// ]);

// create a network
// var container = document.getElementById("mynetwork");
// var data = {
//   nodes: nodes,
//   edges: edges,
// };
// var options = {};
// var network = new vis.Network(container, data, options);

function main() {
  addNodeButton = document.getElementById("add-node")
  addNodeButton.onclick = addNode
}

document.onload = main

function step(state, input, graph) {
    return graph[state][input]
}


function run(state, inputs, graph) {
    visited = [state]

    for (const input of inputs) {
        state = step(state, input, graph)
        visited.push(state)
    }

    return visited
}
