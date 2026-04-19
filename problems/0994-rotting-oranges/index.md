---
number: 994
title: "Rotting Oranges"
slug: "rotting-oranges"
difficulty: "Medium"
topics: ["Graphs - BFS"]
frequency: 4
leetcode:
  id: "rotting-oranges"
  url: "https://leetcode.com/problems/rotting-oranges/"
examples:
  - input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]'
    output: '4'
  - input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]'
    output: '-1'
  - input: 'grid = [[0,2]]'
    output: '0'
approach: 'multi-source BFS – enqueue all rotten oranges simultaneously, expand level-by-level (each level = one minute). Track remaining fresh count.'
time: 'O(m · n) – each cell enqueued at most once.'
space: 'O(m · n) – queue size.'
---

<ProblemPage>

In an `m × n` grid, each cell can be empty (`0`), a fresh orange (`1`), or a rotten orange (`2`). Every minute, fresh oranges adjacent (4-directionally) to rotten ones become rotten. Return the minimum number of minutes until no fresh orange remains, or `-1` if impossible.

</ProblemPage>
