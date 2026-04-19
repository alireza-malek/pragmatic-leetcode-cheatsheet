/**
 * Finds any peak element index using binary search.
 * If mid < mid+1, a peak must exist to the right; otherwise to the left.
 *
 * @param nums Array where adjacent elements differ
 * @returns    Index of any peak element
 */
export function findPeakElement(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < nums[mid + 1]) {
      lo = mid + 1; // ascending → peak is to the right
    } else {
      hi = mid; // descending or at peak → search left half (inclusive)
    }
  }

  return lo;
}
