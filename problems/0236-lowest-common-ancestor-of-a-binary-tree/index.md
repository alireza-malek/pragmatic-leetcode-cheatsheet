---
number: 236
title: "Lowest Common Ancestor of a Binary Tree"
slug: "lowest-common-ancestor-of-a-binary-tree"
difficulty: "Medium"
topics: ["Binary Tree - DFS"]
frequency: 5
leetcode:
  id: "lowest-common-ancestor-of-a-binary-tree"
  url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
examples:
  - input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1'
    output: '3'
  - input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4'
    output: '5'
  - input: 'root = [1,2], p = 1, q = 2'
    output: '1'
approach: 'recursive DFS – returns the current node if it''s `p` or `q`; if both subtrees return non-null, the current node is the LCA; otherwise propagate the non-null result upward.'
time: 'O(n) – visits each node at most once.'
space: 'O(h) – recursion stack.'
---

<ProblemPage>

Given a binary tree and two nodes `p` and `q`, find their lowest common ancestor (LCA). The LCA is the deepest node that is an ancestor of both `p` and `q` (a node can be an ancestor of itself).

</ProblemPage>
