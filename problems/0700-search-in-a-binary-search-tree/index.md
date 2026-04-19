---
number: 700
title: "Search in a Binary Search Tree"
slug: "search-in-a-binary-search-tree"
difficulty: "Easy"
topics: ["Binary Search Tree"]
frequency: 2
leetcode:
  id: "search-in-a-binary-search-tree"
  url: "https://leetcode.com/problems/search-in-a-binary-search-tree/"
examples:
  - input: 'root = [4,2,7,1,3], val = 2'
    output: '[2,1,3]'
  - input: 'root = [4,2,7,1,3], val = 5'
    output: 'null'
approach: 'BST binary search – compare `val` with the current node and recurse into the appropriate subtree.'
time: 'O(h) – where h is the tree height; O(log n) for balanced, O(n) worst case.'
space: 'O(h) – recursion stack (can be made O(1) with iteration).'
---

<ProblemPage>

Given the `root` of a BST and an integer `val`, find the node whose value equals `val` and return its subtree. If the node doesn't exist, return `null`.

</ProblemPage>
