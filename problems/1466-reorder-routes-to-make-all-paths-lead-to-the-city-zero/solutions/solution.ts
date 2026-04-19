/**
 * Returns the minimum number of edges to reverse so every city can reach city 0.
 * Builds an undirected adjacency list, tagging each edge as original or reversed.
 * DFS from 0; every edge traversed in its original direction (away from 0) must be flipped.
 *
 * @param n           Number of cities
 * @param connections Directed edges [from, to]
 * @returns           Minimum reversals
 */
export function minReorder(n: number, connections: number[][]): number {
  // Build adjacency list: [neighbor, needsReversal]
  const graph: [number, boolean][][] = Array.from({ length: n }, () => []);

  for (const [a, b] of connections) {
    graph[a].push([b, true]); // original direction (a→b) needs reversal if traversed
    graph[b].push([a, false]); // reverse direction is free
  }

  const visited = new Array<boolean>(n).fill(false);
  let reversals = 0;

  function dfs(city: number): void {
    visited[city] = true;
    for (const [neighbor, isOriginal] of graph[city]) {
      if (!visited[neighbor]) {
        if (isOriginal) reversals++; // edge points away from 0 → must reverse
        dfs(neighbor);
      }
    }
  }

  dfs(0);
  return reversals;
}
