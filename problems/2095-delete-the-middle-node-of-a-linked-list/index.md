---
number: 2095
title: "Delete the Middle Node of a Linked List"
slug: "delete-the-middle-node-of-a-linked-list"
difficulty: "Medium"
topics: ["Linked List"]
frequency: 2
leetcode:
  id: "delete-the-middle-node-of-a-linked-list"
  url: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/"
examples:
  - input: "[1,3,4,7,1,2,6]"
    output: "[1,3,4,1,2,6] (removed node 7 at index 3)"
  - input: "[1,2,3,4]"
    output: "[1,2,4] (removed node 3 at index 2)"
  - input: "[2,1]"
    output: "[2] (removed node 1 at index 1)"
approach: "slow/fast pointers – fast moves 2 steps, slow moves 1. By starting fast two nodes ahead, slow stops just before the middle node, allowing a single-pointer deletion."
time: "O(n) – one pass through the list."
space: "O(1) – only pointer variables."
---

<ProblemPage>

Given the `head` of a linked list, delete the **middle** node and return the modified head. The middle node is the `⌊n / 2⌋`-th node (0-indexed), where `n` is the list length. If the list has one node, return `null`.

<template #alternatives>

**Alternative approaches:**

| Approach               | Idea                                                                                                 | Time | Space |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ---- | ----- |
| Two-pass               | First pass counts nodes, second pass deletes at index `⌊n/2⌋`                                        | O(n) | O(1)  |
| Dummy node + slow/fast | Use a dummy node before head; start both pointers at dummy. Advance fast by 1 first, then loop both. | O(n) | O(1)  |

**Why the fast-start method is preferred**: Single pass with no dummy node allocation; minimal pointer arithmetic.

</template>

</ProblemPage>
