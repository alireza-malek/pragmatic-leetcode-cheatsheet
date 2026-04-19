---
number: 739
title: "Daily Temperatures"
slug: "daily-temperatures"
difficulty: "Medium"
topics: ["Monotonic Stack"]
frequency: 5
leetcode:
  id: "daily-temperatures"
  url: "https://leetcode.com/problems/daily-temperatures/"
examples:
  - input: 'temperatures = [73,74,75,71,69,72,76,73]'
    output: '[1,1,4,2,1,1,0,0]'
  - input: 'temperatures = [30,40,50,60]'
    output: '[1,1,1,0]'
  - input: 'temperatures = [30,60,90]'
    output: '[1,1,0]'
approach: 'monotonic decreasing stack – maintain a stack of indices with decreasing temperatures. When a warmer day arrives, pop and record the distance for each colder day.'
time: 'O(n) – each index is pushed and popped at most once.'
space: 'O(n) – the stack can hold all indices.'
---

<ProblemPage>

Given an array `temperatures`, return an array `answer` where `answer[i]` is the number of days you have to wait after day `i` to get a warmer temperature. If there is no future warmer day, `answer[i] = 0`.

</ProblemPage>
