/**
 * Deletes the middle node (index ⌊n/2⌋) from a singly linked list.
 * Uses slow/fast pointers where fast starts 2 steps ahead
 * so slow lands on the node BEFORE the middle.
 *
 * @param head Head of the linked list (1 ≤ n ≤ 10⁵)
 * @returns Head of the modified list
 */
export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode = head;
  // Fast starts two steps ahead so slow stops one before middle
  let fast: ListNode | null = head.next.next;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // slow is now the node before the middle; skip over the middle
  slow.next = slow.next!.next;

  return head;
}
