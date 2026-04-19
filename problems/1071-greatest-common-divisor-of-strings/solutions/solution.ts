/**
 * Finds the largest string that divides both str1 and str2.
 * Key insight: if a GCD string exists, then str1 + str2 === str2 + str1.
 * Its length equals gcd(len1, len2).
 *
 * @param str1 First string (1 ≤ length ≤ 1000)
 * @param str2 Second string (1 ≤ length ≤ 1000)
 * @returns Largest common divisor string, or "" if none
 */
export function gcdOfStrings(str1: string, str2: string): string {
  // If concatenations in both orders differ, no common divisor exists
  if (str1 + str2 !== str2 + str1) return "";

  // The GCD string length mirrors numeric GCD of the two lengths
  return str1.slice(0, gcd(str1.length, str2.length));
}

function gcd(a: number, b: number): number {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
