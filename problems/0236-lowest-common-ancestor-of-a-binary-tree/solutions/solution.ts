/**
 * Finds the lowest common ancestor of nodes p and q in a binary tree.
 *
 * @param root Root of the binary tree
 * @param p    First target node
 * @param q    Second target node
 * @returns    The LCA node
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both sides returned non-null, this node is the LCA
  if (left && right) return root;

  // Otherwise, the non-null side contains both p and q
  return left ?? right;
}
