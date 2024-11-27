function hasUnvisited(seen: boolean[], distances: number[]): boolean {
    return seen.some((nodeHasBeenSeen, index) => !nodeHasBeenSeen && distances[index] < Infinity);
}

function getLowestUnvisited(seen: boolean[], distances: number[]): number {
    let lowestIndex = -1;
    let lowestDistance = Infinity;

    for(let index = 0; index < seen.length; index++) {
        if (seen[index]) {
            continue;
        }
        if (lowestDistance > distances[index]) {
            lowestDistance = distances[index];
            lowestIndex = index;
        }
    }

    return lowestIndex;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen = new Array(arr.length).fill(false);
    const previous = new Array(arr.length).fill(-1);
    const distances = new Array(arr.length).fill(Infinity);

    distances[source] = 0;

    while(hasUnvisited(seen, distances)) {
        const current = getLowestUnvisited(seen, distances);
        seen[current] = true;

        const adjacencies = arr[current];
        for (let i = 0; i < adjacencies.length; i++) {
            const edge = adjacencies[i];
            if (seen[edge.to]) {
                continue;
            }

            const distance = distances[current] + edge.weight;
            if (distance < distances[edge.to]) {
                distances[edge.to] = distance;
                previous[edge.to] = current;
            }
        }
    }

    const out: number[] = [];
    let current = sink;
    while(previous[current] !== -1) {
        out.push(current);
        current = previous[current];
    }

    out.push(source);
    return out.reverse();
}
