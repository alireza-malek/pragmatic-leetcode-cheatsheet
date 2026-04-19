---
number: 714
title: "Best Time to Buy and Sell Stock with Transaction Fee"
slug: "best-time-to-buy-and-sell-stock-with-transaction-fee"
difficulty: "Medium"
topics: ["DP - Multidimensional"]
frequency: 3
leetcode:
  id: "best-time-to-buy-and-sell-stock-with-transaction-fee"
  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
examples:
  - input: "prices = [1,3,2,8,4,9], fee = 2"
    output: "8"
  - input: "prices = [1,3,7,5,10,3], fee = 3"
    output: "6"
approach: "state-machine DP – two states (`cash` and `hold`) transition each day. Selling adds `price - fee` to profit; buying subtracts `price`."
time: "O(n) – single pass through prices."
space: "O(1) – two variables."
---

<ProblemPage>

Given an array `prices` where `prices[i]` is the stock price on day `i`, and an integer `fee` for each transaction (buy + sell = one transaction), find the maximum profit. You may complete as many transactions as you like, but you must sell before buying again.

<template #alternatives>

**Alternative approaches:**

| Approach    | Idea                                                              | Time | Space |
| ----------- | ----------------------------------------------------------------- | ---- | ----- |
| 2D DP table | `dp[i][0]` (no stock) and `dp[i][1]` (holding stock) for each day | O(n) | O(n)  |

**Why the state-machine approach is preferred**: same recurrence, but O(1) space by recognizing each day depends only on the previous day's states.

</template>

</ProblemPage>
