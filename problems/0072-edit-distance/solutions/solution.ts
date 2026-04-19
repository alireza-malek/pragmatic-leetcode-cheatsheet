/**
 * Returns the minimum edit distance (Levenshtein distance) between two strings.
 *
 * dp[i][j] = min operations to convert word1[0..i) into word2[0..j).
 *   - Match:   dp[i-1][j-1]
 *   - Replace: dp[i-1][j-1] + 1
 *   - Insert:  dp[i][j-1] + 1
 *   - Delete:  dp[i-1][j] + 1
 *
 * @param word1 Source string
 * @param word2 Target string
 * @returns Minimum number of operations
 */
export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0),
  );

  // Base cases: converting to/from empty string
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j - 1], // replace
            dp[i - 1][j], // delete
            dp[i][j - 1], // insert
          );
      }
    }
  }

  return dp[m][n];
}
