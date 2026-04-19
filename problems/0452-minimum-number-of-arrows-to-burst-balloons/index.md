---
number: 452
title: "Minimum Number of Arrows to Burst Balloons"
slug: "minimum-number-of-arrows-to-burst-balloons"
difficulty: "Medium"
topics: ["Intervals"]
frequency: 3
leetcode:
  id: "minimum-number-of-arrows-to-burst-balloons"
  url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
examples:
  - input: 'points = [[10,16],[2,8],[1,6],[7,12]]'
    output: '2'
  - input: 'points = [[1,2],[3,4],[5,6],[7,8]]'
    output: '4'
  - input: 'points = [[1,2],[2,3],[3,4],[4,5]]'
    output: '2'
approach: 'greedy by end point – sort by `xend`. Place each arrow at the end of the current earliest-ending balloon. Any balloon whose start > arrow position needs a new arrow.'
time: 'O(n log n) – sorting dominates.'
space: 'O(1) extra – sorting in place.'
---

<ProblemPage>

Balloons are represented as intervals `[xstart, xend]` on a wall. An arrow shot at position `x` bursts all balloons where `xstart <= x <= xend`. Return the minimum number of arrows to burst all balloons.

</ProblemPage>
