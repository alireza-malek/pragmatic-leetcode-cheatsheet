---
number: 1004
title: "Max Consecutive Ones III"
slug: "max-consecutive-ones-iii"
difficulty: "Medium"
topics: ["Sliding Window"]
frequency: 4
leetcode:
  id: "max-consecutive-ones-iii"
  url: "https://leetcode.com/problems/max-consecutive-ones-iii/"
examples:
  - input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2'
    output: '6'
  - input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3'
    output: '10'
approach: 'variable-size sliding window – expand `right` unconditionally; when the window has more than `k` zeros, advance `left` until the constraint is restored.'
time: 'O(n) – each element is visited at most twice (once by `right`, once by `left`).'
space: 'O(1) – only a few integer variables.'
---

<ProblemPage>

Given a binary array `nums` and an integer `k`, return the _maximum number of consecutive_ `1`'s in the array if you can flip at most `k` `0`'s.

</ProblemPage>
