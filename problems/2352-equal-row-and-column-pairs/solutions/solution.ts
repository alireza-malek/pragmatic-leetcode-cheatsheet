/**
 * Counts pairs (ri, cj) where row i and column j are identical.
 *
 * @param grid n×n integer matrix (1 ≤ n ≤ 200)
 * @returns Number of equal row–column pairs
 */
export function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const rowMap = new Map<string, number>();

  // Serialize each row and count duplicates
  for (let r = 0; r < n; r++) {
    const key = grid[r].join(",");
    rowMap.set(key, (rowMap.get(key) ?? 0) + 1);
  }

  let count = 0;

  // Build each column as a string and look it up in the row map
  for (let c = 0; c < n; c++) {
    const parts: number[] = [];
    for (let r = 0; r < n; r++) {
      parts.push(grid[r][c]);
    }
    const key = parts.join(",");
    count += rowMap.get(key) ?? 0;
  }

  return count;
}
