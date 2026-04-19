---
number: 199
title: "Binary Tree Right Side View"
slug: "binary-tree-right-side-view"
difficulty: "Medium"
topics: ["Binary Tree - BFS"]
frequency: 4
leetcode:
  id: "binary-tree-right-side-view"
  url: "https://leetcode.com/problems/binary-tree-right-side-view/"
examples:
  - input: "root = [1,2,3,null,5,null,4]"
    output: "[1,3,4]"
  - input: "root = [1,null,3]"
    output: "[1,3]"
  - input: "root = []"
    output: "[]"
approach: "BFS level-order traversal – process each level; the last node in each level is the one visible from the right."
time: "O(n) – every node is enqueued and dequeued once."
space: "O(n) – the queue can hold up to n/2 nodes (last level of a complete tree)."
---

<ProblemPage>

Given the `root` of a binary tree, return the values of the nodes you can see when looking at the tree from the **right side**, ordered from top to bottom.

<template #alternatives>

**Alternative approaches:**

| Approach          | Idea                                                                                 | Time | Space |
| ----------------- | ------------------------------------------------------------------------------------ | ---- | ----- |
| DFS (right-first) | Traverse right child before left, recording the first node encountered at each depth | O(n) | O(h)  |

**Why BFS is preferred**: the level-by-level structure makes the "last in level" logic intuitive; DFS requires tracking depth explicitly.

</template>

</ProblemPage>
