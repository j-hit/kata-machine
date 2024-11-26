import depthFirstSearchOnBinaryTree from "@code/DFSOnBST";
import { tree } from "./tree";

test("DFS on BST", function () {
    expect(depthFirstSearchOnBinaryTree(tree, 45)).toEqual(true);
    expect(depthFirstSearchOnBinaryTree(tree, 7)).toEqual(true);
    expect(depthFirstSearchOnBinaryTree(tree, 69)).toEqual(false);
});





