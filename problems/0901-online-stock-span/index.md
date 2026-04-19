---
number: 901
title: "Online Stock Span"
slug: "online-stock-span"
difficulty: "Medium"
topics: ["Monotonic Stack"]
frequency: 4
leetcode:
  id: "online-stock-span"
  url: "https://leetcode.com/problems/online-stock-span/"
examples:
  - input: 'Operations'
    output: 'Output'
  - input: 'next(100), next(80), next(60), next(70), next(60), next(75), next(85)'
    output: '[1, 1, 1, 2, 1, 4, 6]'
approach: 'monotonic decreasing stack of `[price, span]` pairs – on each `next(price)`, pop all entries with price ≤ current, accumulating their spans. Push the new entry with the total span.'
time: 'O(1) amortized per call – each entry is pushed and popped at most once across all calls.'
space: 'O(n) – stack stores up to n entries across all calls.'
---

<ProblemPage>

Design a class `StockSpanner` that collects daily price quotes and returns the **span** of that day's stock price. The span is the maximum number of consecutive days (starting from today going backward) where the price was less than or equal to today's price.

</ProblemPage>
