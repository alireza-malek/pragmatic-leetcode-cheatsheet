/**
 * Detects whether a linked list contains a cycle (Floyd's algorithm).
 *
 * @param head Head of the linked list
 * @returns    true if a cycle exists, false otherwise
 */
export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) return true; // pointers met → cycle
  }

  return false; // fast reached the end → no cycle
}
