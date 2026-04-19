---
number: 334
title: "Increasing Triplet Subsequence"
slug: "increasing-triplet-subsequence"
difficulty: "Medium"
topics: ["Array / String"]
frequency: 3
leetcode:
  id: "increasing-triplet-subsequence"
  url: "https://leetcode.com/problems/increasing-triplet-subsequence/"
examples:
  - input: 'nums = [1,2,3,4,5]'
    output: 'true'
  - input: 'nums = [5,4,3,2,1]'
    output: 'false'
  - input: 'nums = [2,1,5,0,4,6]'
    output: 'true'
approach: 'greedy two-variable scan – maintain the two smallest values seen so far; if we find a value greater than both, a triplet exists.'
time: 'O(n) – single pass.'
space: 'O(1) – only two extra variables.'
---

<ProblemPage>

Given an integer array `nums`, return `true` if there exists a triple of indices `(i, j, k)` such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. Otherwise return `false`. Solve in O(n) time and O(1) space.

</ProblemPage>
