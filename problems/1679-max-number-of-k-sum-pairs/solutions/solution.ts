/**
 * Counts the maximum number of pairs whose sum equals k.
 *
 * @param nums Array of positive integers
 * @param k Target pair sum
 * @returns Maximum number of k-sum pair removals
 */
export function maxOperations(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let ops = 0;

  for (const num of nums) {
    const complement = k - num;

    if ((freq.get(complement) ?? 0) > 0) {
      // Complement available — form a pair
      ops++;
      freq.set(complement, freq.get(complement)! - 1);
    } else {
      freq.set(num, (freq.get(num) ?? 0) + 1);
    }
  }

  return ops;
}
