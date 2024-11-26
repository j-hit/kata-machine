export default function breadthFirstSearchOnGraph(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const previous = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue: number[] = [source];

    do {
        const current = queue.shift() as number;
        if (current === needle) {
            break;
        }

        const adjacencies = graph[current];
        for (let index = 0; index < graph.length; index++) {
            if (adjacencies[index] === 0) {
                continue;
            }

            if (seen[index]) {
                continue;
            }

            seen[index] = true;
            previous[index] = current;
            queue.push(index);
        }
        seen[current] = true;
    } while (queue.length);

    if (previous[needle] === -1) {
        return null;
    }

    /**
     * Walk back
     */
    let current = needle;
    const out: number[] = [];

    while (previous[current] !== -1) {
        out.push(current);
        current = previous[current];
    }

    return [source].concat(out.reverse());
}
