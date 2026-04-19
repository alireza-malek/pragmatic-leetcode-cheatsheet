/**
 * Returns the maximum depth (height) of a binary tree.
 *
 * @param root Root of the binary tree
 * @returns Maximum depth (number of nodes on the longest root-to-leaf path)
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
