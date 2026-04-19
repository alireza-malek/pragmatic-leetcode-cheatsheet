/**
 * Returns the length of the longest substring with all unique characters.
 *
 * @param s Input string
 * @returns Length of the longest substring without repeating characters
 */
export function lengthOfLongestSubstring(s: string): number {
  // Maps each character to the index where it was last seen
  const lastSeen = new Map<string, number>();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (lastSeen.has(ch)) {
      // Jump left past the previous occurrence (but never backwards)
      left = Math.max(left, lastSeen.get(ch)! + 1);
    }

    lastSeen.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
