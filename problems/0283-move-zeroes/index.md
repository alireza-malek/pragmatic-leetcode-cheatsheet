---
number: 283
title: "Move Zeroes"
slug: "move-zeroes"
difficulty: "Easy"
topics: ["Two Pointers"]
frequency: 4
leetcode:
  id: "move-zeroes"
  url: "https://leetcode.com/problems/move-zeroes/"
examples:
  - input: "nums = [0,1,0,3,12]"
    output: "[1,3,12,0,0]"
  - input: "nums = [0]"
    output: "[0]"
  - input: "nums = [1,2,3]"
    output: "[1,2,3]"
approach: "two-pointer (read/write) – use a read pointer to scan the array and a write pointer to place non-zero elements, then fill the rest with zeros."
time: "O(n) – single pass through the array."
space: "O(1) – in-place swaps, no extra storage."
---

<ProblemPage>

Given an integer array `nums`, move all `0`'s to the end while maintaining the relative order of the non-zero elements. You must do this **in-place** without making a copy of the array.

<template #alternatives>

**Alternative approaches:**

| Approach           | Idea                                                                                | Time | Space |
| ------------------ | ----------------------------------------------------------------------------------- | ---- | ----- |
| Two-pass overwrite | First pass: copy all non-zeros to the front. Second pass: fill the rest with zeros. | O(n) | O(1)  |

**Why the swap approach is preferred**:

- Single pass instead of two, and naturally preserves the relative order with minimal writes.

</template>

</ProblemPage>
