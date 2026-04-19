---
number: 1
title: "Two Sum"
slug: "two-sum"
difficulty: "Easy"
topics: ["Array / String"]
frequency: 5
leetcode:
  id: "two-sum"
  url: "https://leetcode.com/problems/two-sum/"
examples:
  - input: "nums = [2,7,11,15], target = 9"
    output: "[0,1]"
  - input: "nums = [3,2,4], target = 6"
    output: "[1,2]"
  - input: "nums = [3,3], target = 6"
    output: "[0,1]"
approach: "hash-map – store the complement of each element in a map and check if it exists in the map."
time: "O(n) – one pass through the array."
space: "O(n) – worst-case we store every element in the map."
---

<ProblemPage>

Given an array of integers `nums` and a target integer `target`, return the _indices_ of two numbers in the array that add up to `target`.
You may assume each input has exactly one solution, and you cannot use the same element twice.

<template #alternatives>

**Alternative approaches:**

| Approach                  | Idea                                            | Time       | Space                     |
| ------------------------- | ----------------------------------------------- | ---------- | ------------------------- |
| Brute force               | Check all pairs `i < j`                         | O(n²)      | O(1)                      |
| Two-pointer after sorting | Sort a copy, then use two indices moving inward | O(n log n) | O(n) for original indices |

**Why the hash-map method is preferred**:

- It uses linear time, which is optimal for this problem.
- It preserves original indices without needing a sorted copy.

</template>

</ProblemPage>
