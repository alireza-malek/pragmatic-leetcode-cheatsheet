/**
 * Returns the shortest path length from entrance to any border exit.
 *
 * @param maze     Grid of '.' (empty) and '+' (wall)
 * @param entrance Starting position [row, col]
 * @returns        Minimum steps to an exit, or -1 if unreachable
 */
export function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];
  maze[entrance[0]][entrance[1]] = "+"; // mark visited

  while (queue.length > 0) {
    const [row, col, steps] = queue.shift()!;

    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;

      if (nr < 0 || nr >= m || nc < 0 || nc >= n || maze[nr][nc] === "+")
        continue;

      // Is it a border cell? → exit found
      if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1) {
        return steps + 1;
      }

      maze[nr][nc] = "+"; // mark visited
      queue.push([nr, nc, steps + 1]);
    }
  }

  return -1;
}
