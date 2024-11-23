type Node<T> = {
    value: T;
    previous?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    private debug() {
        let current = this.head;
        let out = '';
        for (let i = 0; current && i < this.length; i++) {
            out += `${i} => ${current.value}`;
            current = current.next;
        }
        console.log(out);
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head.previous = node;
        this.head = node;
    }

    insertAt(item: T, index: number): void {
        if (index > this.length) {
            throw new Error("not a good idea");
        }
        if (index === this.length) {
            this.append(item);
            return;
        } else if (index === 0) {
            this.prepend(item);
            return;
        }

        this.length++; 
        /**
         * Walk to the index
         */
        let current = this.getAt(index) as Node<T>;

        /**
         * Attach new nodes
         */
        const node = { value: item} as Node<T>;

        node.next = current;
        node.previous = current.previous;
        current.previous = node;

        if (node.previous) {
            node.previous.next = node;
        }
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if(!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        for (let index = 0; current && index < this.length; index++) {
            if (current.value === item) {
                break;
            }
            current = current.next
        }
        if (!current) {
            return undefined;
        }

        return this.removeNode(current);
    }

    get(index: number): T | undefined {
        return this.getAt(index)?.value;
    }

    removeAt(index: number): T | undefined {
        const node = this.getAt(index);
        if(!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const previousHead = this.head?.value;
            this.head = this.tail = undefined;
            return previousHead;
        }

        if (node.previous) {
            node.previous.next = node.next;
        }
        if (node.next) {
            node.next.previous = node.previous;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.previous;
        }

        node.previous = node.next = undefined;
        return node.value;
    }

    private getAt(index: number): Node<T> | undefined {
        let current = this.head;
        for (let i = 0; current && i < index; i++) {
            current = current.next;
        }
        return current;
    }
}
