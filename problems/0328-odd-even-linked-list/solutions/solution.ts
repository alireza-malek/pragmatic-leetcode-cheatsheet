/**
 * Reorders list so odd-indexed nodes come before even-indexed nodes (1-indexed).
 * Maintains two sub-chains and stitches them together.
 *
 * @param head Head of the linked list
 * @returns Head of the reordered list
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd: ListNode = head;
  let even: ListNode | null = head.next;
  const evenHead: ListNode = even; // save start of even chain

  while (even && even.next) {
    odd.next = even.next; // link odd to next odd
    odd = odd.next;
    even.next = odd.next; // link even to next even
    even = even.next;
  }

  // Connect end of odd chain to beginning of even chain
  odd.next = evenHead;

  return head;
}
