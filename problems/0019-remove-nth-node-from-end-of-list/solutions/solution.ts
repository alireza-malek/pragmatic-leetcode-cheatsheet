/**
 * Removes the n-th node from the end of the list in one pass.
 * Uses a dummy node to simplify edge cases (e.g. removing the head).
 *
 * @param head Head of the linked list
 * @param n    1-based position from the end to remove
 * @returns    Head of the modified list
 */
export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const dummy = new ListNode(0, head);
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;

  // Advance first pointer n + 1 steps so the gap is n nodes
  for (let i = 0; i <= n; i++) {
    first = first!.next;
  }

  // Move both until first reaches the end
  while (first) {
    first = first.next;
    second = second!.next;
  }

  // second is now right before the target node — skip it
  second!.next = second!.next!.next;

  return dummy.next;
}
