/**
 * Returns true if s can be segmented into words from the dictionary.
 *
 * dp[i] = true if s[0..i) can be segmented.
 * For each position i, check all words: if dp[i - word.length] is true
 * and s ends with that word at position i, then dp[i] = true.
 *
 * @param s        Input string
 * @param wordDict Dictionary of valid words
 * @returns        Whether s can be fully segmented
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const n = s.length;
  const dp = new Array<boolean>(n + 1).fill(false);
  dp[0] = true; // empty string is segmentable

  for (let i = 1; i <= n; i++) {
    for (const word of words) {
      const len = word.length;
      if (len <= i && dp[i - len] && s.slice(i - len, i) === word) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
