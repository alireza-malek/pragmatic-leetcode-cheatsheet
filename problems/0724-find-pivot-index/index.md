---
number: 724
title: "Find Pivot Index"
slug: "find-pivot-index"
difficulty: "Easy"
topics: ["Prefix Sum"]
frequency: 3
leetcode:
  id: "find-pivot-index"
  url: "https://leetcode.com/problems/find-pivot-index/"
examples:
  - input: 'nums = [1,7,3,6,5,6]'
    output: '3'
  - input: 'nums = [1,2,3]'
    output: '-1'
  - input: 'nums = [2,1,-1]'
    output: '0'
approach: 'prefix sum – compute the total sum once, then iterate while maintaining a running `leftSum`. At each index, `rightSum = total − leftSum − nums[i]`.'
time: 'O(n) – one pass to compute `total`, one pass to find the pivot.'
space: 'O(1) – only two numeric variables.'
---

<ProblemPage>

Given an integer array `nums`, return the **leftmost pivot index**. The pivot index is where the sum of all elements strictly to the left equals the sum of all elements strictly to the right. If no such index exists, return `-1`. An element at the edge has `0` on one side.

</ProblemPage>
