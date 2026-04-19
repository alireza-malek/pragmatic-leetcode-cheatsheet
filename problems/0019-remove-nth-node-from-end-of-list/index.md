---
number: 19
title: "Remove Nth Node From End of List"
slug: "remove-nth-node-from-end-of-list"
difficulty: "Medium"
topics: ["Linked List"]
frequency: 4
leetcode:
  id: "remove-nth-node-from-end-of-list"
  url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
examples:
  - input: 'head = [1,2,3,4,5], n = 2'
    output: '[1,2,3,5]'
  - input: 'head = [1], n = 1'
    output: '[]'
  - input: 'head = [1,2], n = 1'
    output: '[1]'
approach: 'two-pointer gap technique – create a gap of `n` nodes between `first` and `second`. When `first` reaches the end, `second` sits right before the node to remove. A dummy node before `head` handles the edge case of removing the head itself.'
time: 'O(L) where L is the list length – single pass.'
space: 'O(1) – only pointer variables and one dummy node.'
---

<ProblemPage>

Given the `head` of a linked list, remove the **n-th node from the end** of the list and return its head.

</ProblemPage>
