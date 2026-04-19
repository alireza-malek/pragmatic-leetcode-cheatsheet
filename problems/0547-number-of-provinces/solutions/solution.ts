/**
 * Counts the number of connected components (provinces) in the city graph.
 *
 * @param isConnected n×n adjacency matrix
 * @returns Number of provinces
 */
export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited = new Array<boolean>(n).fill(false);
  let provinces = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      dfs(i, isConnected, visited);
    }
  }

  return provinces;
}

function dfs(city: number, graph: number[][], visited: boolean[]): void {
  visited[city] = true;
  for (let j = 0; j < graph.length; j++) {
    if (graph[city][j] === 1 && !visited[j]) {
      dfs(j, graph, visited);
    }
  }
}
