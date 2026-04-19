/**
 * Finds the maximum average of any contiguous subarray of length k.
 *
 * @param nums Array of integers
 * @param k Window size
 * @returns Maximum average value
 */
export function findMaxAverage(nums: number[], k: number): number {
  // Compute the sum of the first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += nums[i];

  let maxSum = windowSum;

  // Slide: add the incoming element, drop the outgoing element
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    if (windowSum > maxSum) maxSum = windowSum;
  }

  return maxSum / k;
}
