

// create an array with nodes
var nodes = new vis.DataSet([
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
]);

// only the options that have shorthand notations are shown
  
// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 3 },
]);

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
    
  }
var network = new vis.Network(container, data, options);


var new_nodeNum = 6
network.on('click',function(params){
  nodes.add({id: new_nodeNum, label: new_nodeNum})
  console.log(nodes)
  new_nodeNum += 1
})


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
