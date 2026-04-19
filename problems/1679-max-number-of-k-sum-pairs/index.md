---
number: 1679
title: "Max Number of K-Sum Pairs"
slug: "max-number-of-k-sum-pairs"
difficulty: "Medium"
topics: ["Two Pointers"]
frequency: 2
leetcode:
  id: "max-number-of-k-sum-pairs"
  url: "https://leetcode.com/problems/max-number-of-k-sum-pairs/"
examples:
  - input: "nums = [1,2,3,4], k = 5"
    output: "2"
  - input: "nums = [3,1,3,4,3], k = 6"
    output: "1"
  - input: "nums = [2,2,2,2], k = 4"
    output: "2"
approach: "hash map (single pass) – count frequencies of elements and find pairs that sum to k, decrementing counts as pairs are found."
time: "O(n) – one pass through the array with O(1) map operations."
space: "O(n) – worst-case every element is stored in the frequency map."
---

<ProblemPage>

Given an integer array `nums` and an integer `k`, in one operation you can pick two numbers from the array whose sum equals `k` and remove them. Return the maximum number of such operations you can perform.

<template #alternatives>

**Alternative approaches:**

| Approach            | Idea                                                                                                                                       | Time       | Space                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | -------------------- |
| Sort + two pointers | Sort the array, then use left/right pointers moving inward: if sum < k move left++, if sum > k move right--, if equal count and move both. | O(n log n) | O(1) (in-place sort) |

**Why the hash-map method is preferred**:

- Achieves O(n) time in a single pass without mutating the input.
- The sort + two-pointer approach is a solid alternative when O(1) extra space is more important than time.

</template>

</ProblemPage>
