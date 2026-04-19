---
number: 72
title: "Edit Distance"
slug: "edit-distance"
difficulty: "Medium"
topics: ["DP - Multidimensional"]
frequency: 4
leetcode:
  id: "edit-distance"
  url: "https://leetcode.com/problems/edit-distance/"
examples:
  - input: 'word1 = "horse", word2 = "ros"'
    output: "3"
  - input: 'word1 = "intention", word2 = "execution"'
    output: "5"
approach: "2D DP – classic edit distance recurrence. Characters match → take diagonal. Otherwise → 1 + min(replace, delete, insert)."
time: "O(m · n) – fill the entire table."
space: "O(m · n) – the DP table."
---

<ProblemPage>

Given two strings `word1` and `word2`, return the minimum number of operations (insert, delete, replace a character) required to convert `word1` into `word2`.

<template #alternatives>

**Alternative approaches:**

| Approach              | Idea                                                   | Time     | Space        |
| --------------------- | ------------------------------------------------------ | -------- | ------------ |
| Space-optimized 1D DP | Keep only two rows since dp[i] depends only on dp[i-1] | O(m · n) | O(min(m, n)) |

**Why the 2D approach is preferred**: clearer to implement and debug; the 1D optimization is a straightforward follow-up once correctness is confirmed.

</template>

</ProblemPage>
