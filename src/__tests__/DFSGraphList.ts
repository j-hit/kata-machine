import depthFirstSearchOnAGraph from "@code/DFSGraphList";
import { list2 } from "./graph";

test("dfs - graph", function () {
    expect(depthFirstSearchOnAGraph(list2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(depthFirstSearchOnAGraph(list2, 6, 0)).toEqual(null);
});

