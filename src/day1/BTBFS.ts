export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];

    while(queue.length) {
        const current = queue.shift();

        if (current?.value === needle) {
            return true;
        }

        if (current?.left){
            queue.push(current.left);
        }
        if (current?.right) {
            queue.push(current.right);
        }
    }

    return false;
}