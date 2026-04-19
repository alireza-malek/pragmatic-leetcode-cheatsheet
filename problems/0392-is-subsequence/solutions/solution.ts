/**
 * Checks whether s is a subsequence of t using two pointers.
 *
 * @param s The candidate subsequence
 * @param t The source string to match against
 * @returns true if s is a subsequence of t
 */
export function isSubsequence(s: string, t: string): boolean {
  let si = 0;

  for (let ti = 0; ti < t.length && si < s.length; ti++) {
    if (s[si] === t[ti]) si++;
  }

  return si === s.length;
}
