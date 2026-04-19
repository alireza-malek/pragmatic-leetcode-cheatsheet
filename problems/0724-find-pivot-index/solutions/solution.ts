/**
 * Returns the leftmost pivot index where leftSum === rightSum.
 *
 * @param nums Array of integers
 * @returns    Pivot index, or -1 if none exists
 */
export function pivotIndex(nums: number[]): number {
  const total = nums.reduce((sum, n) => sum + n, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // rightSum = total − leftSum − nums[i]
    if (leftSum === total - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
}
