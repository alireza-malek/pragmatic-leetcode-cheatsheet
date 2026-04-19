/**
 * Reverses only the vowel characters in the string, preserving all other positions.
 *
 * @param s Input string (1 ≤ length ≤ 3 × 10⁵), ASCII only
 * @returns String with vowels reversed
 */
export function reverseVowels(s: string): string {
  const chars = s.split("");
  const vowels = new Set("aeiouAEIOU");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;

    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}
