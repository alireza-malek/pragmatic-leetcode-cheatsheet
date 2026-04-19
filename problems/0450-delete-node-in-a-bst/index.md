---
number: 450
title: "Delete Node in a BST"
slug: "delete-node-in-a-bst"
difficulty: "Medium"
topics: ["Binary Search Tree"]
frequency: 4
leetcode:
  id: "delete-node-in-a-bst"
  url: "https://leetcode.com/problems/delete-node-in-a-bst/"
examples:
  - input: "root = [5,3,6,2,4,null,7], key = 3"
    output: "[5,4,6,2,null,null,7]"
  - input: "root = [5,3,6,2,4,null,7], key = 0"
    output: "[5,3,6,2,4,null,7]"
  - input: "root = [], key = 0"
    output: "[]"
approach: "recursive BST deletion – navigate to the key, then handle three cases (leaf, one child, two children). For two children, replace with the inorder successor and recursively delete it."
time: "O(h) – one path down to find the node, plus one path down to find/delete the successor."
space: "O(h) – recursion stack."
---

<ProblemPage>

Given the `root` of a BST and a `key`, delete the node with that key and return the root of the modified BST. The tree must remain a valid BST after deletion.

<template #alternatives>

**Alternative approaches:**

| Approach            | Idea                                                              | Time | Space |
| ------------------- | ----------------------------------------------------------------- | ---- | ----- |
| Inorder predecessor | Same logic but replace with the largest value in the left subtree | O(h) | O(h)  |

**Why the successor method is preferred**: purely conventional — both are equally valid and symmetric.

</template>

</ProblemPage>
