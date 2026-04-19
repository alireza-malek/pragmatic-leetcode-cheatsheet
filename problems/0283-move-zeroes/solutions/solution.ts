/**
 * Moves all zeros to the end of the array in-place,
 * preserving the relative order of non-zero elements.
 *
 * @param nums Array of integers (modified in-place)
 */
export function moveZeroes(nums: number[]): void {
  let writeIdx = 0;

  for (let readIdx = 0; readIdx < nums.length; readIdx++) {
    if (nums[readIdx] !== 0) {
      // Swap keeps non-zeros in order and pushes zeros right
      [nums[writeIdx], nums[readIdx]] = [nums[readIdx], nums[writeIdx]];
      writeIdx++;
    }
  }
}
