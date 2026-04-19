---
number: 933
title: "Number of Recent Calls"
slug: "number-of-recent-calls"
difficulty: "Easy"
topics: ["Queue"]
frequency: 2
leetcode:
  id: "number-of-recent-calls"
  url: "https://leetcode.com/problems/number-of-recent-calls/"
examples:
  - input: 'Operations'
    output: 'Output'
  - input: 'ping(1), ping(100), ping(3001), ping(3002)'
    output: '[1, 2, 3, 3]'
approach: 'queue – enqueue each timestamp; dequeue (advance head pointer) all timestamps older than `t - 3000`. The remaining length is the answer.'
time: 'O(1) amortized per `ping` – each element is enqueued and dequeued at most once.'
space: 'O(n) – where n is the number of pings within any 3000ms window (at most 3001 entries).'
---

<ProblemPage>

Implement a `RecentCounter` class that counts the number of recent requests within a certain time frame.

- `RecentCounter()` – initializes the counter with zero requests.
- `ping(t: number)` – adds a new request at time `t` (strictly increasing) and returns the number of requests that have happened in the inclusive range `[t - 3000, t]`.

</ProblemPage>
