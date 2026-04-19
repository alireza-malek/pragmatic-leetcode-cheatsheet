/**
 * Counts paths summing to targetSum using prefix-sum technique.
 *
 * @param root      Root of the binary tree
 * @param targetSum Target path sum
 * @returns         Number of valid downward paths
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  // Map from prefix sum → number of times it has occurred on the current root-to-node path
  const prefixMap = new Map<number, number>();
  prefixMap.set(0, 1); // empty prefix

  return dfs(root, 0, targetSum, prefixMap);
}

function dfs(
  node: TreeNode | null,
  currentSum: number,
  target: number,
  prefixMap: Map<number, number>,
): number {
  if (!node) return 0;

  currentSum += node.val;

  // How many prefixes give us a sub-path summing to target
  let count = prefixMap.get(currentSum - target) ?? 0;

  // Record this prefix sum
  prefixMap.set(currentSum, (prefixMap.get(currentSum) ?? 0) + 1);

  count += dfs(node.left, currentSum, target, prefixMap);
  count += dfs(node.right, currentSum, target, prefixMap);

  // Backtrack: remove this prefix sum before returning to parent
  prefixMap.set(currentSum, prefixMap.get(currentSum)! - 1);

  return count;
}
