---
number: 643
title: "Maximum Average Subarray I"
slug: "maximum-average-subarray-i"
difficulty: "Easy"
topics: ["Sliding Window"]
frequency: 2
leetcode:
  id: "maximum-average-subarray-i"
  url: "https://leetcode.com/problems/maximum-average-subarray-i/"
examples:
  - input: 'nums = [1,12,-5,-6,50,3], k = 4'
    output: '12.75'
  - input: 'nums = [5], k = 1'
    output: '5.0'
  - input: 'nums = [0,4,0,3,2], k = 1'
    output: '4.0'
approach: 'fixed-size sliding window – maintain a window of size k, updating the sum by adding the new element and subtracting the old element as the window slides.'
time: 'O(n) – one pass to build the initial window, one pass to slide it.'
space: 'O(1) – only a few numeric variables.'
---

<ProblemPage>

Given an integer array `nums` of length `n` and an integer `k`, find a contiguous subarray of length `k` that has the maximum average value, and return that average. The answer will be accepted if the error is less than `10⁻⁵`.

</ProblemPage>
