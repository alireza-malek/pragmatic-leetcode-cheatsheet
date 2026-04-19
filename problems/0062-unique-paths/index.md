---
number: 62
title: "Unique Paths"
slug: "unique-paths"
difficulty: "Medium"
topics: ["DP - Multidimensional"]
frequency: 4
leetcode:
  id: "unique-paths"
  url: "https://leetcode.com/problems/unique-paths/"
examples:
  - input: "m = 3, n = 7"
    output: "28"
  - input: "m = 3, n = 2"
    output: "3"
approach: "1D rolling DP – first row is all 1s. For each subsequent row, `dp[col] = dp[col] (from above) + dp[col-1] (from left)`."
time: "O(m · n) – nested loops."
space: "O(n) – single row array."
---

<ProblemPage>

A robot is at the top-left corner of an `m × n` grid. It can only move **right** or **down**. How many unique paths exist to reach the bottom-right corner?

<template #alternatives>

**Alternative approaches:**

| Approach      | Idea                                                   | Time     | Space    |
| ------------- | ------------------------------------------------------ | -------- | -------- |
| 2D DP table   | `dp[i][j] = dp[i-1][j] + dp[i][j-1]`                   | O(m · n) | O(m · n) |
| Combinatorics | Answer is C(m+n-2, m-1) = (m+n-2)! / ((m-1)! · (n-1)!) | O(m + n) | O(1)     |

**Why the 1D DP approach is preferred**: good balance of clarity and efficiency; combinatorics is O(1) space but risks integer overflow without careful implementation.

</template>

</ProblemPage>
