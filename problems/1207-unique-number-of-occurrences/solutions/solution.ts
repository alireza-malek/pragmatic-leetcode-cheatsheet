/**
 * Returns true if every value's occurrence count is unique.
 *
 * @param nums Array of integers (1 ≤ length ≤ 1000, −1000 ≤ nums[i] ≤ 1000)
 * @returns Whether all frequency counts are distinct
 */
export function uniqueOccurrences(nums: number[]): boolean {
  const freq = new Map<number, number>();

  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  const counts = new Set(freq.values());

  // If a count appeared more than once, the Set will be smaller than the Map
  return counts.size === freq.size;
}
