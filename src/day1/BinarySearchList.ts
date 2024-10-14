export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    
    do {
        let midPoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midPoint];

        if (value === needle) {
            return true
        } else if (value > needle) {
            /**
             * value is on the left. reduce high and exclude midpoint
             */
            high = midPoint;
        } else {
            /**
             * value is on the right. increase low and exclude the midpoint
             */
            low = midPoint + 1;
        }
    } while (low < high);
    
    return false;
}