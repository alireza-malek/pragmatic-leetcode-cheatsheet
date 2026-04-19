/**
 * Reverses a singly linked list in-place and returns the new head.
 *
 * @param head Head of the original list (may be null)
 * @returns    Head of the reversed list
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    const next = curr.next; // save next before overwriting
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
