---
number: 1732
title: "Find the Highest Altitude"
slug: "find-the-highest-altitude"
difficulty: "Easy"
topics: ["Prefix Sum"]
frequency: 1
leetcode:
  id: "find-the-highest-altitude"
  url: "https://leetcode.com/problems/find-the-highest-altitude/"
examples:
  - input: 'gain = [-5,1,5,0,-7]'
    output: '1'
  - input: 'gain = [-4,-3,-2,-1,4,3,2]'
    output: '0'
approach: 'prefix sum – accumulate a running altitude and track the maximum seen so far.'
time: 'O(n) – single pass through the `gain` array.'
space: 'O(1) – two integer variables.'
---

<ProblemPage>

A biker starts a trip at altitude `0` and goes through `n + 1` points. You are given an integer array `gain` of length `n`, where `gain[i]` is the **net gain in altitude** between points `i` and `i + 1`. Return the _highest altitude_ reached.

</ProblemPage>
