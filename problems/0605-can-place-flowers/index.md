---
number: 605
title: "Can Place Flowers"
slug: "can-place-flowers"
difficulty: "Easy"
topics: ["Array / String"]
frequency: 2
leetcode:
  id: "can-place-flowers"
  url: "https://leetcode.com/problems/can-place-flowers/"
examples:
  - input: "flowerbed = [1,0,0,0,1], n = 1"
    output: "true"
  - input: "flowerbed = [1,0,0,0,1], n = 2"
    output: "false"
  - input: "flowerbed = [0,0,1,0,0], n = 2"
    output: "true"
approach: "greedy single-pass – iterate through the flowerbed and place a flower whenever the current, previous, and next plots are empty."
time: "O(n) – single traversal of the flowerbed."
space: "O(1) – modifies the array in place (no extra allocation)."
---

<ProblemPage>

Given a flowerbed represented as an integer array `flowerbed` containing `0`s (empty) and `1`s (planted), and an integer `n`, return `true` if `n` new flowers can be planted without violating the **no-adjacent-flowers** rule (no two flowers in neighboring plots).

<template #alternatives>

**Alternative approaches:**

| Approach                | Idea                                                                                   | Time | Space |
| ----------------------- | -------------------------------------------------------------------------------------- | ---- | ----- |
| Count consecutive zeros | Count runs of zeros between 1s; derive plantable spots per run via `⌊(zeros - 1) / 2⌋` | O(n) | O(1)  |

**Why the greedy method is preferred**:

- Simpler to implement and reason about; no edge-case math for boundary runs of zeros.

</template>

</ProblemPage>
