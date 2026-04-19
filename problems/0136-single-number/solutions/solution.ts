/**
 * Finds the element that appears exactly once (all others appear twice).
 * XOR of all elements cancels out the pairs, leaving the single number.
 *
 * @param nums Array where every element appears twice except one
 * @returns The single number
 */
export function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
