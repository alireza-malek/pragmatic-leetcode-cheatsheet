/**
 * Returns the length of the longest ZigZag path in the tree.
 *
 * Each node receives the zigzag lengths from its parent:
 *   leftLen  = how long the zigzag gets if we continue to the left child
 *   rightLen = how long the zigzag gets if we continue to the right child
 * Going left inherits rightLen + 1; going right inherits leftLen + 1.
 * The direction that breaks the zigzag resets to 0.
 *
 * @param root Root of the binary tree
 * @returns Longest ZigZag path length (number of edges)
 */
export function longestZigZag(root: TreeNode | null): number {
  let max = 0;

  function dfs(node: TreeNode | null, leftLen: number, rightLen: number): void {
    if (!node) return;
    max = Math.max(max, leftLen, rightLen);

    // Going left: the zigzag extends if the parent came from the right
    dfs(node.left, rightLen + 1, 0);
    // Going right: the zigzag extends if the parent came from the left
    dfs(node.right, 0, leftLen + 1);
  }

  dfs(root, 0, 0);
  return max;
}
