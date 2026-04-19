---
number: 15
title: "3Sum"
slug: "3sum"
difficulty: "Medium"
topics: ["Array / String"]
frequency: 5
leetcode:
  id: "3sum"
  url: "https://leetcode.com/problems/3sum/"
examples:
  - input: "nums = [-1,0,1,2,-1,-4]"
    output: "[[-1,-1,2],[-1,0,1]]"
  - input: "nums = [0,1,1]"
    output: "[]"
  - input: "nums = [0,0,0]"
    output: "[[0,0,0]]"
approach: "sort + two-pointer – sort the array, iterate through it fixing one element, and use two pointers to find pairs that sum to the negative of the fixed element."
time: "O(n²) – outer loop O(n) × inner two-pointer scan O(n)."
space: "O(1) extra – sorting is in-place; output space is not counted."
---

<ProblemPage>

Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that `i ≠ j ≠ k` and `nums[i] + nums[j] + nums[k] === 0`. The solution set must not contain duplicate triplets.

<template #alternatives>

**Alternative approaches:**

| Approach    | Idea                                                                                           | Time  | Space |
| ----------- | ---------------------------------------------------------------------------------------------- | ----- | ----- |
| Hash-set    | For each pair, check if `-(a+b)` exists in a set; use a `Set<string>` to deduplicate triplets. | O(n²) | O(n)  |
| Brute force | Check all triples `i < j < k`.                                                                 | O(n³) | O(1)  |

**Why sort + two-pointer is preferred**:

- Sorting makes duplicate skipping trivial with simple `===` checks on adjacent elements.
- O(1) extra space vs. the hash-set approach which needs bookkeeping to avoid duplicate triplets.

</template>

</ProblemPage>
