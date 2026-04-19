/**
 * Finds the k-th largest element using a min-heap of size k.
 * After processing all elements, the heap top is the k-th largest.
 *
 * @param nums Array of integers
 * @param k    1-based rank from largest
 * @returns    The k-th largest value
 */
export function findKthLargest(nums: number[], k: number): number {
  // Min-heap of size k (using a sorted array for simplicity)
  const heap: number[] = [];

  for (const num of nums) {
    heap.push(num);
    heap.sort((a, b) => a - b);
    if (heap.length > k) heap.shift(); // remove smallest
  }

  return heap[0];
}
