function qs(arr: number[], low: number, high: number) {
    if (low >= high) {
        return;
    } 

    const pivotIndex = partition(arr, low, high);

    /**
     * sort the left of the pivot
     */
    qs(arr, low, pivotIndex - 1);

    /**
     * sort the right of the pivot
     */
    qs(arr, pivotIndex + 1, high);
}

/**
 * Returns the pivot index
 * @param arr
 * @param low 
 * @param high 
 */
function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];

    let index = low -1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    /**
     * Put the pivot into the pivot index
     */
    index++;
    arr[high] = arr[index];
    arr[index] = pivot;

    return index;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}


