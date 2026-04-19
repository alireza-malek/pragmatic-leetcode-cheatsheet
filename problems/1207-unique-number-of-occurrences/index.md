---
number: 1207
title: "Unique Number of Occurrences"
slug: "unique-number-of-occurrences"
difficulty: "Easy"
topics: ["Hash Map / Set"]
frequency: 2
leetcode:
  id: "unique-number-of-occurrences"
  url: "https://leetcode.com/problems/unique-number-of-occurrences/"
examples:
  - input: 'nums = [1,2,2,1,1,3]'
    output: 'true'
  - input: 'nums = [1,2]'
    output: 'false'
  - input: 'nums = [-3,0,1,-3,1,1,1,-3,10,0]'
    output: 'true'
approach: 'frequency map + set – count occurrences with a Map, then put all counts into a Set; if the Set and Map have the same size, every count is unique.'
time: 'O(n) – one pass to build the frequency map, one pass over its values.'
space: 'O(n) – worst-case every element is distinct, so the map has n entries.'
---

<ProblemPage>

Given an array of integers `nums`, return `true` if the number of occurrences of each value in the array is unique, or `false` otherwise.

</ProblemPage>
