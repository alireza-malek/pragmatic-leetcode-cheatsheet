---
number: 2542
title: "Maximum Subsequence Score"
slug: "maximum-subsequence-score"
difficulty: "Medium"
topics: ["Heap / Priority Queue"]
frequency: 3
leetcode:
  id: "maximum-subsequence-score"
  url: "https://leetcode.com/problems/maximum-subsequence-score/"
examples:
  - input: 'nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3'
    output: '12'
  - input: 'nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1'
    output: '30'
approach: 'greedy sort + min-heap – sort pairs by `nums2` descending. Iterate: each element becomes the candidate minimum. Maintain a size-k min-heap of `nums1` values to maximise the sum. Score = `sum × currentNums2`.'
time: 'O(n log n) for sorting + O(n log k) with a proper heap.'
space: 'O(n) – for the index array and heap.'
---

<ProblemPage>

You are given two 0-indexed integer arrays `nums1` and `nums2` of equal length `n` and a positive integer `k`. You must choose `k` indices. The **score** is `(sum of selected nums1 values) × (minimum of selected nums2 values)`. Return the maximum possible score.

</ProblemPage>
