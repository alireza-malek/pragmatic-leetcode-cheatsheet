---
number: 17
title: "Letter Combinations of a Phone Number"
slug: "letter-combinations-of-a-phone-number"
difficulty: "Medium"
topics: ["Backtracking"]
frequency: 4
leetcode:
  id: "letter-combinations-of-a-phone-number"
  url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
examples:
  - input: 'digits = "23"'
    output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]'
  - input: 'digits = ""'
    output: "[]"
  - input: 'digits = "2"'
    output: '["a","b","c"]'
approach: "backtracking – for each digit, branch into all its mapped letters and recurse on the next digit."
time: "O(4^n · n) – at most 4 letters per digit, n digits, and O(n) to build each string."
space: "O(n) – recursion depth equals the number of digits (output not counted)."
---

<ProblemPage>

Given a string containing digits from `2-9`, return all possible letter combinations that the number could represent (phone keypad mapping). Return the answer in any order.

<template #alternatives>

**Alternative approaches:**

| Approach                       | Idea                                                                                   | Time       | Space      |
| ------------------------------ | -------------------------------------------------------------------------------------- | ---------- | ---------- |
| Iterative (BFS-like) expansion | Start with `[""]`; for each digit, append every mapped letter to every existing string | O(4^n · n) | O(4^n · n) |

**Why backtracking is preferred**: teaches the generalizable pattern used in Combination Sum, N-Queens, etc. The iterative approach is equally valid but less transferable as a technique.

</template>

</ProblemPage>
