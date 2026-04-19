---
number: 399
title: "Evaluate Division"
slug: "evaluate-division"
difficulty: "Medium"
topics: ["Graphs - DFS"]
frequency: 4
leetcode:
  id: "evaluate-division"
  url: "https://leetcode.com/problems/evaluate-division/"
examples:
  - input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
    output: "[6.0, 0.5, -1.0, 1.0, -1.0]"
approach: "weighted graph DFS – build a graph where `a → b` has weight `a/b`. To evaluate `c/d`, DFS from `c` to `d` multiplying edge weights along the path."
time: "O(Q · (V + E)) – for Q queries, each DFS visits up to V + E nodes/edges."
space: "O(V + E) – adjacency list storage."
---

<ProblemPage>

You are given equations like `a / b = k` and queries `[c, d]`. Return the answer for each query, or `-1.0` if the answer cannot be determined. Variables that appear in equations are connected via multiplication/division.

<template #alternatives>

**Alternative approaches:**

| Approach                | Idea                                                          | Time                  | Space    |
| ----------------------- | ------------------------------------------------------------- | --------------------- | -------- |
| BFS                     | Same graph, BFS instead of DFS for each query                 | O(Q · (V + E))        | O(V + E) |
| Union-Find with weights | Track ratio to root for each variable; query = ratio division | O((V + E) · α(V) + Q) | O(V)     |

**Why DFS is preferred**: most intuitive approach for graph path-finding with weight multiplication; Union-Find is faster for many queries but trickier to implement correctly with weights.

</template>

</ProblemPage>
