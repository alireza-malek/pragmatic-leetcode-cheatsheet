/**
 * Returns the longest subarray of 1's achievable by flipping at most k 0's.
 *
 * @param nums Binary array (only 0s and 1s)
 * @param k    Maximum number of 0→1 flips allowed
 * @returns    Length of the longest all-1 window after flips
 */
export function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let zeros = 0;
  let max = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    // Shrink window until it contains at most k zeros
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}
