---
number: 104
title: "Maximum Depth of Binary Tree"
slug: "maximum-depth-of-binary-tree"
difficulty: "Easy"
topics: ["Binary Tree - DFS"]
frequency: 4
leetcode:
  id: "maximum-depth-of-binary-tree"
  url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
examples:
  - input: "root = [3,9,20,null,null,15,7]"
    output: "3"
  - input: "root = [1,null,2]"
    output: "2"
approach: "recursive DFS – base case returns 0 for null; each node adds 1 to the max of its children's depths."
time: "O(n) – visits every node exactly once."
space: "O(h) – call stack depth equals tree height; O(n) worst case for a skewed tree, O(log n) for balanced."
---

<ProblemPage>

Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

<template #alternatives>

**Alternative approaches:**

| Approach      | Idea                                  | Time | Space              |
| ------------- | ------------------------------------- | ---- | ------------------ |
| Iterative BFS | Level-order traversal counting levels | O(n) | O(n) (queue width) |

**Why DFS recursion is preferred**: one-liner logic, trivially correct, and O(h) space beats O(n) for balanced trees.

</template>

</ProblemPage>
