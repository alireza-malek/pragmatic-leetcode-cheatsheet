/**
 * Returns all letter combinations for the given phone digits.
 *
 * @param digits String of digits '2'-'9'
 * @returns All possible letter combinations
 */
export function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const result: string[] = [];

  function backtrack(index: number, current: string): void {
    if (index === digits.length) {
      result.push(current);
      return;
    }
    for (const ch of map[digits[index]]) {
      backtrack(index + 1, current + ch);
    }
  }

  backtrack(0, "");
  return result;
}
