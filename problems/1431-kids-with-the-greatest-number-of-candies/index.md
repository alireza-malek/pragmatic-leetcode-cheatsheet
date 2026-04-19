---
number: 1431
title: "Kids With the Greatest Number of Candies"
slug: "kids-with-the-greatest-number-of-candies"
difficulty: "Easy"
topics: ["Array / String"]
frequency: 1
leetcode:
  id: "kids-with-the-greatest-number-of-candies"
  url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/"
examples:
  - input: 'candies = [2,3,5,1,3], extraCandies = 3'
    output: '[true,true,true,false,true]'
  - input: 'candies = [4,2,1,1,2], extraCandies = 1'
    output: '[true,false,false,false,false]'
  - input: 'candies = [12,1,12], extraCandies = 10'
    output: '[true,false,true]'
approach: 'find-max then compare – find the maximum candies any kid has, then check if each kid''s candies plus extraCandies meets or exceeds this maximum.'
time: 'O(n) – one pass to find the max, one pass to build the result.'
space: 'O(n) – for the output array (unavoidable).'
---

<ProblemPage>

Given an integer array `candies` where `candies[i]` is the number of candies the _i-th_ kid has, and an integer `extraCandies`, return a boolean array `result` where `result[i]` is `true` if giving **all** `extraCandies` to kid _i_ would give them the greatest (or tied-greatest) number of candies among all kids.

</ProblemPage>
