/**
 * Returns true if both trees have the same leaf sequence (left to right).
 *
 * @param root1 Root of the first binary tree
 * @param root2 Root of the second binary tree
 */
export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean {
  const leaves1: number[] = [];
  const leaves2: number[] = [];
  collectLeaves(root1, leaves1);
  collectLeaves(root2, leaves2);

  if (leaves1.length !== leaves2.length) return false;
  return leaves1.every((v, i) => v === leaves2[i]);
}

function collectLeaves(node: TreeNode | null, leaves: number[]): void {
  if (!node) return;
  if (!node.left && !node.right) {
    leaves.push(node.val);
    return;
  }
  collectLeaves(node.left, leaves);
  collectLeaves(node.right, leaves);
}
