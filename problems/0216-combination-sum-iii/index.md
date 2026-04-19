---
number: 216
title: "Combination Sum III"
slug: "combination-sum-iii"
difficulty: "Medium"
topics: ["Backtracking"]
frequency: 3
leetcode:
  id: "combination-sum-iii"
  url: "https://leetcode.com/problems/combination-sum-iii/"
examples:
  - input: 'k = 3, n = 7'
    output: '[[1,2,4]]'
  - input: 'k = 3, n = 9'
    output: '[[1,2,6],[1,3,5],[2,3,4]]'
  - input: 'k = 4, n = 1'
    output: '[]'
approach: 'backtracking over digits 1-9 – pick each digit at most once (advance `start`), prune when the current digit exceeds the remaining sum or the path already has `k` elements.'
time: 'O(C(9, k)) – bounded by the number of k-element subsets of {1…9}.'
space: 'O(k) – recursion depth and path length.'
---

<ProblemPage>

Find all valid combinations of `k` numbers that sum up to `n`, where only digits `1` through `9` are used and each digit is used **at most once**. Return the list of all valid combinations.

</ProblemPage>
