/**
 * Maximizes (sum of k selected nums1 values) × (min of their nums2 values).
 *
 * Strategy: sort by nums2 descending so each candidate becomes the new minimum.
 * Maintain a min-heap of size k over nums1 values to keep the largest k sums.
 *
 * @param nums1 First array
 * @param nums2 Second array (determines the minimum factor)
 * @param k     Number of indices to select
 * @returns     Maximum score
 */
export function maxScore(nums1: number[], nums2: number[], k: number): number {
  const n = nums1.length;

  // Pair and sort by nums2 descending
  const indices = Array.from({ length: n }, (_, i) => i);
  indices.sort((a, b) => nums2[b] - nums2[a]);

  // Min-heap for nums1 values (using sorted array for clarity)
  const heap: number[] = [];
  let sum = 0;
  let maxScore = 0;

  for (const idx of indices) {
    const val1 = nums1[idx];
    const val2 = nums2[idx];

    heap.push(val1);
    heap.sort((a, b) => a - b);
    sum += val1;

    // Once heap exceeds k, remove the smallest nums1 value
    if (heap.length > k) {
      sum -= heap.shift()!;
    }

    // Only compute score when we have exactly k elements
    if (heap.length === k) {
      // val2 is the current minimum because we sorted nums2 descending
      maxScore = Math.max(maxScore, sum * val2);
    }
  }

  return maxScore;
}
