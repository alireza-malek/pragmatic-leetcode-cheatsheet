---
number: 206
title: "Reverse Linked List"
slug: "reverse-linked-list"
difficulty: "Easy"
topics: ["Linked List"]
frequency: 5
leetcode:
  id: "reverse-linked-list"
  url: "https://leetcode.com/problems/reverse-linked-list/"
examples:
  - input: "head = [1,2,3,4,5]"
    output: "[5,4,3,2,1]"
  - input: "head = [1,2]"
    output: "[2,1]"
  - input: "head = []"
    output: "[]"
approach: "iterative pointer reversal – maintain three pointers (`prev`, `curr`, `next`). On each step, point `curr.next` back to `prev`, then advance all three."
time: "O(n) – single pass through the list."
space: "O(1) – only three pointer variables."
---

<ProblemPage>

Given the `head` of a singly linked list, reverse the list and return the new head.

<template #alternatives>

**Alternative approaches:**

| Approach  | Idea                                                                                                             | Time | Space           |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ---- | --------------- |
| Recursive | Base case: single node or null. Recurse on `head.next`, then set `head.next.next = head` and `head.next = null`. | O(n) | O(n) call stack |

**Why the iterative method is preferred**: identical time complexity with O(1) space instead of O(n) stack frames, and no risk of stack overflow on very long lists.

</template>

</ProblemPage>
