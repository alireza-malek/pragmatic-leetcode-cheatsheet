/**
 * Merges two strings by alternating characters, appending any remainder.
 *
 * @param word1 First string (1 ≤ length ≤ 100)
 * @param word2 Second string (1 ≤ length ≤ 100)
 * @returns Merged string with alternating characters
 */
export function mergeAlternately(word1: string, word2: string): string {
  const result: string[] = [];
  const maxLen = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLen; i++) {
    // Append from word1 if index is still valid
    if (i < word1.length) result.push(word1[i]);
    // Append from word2 if index is still valid
    if (i < word2.length) result.push(word2[i]);
  }

  return result.join("");
}
