---
number: 2336
title: "Smallest Number in Infinite Set"
slug: "smallest-number-in-infinite-set"
difficulty: "Medium"
topics: ["Heap / Priority Queue"]
frequency: 2
leetcode:
  id: "smallest-number-in-infinite-set"
  url: "https://leetcode.com/problems/smallest-number-in-infinite-set/"
examples:
  - input: "Operations"
    output: "Output"
  - input: "popSmallest(), popSmallest(), popSmallest(), addBack(1), popSmallest(), popSmallest(), popSmallest()"
    output: "[1, 2, 3, 1, 4, 5, 6]"
approach: 'threshold + set – track the smallest "natural" number that hasn''t been popped (`threshold`). Numbers added back below the threshold go into a Set. `popSmallest` checks the Set first, then falls back to the threshold.'
time: "O(n) for `popSmallest` when the added-back set is non-empty (due to `Math.min`); O(1) for `addBack`. Can be improved to O(log n) with a min-heap or sorted set."
space: "O(n) – for the added-back set."
---

<ProblemPage>

You have a set containing all positive integers `[1, 2, 3, …]`. Implement the `SmallestInfiniteSet` class:

- `popSmallest()` – removes and returns the smallest integer in the set.
- `addBack(num)` – adds `num` back into the set if it is not already present.

<template #alternatives>

**Alternative approaches:**

| Approach               | Idea                                                                          | Time (pop / add)    | Space |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------- | ----- |
| Min-heap for addedBack | Replace the plain `Set` with a min-heap so extracting the minimum is O(log n) | O(log n) / O(log n) | O(n)  |

**Why the Set approach is shown**: TypeScript lacks a built-in min-heap, so the Set version keeps the code self-contained. In an interview, mention the heap optimization to demonstrate awareness of the O(n) → O(log n) improvement.

</template>

</ProblemPage>
