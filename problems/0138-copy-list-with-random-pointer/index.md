---
number: 138
title: "Copy List with Random Pointer"
slug: "copy-list-with-random-pointer"
difficulty: "Medium"
topics: ["Linked List"]
frequency: 5
leetcode:
  id: "copy-list-with-random-pointer"
  url: "https://leetcode.com/problems/copy-list-with-random-pointer/"
examples:
  - input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]"
    output: "[[7,null],[13,0],[11,4],[10,2],[1,0]] (deep copy)"
  - input: "head = [[1,1],[2,1]]"
    output: "[[1,1],[2,1]] (deep copy)"
  - input: "head = [[3,null],[3,0],[3,null]]"
    output: "[[3,null],[3,0],[3,null]] (deep copy)"
approach: "hash map – first pass clones every node and records an `old → new` mapping; second pass sets `next` and `random` on each clone by looking up the map."
time: "O(n) – two passes through the list."
space: "O(n) – the hash map stores one entry per node."
---

<ProblemPage>

Construct a **deep copy** of a linked list where each node has an additional `random` pointer that can point to **any node** in the list or `null`.

<template #alternatives>

**Alternative approaches:**

| Approach                  | Idea                                                                                                                                          | Time | Space |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ----- |
| Interleaving (O(1) space) | Weave each copy right after its original (`A→A'→B→B'→…`), set `random` via `copy.random = original.random.next`, then separate the two lists. | O(n) | O(1)  |

**Why the hash-map method is preferred**: it is significantly simpler to implement and debug, with the same O(n) time. The O(1)-space interleaving trick is clever but error-prone due to pointer manipulation and mutating the original list temporarily.

</template>

</ProblemPage>
