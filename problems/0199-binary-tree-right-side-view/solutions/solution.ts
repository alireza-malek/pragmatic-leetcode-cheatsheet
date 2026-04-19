/**
 * Returns the rightmost node value at each level (right side view).
 *
 * @param root Root of the binary tree
 * @returns Array of rightmost values from top to bottom
 */
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      // Last node in this level is visible from the right
      if (i === levelSize - 1) result.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
