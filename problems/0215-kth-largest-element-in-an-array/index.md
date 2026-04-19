---
number: 215
title: "Kth Largest Element in an Array"
slug: "kth-largest-element-in-an-array"
difficulty: "Medium"
topics: ["Heap / Priority Queue"]
frequency: 5
leetcode:
  id: "kth-largest-element-in-an-array"
  url: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
examples:
  - input: "nums = [3,2,1,5,6,4], k = 2"
    output: "5"
  - input: "nums = [3,2,3,1,2,4,5,5,6], k = 4"
    output: "4"
approach: "min-heap of size k – maintain a heap of the k largest elements seen so far. After processing all elements, the root is the k-th largest."
time: "O(n log k) with a proper heap – each insertion/extraction is O(log k)."
space: "O(k) – the heap stores at most k elements."
---

<ProblemPage>

Given an integer array `nums` and an integer `k`, return the `k`-th largest element. Note that it is the `k`-th largest in **sorted order**, not the `k`-th distinct element.

<template #alternatives>

**Alternative approaches:**

| Approach    | Idea                                                                             | Time                      | Space        |
| ----------- | -------------------------------------------------------------------------------- | ------------------------- | ------------ |
| Quickselect | Partition like quicksort, recurse only into the half containing the k-th element | O(n) average, O(n²) worst | O(1)         |
| Full sort   | Sort the array and return `nums[n - k]`                                          | O(n log n)                | O(1) or O(n) |

**Why the min-heap method is preferred**: guarantees O(n log k) time, which beats O(n log n) sorting when k ≪ n. Quickselect is faster on average but has poor worst-case guarantees without randomization.

</template>

</ProblemPage>
