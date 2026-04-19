---
number: 392
title: "Is Subsequence"
slug: "is-subsequence"
difficulty: "Easy"
topics: ["Two Pointers"]
frequency: 2
leetcode:
  id: "is-subsequence"
  url: "https://leetcode.com/problems/is-subsequence/"
examples:
  - input: 's = "abc", t = "ahbgdc"'
    output: "true"
  - input: 's = "axc", t = "ahbgdc"'
    output: "false"
  - input: 's = "", t = "ahbgdc"'
    output: "true"
approach: "two pointers – use one pointer for each string, advancing the subsequence pointer only when characters match."
time: "O(n) – where n = `t.length`; each character of `t` is visited at most once."
space: "O(1) – only two index variables."
---

<ProblemPage>

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, i.e. `s` can be obtained by deleting some (or no) characters from `t` without changing the order of the remaining characters.

<template #alternatives>

**Alternative approaches:**

| Approach                  | Idea                                                                                                                                                                                         | Time                                           | Space |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----- |
| Binary search (follow-up) | Pre-process `t` into a map of `char → sorted list of indices`, then for each char in `s` binary-search for the next valid index. Useful when checking many `s` strings against the same `t`. | O(m log n) per query after O(n) pre-processing | O(n)  |

**Why the two-pointer method is preferred**:

- Simplest to implement with optimal O(n) time for a single query.
- The binary-search variant only pays off when there are many `s` strings to validate against the same `t` (the LeetCode follow-up scenario).

</template>

</ProblemPage>
