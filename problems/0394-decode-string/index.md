---
number: 394
title: "Decode String"
slug: "decode-string"
difficulty: "Medium"
topics: ["Stack"]
frequency: 4
leetcode:
  id: "decode-string"
  url: "https://leetcode.com/problems/decode-string/"
examples:
  - input: 's = "3[a]2[bc]"'
    output: '"aaabcbc"'
  - input: 's = "3[a2[c]]"'
    output: '"accaccacc"'
  - input: 's = "2[abc]3[cd]ef"'
    output: '"abcabccdcdcdef"'
approach: "two-stack – one stack for repeat counts, one for partially built strings. On `[`, push current state and reset. On `]`, pop and combine."
time: "O(n · maxK) – where n is the length of the decoded output and maxK is the maximum nesting repeat factor."
space: "O(n) – for the stacks and intermediate strings."
---

<ProblemPage>

Given an encoded string of the form `k[encoded_string]`, return its decoded string. The rule is: the `encoded_string` inside the square brackets is repeated exactly `k` times. Nesting is allowed (e.g. `3[a2[c]]` → `"accaccacc"`). Input is always valid: no extra spaces, brackets are well-formed, and `k` is a positive integer.

<template #alternatives>

**Alternative approaches:**

| Approach     | Idea                                                                                             | Time        | Space             |
| ------------ | ------------------------------------------------------------------------------------------------ | ----------- | ----------------- |
| Recursion    | Treat each `k[...]` as a recursive call; use an index pointer to track position                  | O(n · maxK) | O(n) (call stack) |
| Single stack | Push everything onto one stack; on `]`, pop until `[` to build the substring, then pop the count | O(n · maxK) | O(n)              |

**Why the two-stack method is preferred**: It avoids recursion overhead and is more explicit about state management than the single-stack variant, making the logic easier to follow.

</template>

</ProblemPage>
