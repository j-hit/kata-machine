function walk(current: BinaryNode<number> | null, path: number[]): number[] {
    if (!current) {
        return path;
    }
    
    // pre
    
    // recurse
    walk(current.left, path);
    path.push(current.value);
    walk(current.right, path);

    // post
    return path;
}
 
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}