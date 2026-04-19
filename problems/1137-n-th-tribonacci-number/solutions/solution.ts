/**
 * Returns the n-th Tribonacci number.
 *
 * @param n Index in the Tribonacci sequence (0 ≤ n ≤ 37)
 * @returns T(n)
 */
export function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let a = 0,
    b = 1,
    c = 1;

  for (let i = 3; i <= n; i++) {
    const next = a + b + c;
    a = b;
    b = c;
    c = next;
  }

  return c;
}
