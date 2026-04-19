/**
 * Finds the maximum area of water a container formed by two lines can hold.
 *
 * @param height Array of line heights
 * @returns Maximum water area
 */
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    max = Math.max(max, width * h);

    // Moving the shorter line inward is the only way to potentially increase area
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
}
