/**
 * Finds the smallest substring of s containing all characters of t.
 *
 * @param s Source string to search within
 * @param t Pattern string whose characters must all appear in the window
 * @returns The minimum window substring, or "" if none exists
 */
export function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  // Frequency map for characters we still need
  const need = new Map<string, number>();
  for (const ch of t) {
    need.set(ch, (need.get(ch) ?? 0) + 1);
  }

  // Number of unique characters in t that are fully satisfied in the window
  let formed = 0;
  const required = need.size;

  // Window character counts
  const windowCounts = new Map<string, number>();

  let left = 0;
  let minLen = Infinity;
  let minStart = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    windowCounts.set(ch, (windowCounts.get(ch) ?? 0) + 1);

    // A required character just reached its needed frequency
    if (need.has(ch) && windowCounts.get(ch) === need.get(ch)) {
      formed++;
    }

    // Contract the window from the left while it's still valid
    while (formed === required) {
      const windowSize = right - left + 1;
      if (windowSize < minLen) {
        minLen = windowSize;
        minStart = left;
      }

      const leftCh = s[left];
      windowCounts.set(leftCh, windowCounts.get(leftCh)! - 1);

      // Dropping below the required count breaks the constraint
      if (need.has(leftCh) && windowCounts.get(leftCh)! < need.get(leftCh)!) {
        formed--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
