State = str
Graph = dict[State, dict[str, State]]


def run(graph: Graph, input: list[str], start: State) -> list[State]:
    state = start
    visited = [start]

    for command in input:
        state = graph[state][command]
        visited.append(state)

    return visited


def step(state: State, graph: Graph, input: str) -> State:
    return graph[state][input]


if __name__ == '__main__':
    graph = {
        'RED': {
            '0': 'RED',
            '1': 'GREEN'
        },

        'YELLOW': {
            '0': 'YELLOW',
            '1': 'RED'
        },

        'GREEN': {
            '0': 'GREEN',
            '1': 'YELLOW'
        },
    }

    commands = list('1110001001101')

    visited = run(graph, commands, 'GREEN')
    print(commands)
    print(visited)
