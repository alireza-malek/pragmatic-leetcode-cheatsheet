---
number: 2130
title: "Maximum Twin Sum of a Linked List"
slug: "maximum-twin-sum-of-a-linked-list"
difficulty: "Medium"
topics: ["Linked List"]
frequency: 2
leetcode:
  id: "maximum-twin-sum-of-a-linked-list"
  url: "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/"
examples:
  - input: "head = [5,4,2,1]"
    output: "6"
  - input: "head = [4,2,2,3]"
    output: "7"
  - input: "head = [1,100000]"
    output: "100001"
approach: "slow/fast to find middle → reverse second half → walk both halves in tandem, tracking the maximum pair sum."
time: "O(n) – three sequential passes (find middle, reverse, pair sums)."
space: "O(1) – reversal is in-place; only pointer variables used."
---

<ProblemPage>

In a linked list of **even** length `n`, node `i` is the **twin** of node `n - 1 - i`. The **twin sum** is the sum of a node and its twin. Return the _maximum twin sum_ of the linked list.

<template #alternatives>

**Alternative approaches:**

| Approach    | Idea                                                                   | Time | Space |
| ----------- | ---------------------------------------------------------------------- | ---- | ----- |
| Stack/array | Store values of the first half in an array, then pair with second half | O(n) | O(n)  |

**Why the reverse method is preferred**: O(1) space vs O(n), which matters for large lists. The stack approach is simpler to code if space is not a concern.

</template>

</ProblemPage>
