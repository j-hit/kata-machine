type Node<T> = {
    value: T;
    previous?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.previous = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const previousHead = this.head;
            this.head = undefined;
            return previousHead?.value;
        }

        const previousHead = this.head as Node<T>;
        this.head = previousHead.previous;
        
        return previousHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
