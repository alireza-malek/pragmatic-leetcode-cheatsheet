/**
 * Returns the length of the longest common subsequence.
 *
 * dp[i][j] = LCS length of text1[0..i) and text2[0..j).
 *   - If chars match: dp[i-1][j-1] + 1
 *   - Else: max(dp[i-1][j], dp[i][j-1])
 *
 * @param text1 First string
 * @param text2 Second string
 * @returns Length of the LCS
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0),
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
