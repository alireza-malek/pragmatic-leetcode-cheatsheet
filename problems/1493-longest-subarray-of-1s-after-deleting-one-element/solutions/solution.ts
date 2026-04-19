/**
 * Returns the longest subarray of 1's after deleting exactly one element.
 *
 * Equivalent to "Max Consecutive Ones III" with k = 1, but because one
 * element must be deleted the answer is always windowSize − 1.
 *
 * @param nums Binary array
 * @returns    Length of longest all-1 subarray after one deletion
 */
export function longestSubarray(nums: number[]): number {
  let left = 0;
  let zeros = 0;
  let max = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    while (zeros > 1) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    // −1 because we must delete exactly one element
    max = Math.max(max, right - left);
  }

  return max;
}
