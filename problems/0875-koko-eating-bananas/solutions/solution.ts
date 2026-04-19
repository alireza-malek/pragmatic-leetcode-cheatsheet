/**
 * Finds the minimum eating speed k so Koko finishes all piles in h hours.
 * Binary search over k in [1, max(piles)].
 *
 * @param piles Array of pile sizes
 * @param h     Total hours available
 * @returns     Minimum eating speed
 */
export function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1;
  let hi = Math.max(...piles);

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    // Hours needed at speed mid
    const hours = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0);

    if (hours <= h) {
      hi = mid; // feasible → try smaller speed
    } else {
      lo = mid + 1; // too slow → need faster
    }
  }

  return lo;
}
