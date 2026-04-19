/**
 * Finds all combinations of k digits (1-9) that sum to n.
 *
 * @param k Number of digits to pick
 * @param n Target sum
 * @returns All valid combinations
 */
export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, remaining: number, path: number[]): void {
    if (path.length === k) {
      if (remaining === 0) result.push([...path]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (i > remaining) break; // pruning
      path.push(i);
      backtrack(i + 1, remaining - i, path);
      path.pop();
    }
  }

  backtrack(1, n, []);
  return result;
}
