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
