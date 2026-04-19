/**
 * Returns the 1-indexed level with the maximum sum of values.
 *
 * @param root Root of the binary tree
 * @returns Level number (1-indexed) with the greatest sum
 */
export function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  let maxSum = -Infinity;
  let maxLevel = 1;
  let level = 0;

  while (queue.length > 0) {
    level++;
    const size = queue.length;
    let levelSum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = level;
    }
  }

  return maxLevel;
}
