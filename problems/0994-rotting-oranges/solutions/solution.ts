/**
 * Returns the minimum minutes for all oranges to rot, or -1 if impossible.
 * Multi-source BFS starting from all initially rotten oranges.
 *
 * @param grid m×n grid with 0 (empty), 1 (fresh), 2 (rotten)
 * @returns Minimum minutes, or -1
 */
export function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue: [number, number][] = [];
  let fresh = 0;

  // Enqueue all initially rotten oranges and count fresh ones
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  let minutes = 0;

  while (queue.length > 0 && fresh > 0) {
    minutes++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift()!;

      for (const [dr, dc] of dirs) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n || grid[nr][nc] !== 1)
          continue;

        grid[nr][nc] = 2;
        fresh--;
        queue.push([nr, nc]);
      }
    }
  }

  return fresh === 0 ? minutes : -1;
}
