/**
 * Finds the maximum number of vowels in any substring of length k.
 *
 * @param s Source string of lowercase letters
 * @param k Window size
 * @returns Maximum vowel count in any k-length substring
 */
export function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }

  let max = count;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (vowels.has(s[i - k])) count--;
    if (count > max) max = count;
  }

  return max;
}
