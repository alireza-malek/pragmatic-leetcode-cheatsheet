/**
 * Creates a deep copy of a linked list with random pointers.
 * Uses a hash map to map original nodes to their copies.
 *
 * @param head Head of the original list
 * @returns    Head of the deep-copied list
 */
export function copyRandomList(
  head: NodeWithRandom | null,
): NodeWithRandom | null {
  if (!head) return null;

  // First pass: create a copy of each node, store old→new mapping
  const map = new Map<NodeWithRandom, NodeWithRandom>();
  let curr: NodeWithRandom | null = head;
  while (curr) {
    map.set(curr, new NodeWithRandom(curr.val));
    curr = curr.next;
  }

  // Second pass: wire up next and random pointers on the copies
  curr = head;
  while (curr) {
    const copy = map.get(curr)!;
    copy.next = curr.next ? map.get(curr.next)! : null;
    copy.random = curr.random ? map.get(curr.random)! : null;
    curr = curr.next;
  }

  return map.get(head)!;
}
