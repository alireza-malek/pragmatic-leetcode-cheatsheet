---
number: 435
title: "Non-overlapping Intervals"
slug: "non-overlapping-intervals"
difficulty: "Medium"
topics: ["Intervals"]
frequency: 4
leetcode:
  id: "non-overlapping-intervals"
  url: "https://leetcode.com/problems/non-overlapping-intervals/"
examples:
  - input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]'
    output: '1'
  - input: 'intervals = [[1,2],[1,2],[1,2]]'
    output: '2'
  - input: 'intervals = [[1,2],[2,3]]'
    output: '0'
approach: 'greedy by end time – sort intervals by end time. Greedily keep each interval whose start >= previous end. The answer is `total - kept`.'
time: 'O(n log n) – sorting dominates.'
space: 'O(1) extra – sorting in place.'
---

<ProblemPage>

Given an array of intervals `intervals[i] = [start, end]`, return the minimum number of intervals you need to remove to make the rest non-overlapping.

</ProblemPage>
