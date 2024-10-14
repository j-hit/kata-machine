export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    
    /**
     * Use first crystal ball to find out where it breaks
     */
    let i = jumpAmount;
    for(; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    
    /**
     * Go back to last safe position
     */
    i -= jumpAmount;

    /**
     * Walk a maximum of the jump amount to find out the breaking spot. 
     * Ensure that it does not go over the board by checking i < breaks.length
     */
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}