/**
 * Returns the minimum cost to climb to the top of the staircase.
 *
 * @param cost cost[i] = cost to step on stair i
 * @returns Minimum cost to reach past the last step
 */
export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  let prev2 = 0; // cost to reach 2 steps behind
  let prev1 = 0; // cost to reach 1 step behind

  for (let i = 2; i <= n; i++) {
    const curr = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
