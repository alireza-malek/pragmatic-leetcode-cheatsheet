/**
 * Computes the total units of water trapped between bars.
 *
 * Water at position i = min(leftMax, rightMax) - height[i].
 * Two pointers converge inward, always processing the lower side
 * because that side's max is the true bottleneck.
 *
 * @param height Array of non-negative bar heights
 * @returns Total trapped water units
 */
export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}
