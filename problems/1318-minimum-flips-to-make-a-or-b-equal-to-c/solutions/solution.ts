/**
 * Returns the minimum bit flips in a and/or b so that (a OR b) === c.
 *
 * For each bit position:
 * - c bit is 1: need at least one of a,b to be 1 → if both are 0, flip one (1 flip).
 * - c bit is 0: both a,b must be 0 → flip each 1-bit (could be 1 or 2 flips).
 *
 * @param a First integer
 * @param b Second integer
 * @param c Target OR result
 * @returns Minimum number of flips
 */
export function minFlips(a: number, b: number, c: number): number {
  let flips = 0;

  while (a > 0 || b > 0 || c > 0) {
    const bitA = a & 1;
    const bitB = b & 1;
    const bitC = c & 1;

    if (bitC === 1) {
      if (bitA === 0 && bitB === 0) flips += 1; // need one 1
    } else {
      flips += bitA + bitB; // both must be 0; flip each 1
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return flips;
}
