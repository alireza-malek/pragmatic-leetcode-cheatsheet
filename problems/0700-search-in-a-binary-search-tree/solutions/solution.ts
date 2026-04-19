/**
 * Searches for a value in a BST and returns the subtree rooted at that node.
 *
 * @param root Root of the BST
 * @param val  Value to search for
 * @returns    Subtree rooted at the found node, or null
 */
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (val === root.val) return root;
  return val < root.val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
}
