/**
 * Processes stars in a string: each star removes the nearest non-star
 * character to its left along with itself.
 *
 * @param s String of lowercase letters and '*' characters
 * @returns Resulting string after all star removals
 */
export function removeStars(s: string): string {
  const stack: string[] = [];

  for (const ch of s) {
    if (ch === "*") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
}
