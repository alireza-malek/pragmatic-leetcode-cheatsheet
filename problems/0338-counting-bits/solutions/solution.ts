/**
 * Returns the number of 1-bits for every integer from 0 to n.
 *
 * Key recurrence: popcount(i) = popcount(i >> 1) + (i & 1).
 * i >> 1 already computed (smaller index), and i & 1 checks the last bit.
 *
 * @param n Upper bound (inclusive)
 * @returns Array of bit counts
 */
export function countBits(n: number): number[] {
  const ans = new Array<number>(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
}
