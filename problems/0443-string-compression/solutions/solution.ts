/**
 * Compresses a char array in-place with run-length encoding.
 * Uses a write pointer that always stays behind or at the read pointer,
 * so the compression never overwrites unread data.
 *
 * @param chars  Mutable array of single characters
 * @returns      New length of the compressed portion of chars
 */
export function compress(chars: string[]): number {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    const ch = chars[read];
    let count = 0;

    // Count consecutive identical characters
    while (read < chars.length && chars[read] === ch) {
      read++;
      count++;
    }

    // Write the character
    chars[write++] = ch;

    // Write the count digits (only if count > 1)
    if (count > 1) {
      const digits = String(count);
      for (const d of digits) {
        chars[write++] = d;
      }
    }
  }

  return write;
}
