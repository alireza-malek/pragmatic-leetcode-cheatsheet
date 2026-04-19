---
number: 1161
title: "Maximum Level Sum of a Binary Tree"
slug: "maximum-level-sum-of-a-binary-tree"
difficulty: "Medium"
topics: ["Binary Tree - BFS"]
frequency: 2
leetcode:
  id: "maximum-level-sum-of-a-binary-tree"
  url: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/"
examples:
  - input: 'root = [1,7,0,7,-8,null,null]'
    output: '2'
  - input: 'root = [989,null,10250,98693,-89388,null,null,null,-32127]'
    output: '2'
approach: 'BFS level-order – sum each level''s values, track the level with the highest sum.'
time: 'O(n) – every node processed once.'
space: 'O(n) – queue width.'
---

<ProblemPage>

Given the `root` of a binary tree, return the **smallest** level number (1-indexed) that has the maximum sum of node values.

</ProblemPage>
