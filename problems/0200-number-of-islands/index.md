---
number: 200
title: "Number of Islands"
slug: "number-of-islands"
difficulty: "Medium"
topics: ["Graphs - BFS"]
frequency: 5
leetcode:
  id: "number-of-islands"
  url: "https://leetcode.com/problems/number-of-islands/"
examples:
  - input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
    output: "1"
  - input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]'
    output: "3"
approach: "BFS flood-fill – for each unvisited land cell, increment the island count and BFS to mark all connected land as visited."
time: "O(m · n) – each cell enqueued at most once."
space: "O(min(m, n)) – the BFS queue holds at most one full diagonal of the grid at peak."
---

<ProblemPage>

Given an `m × n` 2D grid of `'1'`s (land) and `'0'`s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

<template #alternatives>

**Alternative approaches:**

| Approach   | Idea                                                      | Time                | Space                          |
| ---------- | --------------------------------------------------------- | ------------------- | ------------------------------ |
| DFS        | Same flood-fill but recursive; simpler code, deeper stack | O(m · n)            | O(m · n) call stack worst case |
| Union-Find | Union adjacent land cells, count distinct components      | O(m · n · α(m · n)) | O(m · n)                       |

**Why BFS is preferred here**: avoids worst-case O(m · n) recursion stack depth (large all-land grids can overflow the call stack with DFS); BFS queue depth is bounded by O(min(m, n)).

</template>

</ProblemPage>
