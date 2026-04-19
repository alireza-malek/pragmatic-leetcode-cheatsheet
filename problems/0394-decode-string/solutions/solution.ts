/**
 * Decodes an encoded string where k[encoded] means repeat encoded k times.
 *
 * @param s Encoded string with nested bracket patterns
 * @returns Fully decoded string
 */
export function decodeString(s: string): string {
  const countStack: number[] = [];
  const stringStack: string[] = [];
  let current = "";
  let k = 0;

  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      // Build multi-digit number
      k = k * 10 + Number(ch);
    } else if (ch === "[") {
      // Save current context and start a new scope
      countStack.push(k);
      stringStack.push(current);
      current = "";
      k = 0;
    } else if (ch === "]") {
      // Pop and repeat: prefix + current × count
      const repeatCount = countStack.pop()!;
      const prefix = stringStack.pop()!;
      current = prefix + current.repeat(repeatCount);
    } else {
      current += ch;
    }
  }

  return current;
}
