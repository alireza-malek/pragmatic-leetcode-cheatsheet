---
number: 39
title: "Combination Sum"
slug: "combination-sum"
difficulty: "Medium"
topics: ["Backtracking"]
frequency: 5
leetcode:
  id: "combination-sum"
  url: "https://leetcode.com/problems/combination-sum/"
examples:
  - input: 'candidates = [2,3,6,7], target = 7'
    output: '[[2,2,3],[7]]'
  - input: 'candidates = [2,3,5], target = 8'
    output: '[[2,2,2,2],[2,3,3],[3,5]]'
approach: 'backtracking with pruning – sort candidates first, then recurse from the current index (allowing reuse). Break early when the candidate exceeds the remaining sum.'
time: 'O(n^(T/M)) – where T is the target and M is the smallest candidate (max recursion depth).'
space: 'O(T/M) – recursion depth.'
---

<ProblemPage>

Given an array of **distinct** integers `candidates` and a `target`, return all unique combinations where the chosen numbers sum to `target`. The **same** number may be chosen an unlimited number of times. Combinations are returned in any order.

</ProblemPage>
