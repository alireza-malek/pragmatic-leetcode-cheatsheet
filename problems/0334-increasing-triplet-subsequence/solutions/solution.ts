/**
 * Determines whether any increasing triplet subsequence exists.
 * Maintains the smallest (`first`) and second-smallest (`second`)
 * values seen so far; any value exceeding both completes the triplet.
 *
 * @param nums  Array of integers
 * @returns     true if an increasing triplet subsequence exists
 */
export function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true; // num > second > first → triplet found
    }
  }

  return false;
}
