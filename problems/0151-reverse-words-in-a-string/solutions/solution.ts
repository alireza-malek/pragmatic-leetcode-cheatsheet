/**
 * Reverses the order of words in a string, collapsing extra spaces.
 *
 * @param s  Input string (may have leading/trailing/multiple spaces)
 * @returns  Words in reverse order separated by single spaces
 */
export function reverseWords(s: string): string {
  const words = s.trim().split(/\s+/);
  return words.reverse().join(" ");
}
