---
number: 1466
title: "Reorder Routes to Make All Paths Lead to the City Zero"
slug: "reorder-routes-to-make-all-paths-lead-to-the-city-zero"
difficulty: "Medium"
topics: ["Graphs - DFS"]
frequency: 3
leetcode:
  id: "reorder-routes-to-make-all-paths-lead-to-the-city-zero"
  url: "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/"
examples:
  - input: 'n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]'
    output: '3'
  - input: 'n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]'
    output: '2'
  - input: 'n = 3, connections = [[1,0],[2,0]]'
    output: '0'
approach: 'DFS from city 0 on an augmented undirected graph – tag each edge as "original" or "reverse." Edges traversed in their original direction (away from 0) need to be flipped.'
time: 'O(n) – tree has n − 1 edges, each visited once.'
space: 'O(n) – adjacency list and visited array.'
---

<ProblemPage>

There are `n` cities numbered `0` to `n - 1` and `n - 1` directed roads forming a tree. Reorder the minimum number of roads so that every city can reach city `0`. Return the minimum number of edges that need to be reversed.

</ProblemPage>
