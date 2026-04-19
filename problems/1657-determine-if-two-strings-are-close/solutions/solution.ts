/**
 * Determines whether two strings are "close" — transformable into each
 * other via character swaps and pairwise frequency transforms.
 *
 * @param word1 First string of lowercase English letters
 * @param word2 Second string of lowercase English letters
 * @returns Whether the two strings are close
 */
export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1.charCodeAt(i) - 97]++;
    freq2[word2.charCodeAt(i) - 97]++;
  }

  // Both strings must use the exact same set of characters
  for (let i = 0; i < 26; i++) {
    if ((freq1[i] === 0) !== (freq2[i] === 0)) return false;
  }

  // Sorted frequency distributions must match (operation 2 lets us
  // reassign which character carries which count)
  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
}
