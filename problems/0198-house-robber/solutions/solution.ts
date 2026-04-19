/**
 * Returns the maximum amount robbed from non-adjacent houses.
 *
 * @param nums Amount of money in each house
 * @returns Maximum robbery profit
 */
export function rob(nums: number[]): number {
  let prev2 = 0; // max profit excluding the last house
  let prev1 = 0; // max profit including/excluding the last house

  for (const num of nums) {
    const curr = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
