/**
 * Finds all unique combinations of candidates that sum to target.
 * Each candidate may be reused unlimited times.
 *
 * @param candidates Array of distinct positive integers
 * @param target     Target sum
 * @returns          All valid combinations
 */
export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start: number, remaining: number, path: number[]): void {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break; // pruning (sorted)
      path.push(candidates[i]);
      backtrack(i, remaining - candidates[i], path); // i, not i+1: allow reuse
      path.pop();
    }
  }

  backtrack(0, target, []);
  return result;
}
