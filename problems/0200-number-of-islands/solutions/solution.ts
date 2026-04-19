/**
 * Counts the number of islands (connected components of '1's).
 * BFS flood-fill: for each unvisited land cell, enqueue it and expand
 * in all 4 directions, marking cells visited as we go.
 *
 * @param grid m×n grid of '1' (land) and '0' (water)
 * @returns Number of islands
 */
export function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] !== "1") continue;

      count++;
      grid[r][c] = "0"; // mark visited before enqueuing
      const queue: [number, number][] = [[r, c]];

      while (queue.length > 0) {
        const [row, col] = queue.shift()!;
        for (const [dr, dc] of dirs) {
          const nr = row + dr;
          const nc = col + dc;
          if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === "1") {
            grid[nr][nc] = "0"; // mark visited
            queue.push([nr, nc]);
          }
        }
      }
    }
  }

  return count;
}
