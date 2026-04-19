---
number: 1493
title: "Longest Subarray of 1's After Deleting One Element"
slug: "longest-subarray-of-1s-after-deleting-one-element"
difficulty: "Medium"
topics: ["Sliding Window"]
frequency: 3
leetcode:
  id: "longest-subarray-of-1s-after-deleting-one-element"
  url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/"
examples:
  - input: 'nums = [1,1,0,1,1,1,0,1]'
    output: '5'
  - input: 'nums = [0,1,1,1,0,1,1,0,1]'
    output: '5'
  - input: 'nums = [1,1,1]'
    output: '2'
approach: 'sliding window with at most one zero – identical to problem 21 with `k = 1`, but the result is `windowSize − 1` because exactly one element must be removed.'
time: 'O(n) – each index is visited at most twice.'
space: 'O(1) – constant extra variables.'
---

<ProblemPage>

Given a binary array `nums`, return the size of the _longest_ non-empty subarray containing only `1`'s in the resulting array after deleting **exactly one** element. Return `0` if there is no such subarray.

</ProblemPage>
