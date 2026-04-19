---
number: 1372
title: "Longest ZigZag Path in a Binary Tree"
slug: "longest-zigzag-path-in-a-binary-tree"
difficulty: "Medium"
topics: ["Binary Tree - DFS"]
frequency: 2
leetcode:
  id: "longest-zigzag-path-in-a-binary-tree"
  url: "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/"
examples:
  - input: 'root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]'
    output: '3'
  - input: 'root = [1,1,1,null,1,null,null,1,1,null,1]'
    output: '4'
  - input: 'root = [1]'
    output: '0'
approach: 'DFS with `(leftLen, rightLen)` state – each node receives the achievable zigzag lengths in both directions from its parent. Going left extends the right-side count; going right extends the left-side count; the unused direction resets to 0.'
time: 'O(n) – every node visited once.'
space: 'O(h) – recursion stack.'
---

<ProblemPage>

A ZigZag path starts at any node and alternates between going left and right (or right and left). The length is the number of edges traversed. Return the longest ZigZag path in the tree.

</ProblemPage>
