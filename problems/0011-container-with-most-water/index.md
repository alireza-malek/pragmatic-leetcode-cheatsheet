---
number: 11
title: "Container With Most Water"
slug: "container-with-most-water"
difficulty: "Medium"
topics: ["Two Pointers"]
frequency: 5
leetcode:
  id: "container-with-most-water"
  url: "https://leetcode.com/problems/container-with-most-water/"
examples:
  - input: "height = [1,8,6,2,5,4,8,3,7]"
    output: "49"
  - input: "height = [1,1]"
    output: "1"
  - input: "height = [4,3,2,1,4]"
    output: "16"
approach: "two pointers (greedy) – maintain left and right pointers, moving the pointer with the smaller height inward to maximize the area."
time: "O(n) – each pointer moves at most n steps total."
space: "O(1) – only a few variables."
---

<ProblemPage>

Given an integer array `height` of length `n`, where each element represents the height of a vertical line drawn at index `i`, find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water the container can store. The container may not be slanted.

<template #alternatives>

**Alternative approaches:**

| Approach    | Idea                                            | Time  | Space |
| ----------- | ----------------------------------------------- | ----- | ----- |
| Brute force | Try every pair `(i, j)` and track the max area. | O(n²) | O(1)  |

**Why the two-pointer method is preferred**:

- Reduces O(n²) brute force to O(n) by exploiting the insight that moving the shorter line inward is the only move that can improve the result; the wider container with a shorter line can never beat the current best once that shorter line is the bottleneck.

</template>

</ProblemPage>
