/**
 * Evaluates division queries using a weighted directed graph.
 * Each equation a/b = k creates edges a→b (weight k) and b→a (weight 1/k).
 * A query c/d is answered by finding a path from c to d and multiplying edge weights.
 *
 * @param equations Variable pairs [numerator, denominator]
 * @param values    Division results for each equation
 * @param queries   Pairs to evaluate
 * @returns         Query results (-1.0 if undetermined)
 */
export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  // Build weighted adjacency list
  const graph = new Map<string, Map<string, number>>();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());
    graph.get(a)!.set(b, values[i]);
    graph.get(b)!.set(a, 1 / values[i]);
  }

  function dfs(src: string, dst: string, visited: Set<string>): number {
    if (!graph.has(src) || !graph.has(dst)) return -1;
    if (src === dst) return 1;

    visited.add(src);

    for (const [neighbor, weight] of graph.get(src)!) {
      if (visited.has(neighbor)) continue;
      const result = dfs(neighbor, dst, visited);
      if (result !== -1) return weight * result;
    }

    return -1;
  }

  return queries.map(([c, d]) => dfs(c, d, new Set()));
}
