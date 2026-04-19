---
number: 42
title: "Trapping Rain Water"
slug: "trapping-rain-water"
difficulty: "Hard"
topics: ["Array / String"]
frequency: 5
leetcode:
  id: "trapping-rain-water"
  url: "https://leetcode.com/problems/trapping-rain-water/"
examples:
  - input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]"
    output: "6"
  - input: "height = [4,2,0,3,2,5]"
    output: "9"
approach: "two-pointer – maintain `leftMax`/`rightMax` while converging pointers inward; always process the side with the smaller max, since that max is the bottleneck for water at that position."
time: "O(n) – single pass with two converging pointers."
space: "O(1) – only a few tracking variables."
---

<ProblemPage>

Given `n` non-negative integers representing an elevation map where each bar has width 1, compute how much water it can trap after raining.

<template #alternatives>

**Alternative approaches:**

| Approach          | Idea                                                                                                  | Time | Space |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ---- | ----- |
| Prefix-max arrays | Pre-compute `leftMax[i]` and `rightMax[i]`, then `water += min(leftMax[i], rightMax[i]) - height[i]`. | O(n) | O(n)  |
| Monotonic stack   | Maintain a decreasing stack; on a taller bar, pop and compute bounded water.                          | O(n) | O(n)  |

**Why two-pointer is preferred**:

- Same O(n) time as prefix-max arrays but uses O(1) space instead of O(n).
- Conceptually simpler than the monotonic-stack approach once the invariant ("process the lower side") is understood.

</template>

</ProblemPage>
