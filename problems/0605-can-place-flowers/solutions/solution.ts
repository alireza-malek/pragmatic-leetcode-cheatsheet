/**
 * Determines if n flowers can be planted in the flowerbed greedily.
 * A plot is plantable if it and both neighbors are 0 (edges count as 0).
 *
 * @param flowerbed Array of 0s and 1s (1 ≤ length ≤ 2 × 10⁴)
 * @param n         Number of flowers to plant (0 ≤ n ≤ flowerbed.length)
 * @returns True if n flowers can be planted without adjacency violations
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const emptyLeft = i === 0 || flowerbed[i - 1] === 0;
    const emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (flowerbed[i] === 0 && emptyLeft && emptyRight) {
      flowerbed[i] = 1; // plant here so it blocks the next slot
      count++;
      if (count >= n) return true;
    }
  }

  return count >= n;
}
