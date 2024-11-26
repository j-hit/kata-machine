export default class MinHeap {
    public length: number; // used for insertion and deletion
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -Infinity;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(index: number): void {
        const leftIndex = this.leftChildIndex(index);
        const rightIndex = this.rightChildIndex(index);

        if (index >= this.length || leftIndex >= this.length) {
            return;
        }

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const value = this.data[index];

        if (leftValue > rightValue && value > rightValue) {
            this.data[index] = rightValue;
            this.data[rightIndex] = value;
            this.heapifyDown(rightIndex);
        } else if (rightValue > leftValue && value > leftValue) {
            this.data[index] = leftValue;
            this.data[leftIndex] = value;
            this.heapifyDown(leftIndex);
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        /**
         * Get parent
         * Get it's value
         * Check if we are larger
         */
        const parentIndex = this.parentIndex(index);
        const parentValue = this.data[parentIndex];
        const value = this.data[index];
        if (parentValue > value) {
            /**
             * Swap
             */
            this.data[index] = parentValue;
            this.data[parentIndex] = value;
            /**
             * Keep going up
             */
            this.heapifyUp(parentIndex);
        }
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChildIndex(index: number): number {
        return index * 2 + 1;
    }

    private rightChildIndex(index: number): number {
        return index * 2 + 2;
    }
}
