---
number: 875
title: "Koko Eating Bananas"
slug: "koko-eating-bananas"
difficulty: "Medium"
topics: ["Binary Search"]
frequency: 4
leetcode:
  id: "koko-eating-bananas"
  url: "https://leetcode.com/problems/koko-eating-bananas/"
examples:
  - input: 'piles = [3,6,7,11], h = 8'
    output: '4'
  - input: 'piles = [30,11,23,4,20], h = 5'
    output: '30'
  - input: 'piles = [30,11,23,4,20], h = 6'
    output: '23'
approach: 'binary search on answer – the search space is the eating speed `[1, max(piles)]`. For each candidate speed, compute total hours and check feasibility.'
time: 'O(n · log(max(piles))) – n piles checked per binary search step.'
space: 'O(1) – only a few variables.'
---

<ProblemPage>

Koko has `piles` of bananas and `h` hours. She eats at speed `k` bananas/hour (one pile at a time, even if `k` exceeds the pile). Return the minimum `k` such that she can eat all bananas within `h` hours.

</ProblemPage>
