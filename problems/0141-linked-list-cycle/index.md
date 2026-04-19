---
number: 141
title: "Linked List Cycle"
slug: "linked-list-cycle"
difficulty: "Easy"
topics: ["Linked List"]
frequency: 5
leetcode:
  id: "linked-list-cycle"
  url: "https://leetcode.com/problems/linked-list-cycle/"
examples:
  - input: "head = [3,2,0,-4], tail connects to index 1"
    output: "true"
  - input: "head = [1,2], tail connects to index 0"
    output: "true"
  - input: "head = [1], no cycle"
    output: "false"
approach: "Floyd's tortoise and hare – `slow` advances one node, `fast` advances two. If a cycle exists they will eventually meet; if not, `fast` reaches `null`."
time: "O(n) – in the worst case, `fast` traverses the cycle at most twice before meeting `slow`."
space: "O(1) – two pointer variables."
---

<ProblemPage>

Given `head`, the head of a linked list, determine if the linked list has a **cycle** in it. A cycle exists if some node can be reached again by continuously following `next`. Return `true` if there is a cycle, `false` otherwise.

<template #alternatives>

**Alternative approaches:**

| Approach | Idea                                                                                    | Time | Space |
| -------- | --------------------------------------------------------------------------------------- | ---- | ----- |
| Hash set | Store every visited node in a `Set`; if `next` is already in the set, there is a cycle. | O(n) | O(n)  |

**Why Floyd's algorithm is preferred**: it achieves the same O(n) time with O(1) space, making it strictly better in memory usage.

</template>

</ProblemPage>
