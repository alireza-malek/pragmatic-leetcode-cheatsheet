---
number: 1143
title: "Longest Common Subsequence"
slug: "longest-common-subsequence"
difficulty: "Medium"
topics: ["DP - Multidimensional"]
frequency: 5
leetcode:
  id: "longest-common-subsequence"
  url: "https://leetcode.com/problems/longest-common-subsequence/"
examples:
  - input: 'text1 = "abcde", text2 = "ace"'
    output: '3 (LCS = "ace")'
  - input: 'text1 = "abc", text2 = "abc"'
    output: "3"
  - input: 'text1 = "abc", text2 = "def"'
    output: "0"
approach: "2D DP – classic LCS recurrence. Match → diagonal + 1; mismatch → max of top or left."
time: "O(m · n) – fill the entire table."
space: "O(m · n) – the DP table."
---

<ProblemPage>

Given two strings `text1` and `text2`, return the length of their longest common subsequence (LCS). A subsequence is derived by deleting some (or no) characters without changing the order.

<template #alternatives>

**Alternative approaches:**

| Approach              | Idea                                                                          | Time     | Space        |
| --------------------- | ----------------------------------------------------------------------------- | -------- | ------------ |
| Space-optimized 1D DP | Only keep two rows (current and previous) since dp[i] depends only on dp[i-1] | O(m · n) | O(min(m, n)) |

**Why the 2D approach is preferred**: easier to understand and debug; the 1D optimization is straightforward to apply once correctness is verified.

</template>

</ProblemPage>
