/**
 * Finds the picked number in [1, n] using the guess API.
 * guess(num) returns -1 if pick < num, 1 if pick > num, 0 if correct.
 *
 * @param n Upper bound of the range
 * @returns The picked number
 */
export function guessNumber(n: number): number {
  let lo = 1;
  let hi = n;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const result = guess(mid);

    if (result === 0) return mid;
    if (result === -1)
      hi = mid - 1; // pick is lower
    else lo = mid + 1; // pick is higher
  }

  return -1; // unreachable
}
