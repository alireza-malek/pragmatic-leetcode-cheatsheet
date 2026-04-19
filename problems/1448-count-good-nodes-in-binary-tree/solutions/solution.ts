/**
 * Counts "good" nodes — nodes whose value is >= all ancestors.
 *
 * @param root Root of the binary tree
 * @returns Number of good nodes
 */
export function goodNodes(root: TreeNode | null): number {
  return dfs(root, -Infinity);
}

function dfs(node: TreeNode | null, maxSoFar: number): number {
  if (!node) return 0;

  const isGood = node.val >= maxSoFar ? 1 : 0;
  const newMax = Math.max(maxSoFar, node.val);

  return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
}
