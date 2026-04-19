/**
 * Returns the maximum twin sum of a linked list with even length.
 * Twins: node i pairs with node (n - 1 - i).
 *
 * @param head Head of a linked list with even number of nodes
 * @returns    Maximum twin sum
 */
export function pairSum(head: ListNode | null): number {
  // Step 1: find the middle using slow/fast pointers
  let slow = head!;
  let fast = head!;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  // Step 2: reverse the second half starting at slow
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: pair nodes from front and reversed back, track max sum
  let max = 0;
  let front = head;
  let back = prev;
  while (back) {
    const sum = front!.val + back.val;
    if (sum > max) max = sum;
    front = front!.next;
    back = back.next;
  }

  return max;
}
