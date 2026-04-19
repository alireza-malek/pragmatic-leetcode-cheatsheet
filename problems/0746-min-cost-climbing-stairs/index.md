---
number: 746
title: "Min Cost Climbing Stairs"
slug: "min-cost-climbing-stairs"
difficulty: "Easy"
topics: ["DP - 1D"]
frequency: 3
leetcode:
  id: "min-cost-climbing-stairs"
  url: "https://leetcode.com/problems/min-cost-climbing-stairs/"
examples:
  - input: 'cost = [10,15,20]'
    output: '15'
  - input: 'cost = [1,100,1,1,1,100,1,1,100,1]'
    output: '6'
approach: 'bottom-up DP with O(1) space – `dp[i]` = min cost to reach step `i`. Since we only look back 2 steps, two variables suffice.'
time: 'O(n) – single pass.'
space: 'O(1) – two rolling variables.'
---

<ProblemPage>

Given an integer array `cost` where `cost[i]` is the cost of step `i`, you can start from step `0` or `1`. Each time, climb 1 or 2 steps. Return the minimum cost to reach the top (one step past the last index).

</ProblemPage>
