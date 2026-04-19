---
number: 238
title: "Product of Array Except Self"
slug: "product-of-array-except-self"
difficulty: "Medium"
topics: ["Array / String"]
frequency: 5
leetcode:
  id: "product-of-array-except-self"
  url: "https://leetcode.com/problems/product-of-array-except-self/"
examples:
  - input: "nums = [1,2,3,4]"
    output: "[24,12,8,6]"
  - input: "nums = [-1,1,0,-3,3]"
    output: "[0,0,9,0,0]"
approach: "prefix-suffix product (single output array) – compute prefix products in the first pass, then multiply by suffix products in a reverse pass."
time: "O(n) – two passes through the array."
space: "O(1) extra – output array doesn't count per the problem statement."
---

<ProblemPage>

Given an integer array `nums`, return an array `answer` where `answer[i]` equals the product of all elements of `nums` except `nums[i]`. You must solve it **without using division** and in O(n) time. The output array does not count as extra space.

<template #alternatives>

**Alternative approaches:**

| Approach              | Idea                                                                   | Time | Space      |
| --------------------- | ---------------------------------------------------------------------- | ---- | ---------- |
| Two separate arrays   | Build explicit `prefix[]` and `suffix[]` arrays, then multiply         | O(n) | O(n) extra |
| Division (if allowed) | Compute total product, divide by each element (handle zeros carefully) | O(n) | O(1)       |

**Why the single-array prefix-suffix method is preferred**:

- Meets the no-division constraint and uses no extra space beyond the output.
- Two clean passes make it easy to reason about correctness.

</template>

</ProblemPage>
