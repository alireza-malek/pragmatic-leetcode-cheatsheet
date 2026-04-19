---
number: 155
title: "Min Stack"
slug: "min-stack"
difficulty: "Medium"
topics: ["Stack"]
frequency: 5
leetcode:
  id: "min-stack"
  url: "https://leetcode.com/problems/min-stack/"
examples:
  - input: "Operations"
    output: "Output"
  - input: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()"
    output: "[null,null,null,-3,null,0,-2]"
approach: "two stacks – the main stack stores all values; the min-stack mirrors it, storing the minimum value at each depth."
time: "O(1) – every operation is constant time."
space: "O(n) – the min-stack doubles the space."
---

<ProblemPage>

Design a stack that supports `push`, `pop`, `top`, and retrieving the minimum element, all in **O(1)** time.

- `push(val)` – pushes the element onto the stack.
- `pop()` – removes the element on top of the stack.
- `top()` – gets the top element.
- `getMin()` – retrieves the minimum element in the stack.

<template #alternatives>

**Alternative approaches:**

| Approach                 | Idea                                                                                                   | Time | Space                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------- |
| Single stack with tuples | Store `[val, currentMin]` pairs in one stack                                                           | O(1) | O(n) (same asymptotic, but one array)       |
| Min-stack with lazy push | Only push onto min-stack when `val ≤ currentMin`, pop from min-stack only when popped value equals min | O(1) | O(n) worst case, but often less in practice |

**Why the two-stack method is preferred**: It is the most straightforward to implement and reason about, with no edge-case pitfalls compared to the lazy-push variant.

</template>

</ProblemPage>
