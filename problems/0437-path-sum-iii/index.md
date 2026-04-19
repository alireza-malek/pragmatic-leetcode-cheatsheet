---
number: 437
title: "Path Sum III"
slug: "path-sum-iii"
difficulty: "Medium"
topics: ["Binary Tree - DFS"]
frequency: 4
leetcode:
  id: "path-sum-iii"
  url: "https://leetcode.com/problems/path-sum-iii/"
examples:
  - input: "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8"
    output: "3"
  - input: "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22"
    output: "3"
approach: "DFS + prefix sum map – at each node, `currentSum - target` tells us the prefix sum we need to have seen earlier; the map counts how many such prefixes exist on the current path."
time: "O(n) – each node visited once with O(1) map operations."
space: "O(n) – prefix map can hold up to n entries, plus O(h) recursion stack."
---

<ProblemPage>

Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the values along the path sum to `targetSum`. The path does not need to start at the root or end at a leaf, but it must go downwards (from parent to child).

<template #alternatives>

**Alternative approaches:**

| Approach                        | Idea                                                                 | Time             | Space |
| ------------------------------- | -------------------------------------------------------------------- | ---------------- | ----- |
| Brute force DFS from every node | For each node, start a separate DFS counting paths summing to target | O(n²) worst case | O(h)  |

**Why the prefix-sum method is preferred**: reduces O(n²) to O(n) by reusing accumulated prefix sums, analogous to the subarray-sum technique on arrays.

</template>

</ProblemPage>
