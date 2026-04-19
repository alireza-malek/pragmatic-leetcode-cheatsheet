---
number: 162
title: "Find Peak Element"
slug: "find-peak-element"
difficulty: "Medium"
topics: ["Binary Search"]
frequency: 4
leetcode:
  id: "find-peak-element"
  url: "https://leetcode.com/problems/find-peak-element/"
examples:
  - input: 'nums = [1,2,3,1]'
    output: '2'
  - input: 'nums = [1,2,1,3,5,6,4]'
    output: '5 (or 1)'
approach: 'binary search on slope – since `nums[-1] = nums[n] = -∞`, a rising slope guarantees a peak to the right. Converge to a peak by always moving toward the higher neighbor.'
time: 'O(log n) – halves the search space each iteration.'
space: 'O(1) – only a few variables.'
---

<ProblemPage>

A peak element is strictly greater than its neighbors. Given an integer array `nums` where `nums[i] ≠ nums[i + 1]`, find **any** peak element and return its index. The array may contain multiple peaks. You must solve in O(log n) time. Assume `nums[-1] = nums[n] = -∞`.

</ProblemPage>
