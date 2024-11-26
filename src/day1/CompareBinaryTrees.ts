function walk(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // structural check
    if (a === null && b === null) {
        return true;
    }

    // structural check
    if (a === null || b == null){
        return false;
    }

    // value check
    if (a.value !== b.value) {
        return false;
    }

    return walk(a.left, b.left) && walk(a.right, b.right);
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return walk(a, b)
}