---
number: 2352
title: "Equal Row and Column Pairs"
slug: "equal-row-and-column-pairs"
difficulty: "Medium"
topics: ["Hash Map / Set"]
frequency: 2
leetcode:
  id: "equal-row-and-column-pairs"
  url: "https://leetcode.com/problems/equal-row-and-column-pairs/"
examples:
  - input: 'grid = [[3,2,1],[1,7,6],[2,7,7]]'
    output: '1'
  - input: 'grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]'
    output: '3'
approach: 'hash-map serialization – store each row as a comma-joined string key in a Map (with duplicate counts), then serialize each column the same way and sum up the matching row counts.'
time: 'O(n²) – serializing all rows and columns each takes O(n²) total.'
space: 'O(n²) – the Map stores up to n keys, each of length O(n).'
---

<ProblemPage>

Given a 0-indexed `n × n` integer matrix `grid`, return the number of pairs `(ri, cj)` such that row `i` and column `j` are equal (same elements in the same order).

</ProblemPage>
