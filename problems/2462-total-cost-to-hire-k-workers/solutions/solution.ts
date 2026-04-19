/**
 * Returns the total cost of hiring k workers, picking the cheapest
 * from the first or last `candidates` workers each round.
 *
 * Uses two min-heaps (left and right candidate pools) and two
 * pointers to track the boundary of unassigned workers.
 *
 * @param costs      Array of worker costs
 * @param k          Number of workers to hire
 * @param candidates Pool size from each end
 * @returns          Minimum total hiring cost
 */
export function totalCost(
  costs: number[],
  k: number,
  candidates: number,
): number {
  const n = costs.length;
  const left: number[] = []; // min-heap for left pool
  const right: number[] = []; // min-heap for right pool
  let lo = 0;
  let hi = n - 1;

  // Seed both heaps with initial candidates
  while (lo < candidates && lo <= hi) left.push(costs[lo++]);
  while (hi >= n - candidates && hi >= lo) right.push(costs[hi--]);

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < k; i++) {
    const lMin = left.length > 0 ? left[0] : Infinity;
    const rMin = right.length > 0 ? right[0] : Infinity;

    if (lMin <= rMin) {
      total += left.shift()!;
      if (lo <= hi) {
        insertSorted(left, costs[lo++]);
      }
    } else {
      total += right.shift()!;
      if (lo <= hi) {
        insertSorted(right, costs[hi--]);
      }
    }
  }

  return total;
}

function insertSorted(arr: number[], val: number): void {
  let i = arr.length;
  arr.push(val);
  while (i > 0 && arr[i - 1] > val) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[i] = val;
}
