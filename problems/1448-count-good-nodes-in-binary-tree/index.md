---
number: 1448
title: "Count Good Nodes in Binary Tree"
slug: "count-good-nodes-in-binary-tree"
difficulty: "Medium"
topics: ["Binary Tree - DFS"]
frequency: 3
leetcode:
  id: "count-good-nodes-in-binary-tree"
  url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
examples:
  - input: 'root = [3,1,4,3,null,1,5]'
    output: '4'
  - input: 'root = [3,3,null,4,2]'
    output: '3'
  - input: 'root = [1]'
    output: '1'
approach: 'DFS with running max – pass the maximum value from root to current node; count the node if it meets or exceeds that max.'
time: 'O(n) – visits every node once.'
space: 'O(h) – recursion stack depth.'
---

<ProblemPage>

Given the `root` of a binary tree, a node `X` is _good_ if in the path from root to `X` there are no nodes with a value greater than `X`. Return the number of good nodes.

</ProblemPage>
