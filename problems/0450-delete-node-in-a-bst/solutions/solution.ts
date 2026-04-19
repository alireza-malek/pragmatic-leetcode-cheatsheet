/**
 * Deletes a node with the given key from a BST.
 *
 * Three cases for the target node:
 * 1. Leaf → simply remove.
 * 2. One child → replace with that child.
 * 3. Two children → replace value with inorder successor
 *    (smallest in right subtree), then delete that successor.
 *
 * @param root Root of the BST
 * @param key  Value to delete
 * @returns    Root of the modified BST
 */
export function deleteNode(
  root: TreeNode | null,
  key: number,
): TreeNode | null {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Found the node to delete
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Two children: find inorder successor (min of right subtree)
    let successor = root.right;
    while (successor.left) successor = successor.left;

    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
}
