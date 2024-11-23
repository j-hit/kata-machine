function walk(current: BinaryNode<number> | null, path: number[]): number[] {
    if (!current) {
        return path;
    }
    
    // pre
    
    // recurse
    walk(current.left, path);
    walk(current.right, path);
    
    // post
    path.push(current.value);
    return path;
}
 
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}