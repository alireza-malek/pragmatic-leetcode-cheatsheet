---
number: 374
title: "Guess Number Higher or Lower"
slug: "guess-number-higher-or-lower"
difficulty: "Easy"
topics: ["Binary Search"]
frequency: 2
leetcode:
  id: "guess-number-higher-or-lower"
  url: "https://leetcode.com/problems/guess-number-higher-or-lower/"
examples:
  - input: 'n = 10, pick = 6'
    output: '6'
  - input: 'n = 1, pick = 1'
    output: '1'
  - input: 'n = 2, pick = 1'
    output: '1'
approach: 'binary search – classic halving of the search space using the `guess` API feedback.'
time: 'O(log n) – halves the range each iteration.'
space: 'O(1) – only a few variables.'
---

<ProblemPage>

We are playing a guessing game. I picked a number from `1` to `n`. You call `guess(num)` which returns `-1` (my number is lower), `1` (my number is higher), or `0` (correct). Return the number I picked.

</ProblemPage>
