/**
 * Counts unique paths from top-left to bottom-right of an m×n grid.
 * Uses a 1D rolling DP array: dp[j] += dp[j-1] at each row.
 *
 * @param m Number of rows
 * @param n Number of columns
 * @returns Number of unique paths
 */
export function uniquePaths(m: number, n: number): number {
  const dp = new Array<number>(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[col] += dp[col - 1];
    }
  }

  return dp[n - 1];
}
