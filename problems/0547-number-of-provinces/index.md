---
number: 547
title: "Number of Provinces"
slug: "number-of-provinces"
difficulty: "Medium"
topics: ["Graphs - DFS"]
frequency: 4
leetcode:
  id: "number-of-provinces"
  url: "https://leetcode.com/problems/number-of-provinces/"
examples:
  - input: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]"
    output: "2"
  - input: "isConnected = [[1,0,0],[0,1,0],[0,0,1]]"
    output: "3"
approach: "DFS connected components – iterate through all cities; for each unvisited city, increment the province count and DFS-flood-fill all connected cities."
time: "O(n²) – every cell in the adjacency matrix is checked."
space: "O(n) – visited array plus recursion stack."
---

<ProblemPage>

There are `n` cities. `isConnected[i][j] = 1` means city `i` and city `j` are directly connected. A province is a group of directly or indirectly connected cities. Return the number of provinces.

<template #alternatives>

**Alternative approaches:**

| Approach   | Idea                                                                          | Time                 | Space |
| ---------- | ----------------------------------------------------------------------------- | -------------------- | ----- |
| Union-Find | For each edge `(i, j)`, union the two cities; count distinct roots at the end | O(n² · α(n)) ≈ O(n²) | O(n)  |
| BFS        | Same idea as DFS but use a queue                                              | O(n²)                | O(n)  |

**Why DFS is preferred**: simplest to implement for adjacency matrix input; Union-Find is better for edge-list representations.

</template>

</ProblemPage>
