---
number: 872
title: "Leaf-Similar Trees"
slug: "leaf-similar-trees"
difficulty: "Easy"
topics: ["Binary Tree - DFS"]
frequency: 2
leetcode:
  id: "leaf-similar-trees"
  url: "https://leetcode.com/problems/leaf-similar-trees/"
examples:
  - input: 'root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
    output: 'true'
  - input: 'root1 = [1,2,3], root2 = [1,3,2]'
    output: 'false'
approach: 'DFS leaf collection – collect leaves from each tree into an array, then compare.'
time: 'O(n + m) – visits every node in both trees.'
space: 'O(n + m) – leaf arrays plus call stack.'
---

<ProblemPage>

Two binary trees are _leaf-similar_ if their leaf value sequences (left to right) are identical. Given the roots of two binary trees, return `true` if they are leaf-similar.

</ProblemPage>
