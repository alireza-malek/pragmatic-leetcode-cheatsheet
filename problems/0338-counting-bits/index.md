---
number: 338
title: "Counting Bits"
slug: "counting-bits"
difficulty: "Easy"
topics: ["Bit Manipulation"]
frequency: 3
leetcode:
  id: "counting-bits"
  url: "https://leetcode.com/problems/counting-bits/"
examples:
  - input: 'n = 2'
    output: '[0,1,1]'
  - input: 'n = 5'
    output: '[0,1,1,2,1,2]'
approach: 'DP on bit shift – `popcount(i) = popcount(i >> 1) + (i & 1)`. The right-shifted value is always a smaller index, so it''s already computed.'
time: 'O(n) – single pass.'
space: 'O(n) – the output array.'
---

<ProblemPage>

Given an integer `n`, return an array `ans` of length `n + 1` such that `ans[i]` is the number of `1`'s in the binary representation of `i`.

</ProblemPage>
