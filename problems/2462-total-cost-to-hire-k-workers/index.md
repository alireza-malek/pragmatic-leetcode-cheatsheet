---
number: 2462
title: "Total Cost to Hire K Workers"
slug: "total-cost-to-hire-k-workers"
difficulty: "Medium"
topics: ["Heap / Priority Queue"]
frequency: 3
leetcode:
  id: "total-cost-to-hire-k-workers"
  url: "https://leetcode.com/problems/total-cost-to-hire-k-workers/"
examples:
  - input: 'costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4'
    output: '11'
  - input: 'costs = [1,2,4,1], k = 3, candidates = 3'
    output: '4'
approach: 'two min-heaps – maintain a left heap (first `candidates` workers) and a right heap (last `candidates` workers). Each round, pick the cheaper top, then refill from the middle.'
time: 'O((k + candidates) · log candidates) with a proper heap.'
space: 'O(candidates) – both heaps combined.'
---

<ProblemPage>

You are given a 0-indexed integer array `costs` where `costs[i]` is the cost of hiring the `i`-th worker. You are also given two integers `k` and `candidates`. In each hiring round, choose the worker with the lowest cost from either the first `candidates` workers or the last `candidates` workers (remove them from the pool). Hire exactly `k` workers. Return the total cost.

</ProblemPage>
