---
number: 1071
title: "Greatest Common Divisor of Strings"
slug: "greatest-common-divisor-of-strings"
difficulty: "Easy"
topics: ["Array / String"]
frequency: 3
leetcode:
  id: "greatest-common-divisor-of-strings"
  url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/"
examples:
  - input: 'str1 = "ABCABC", str2 = "ABC"'
    output: '"ABC"'
  - input: 'str1 = "ABABAB", str2 = "ABAB"'
    output: '"AB"'
  - input: 'str1 = "LEET", str2 = "CODE"'
    output: '""'
approach: "concatenation check + numeric GCD – verify if str1 + str2 equals str2 + str1, then return the prefix of length gcd(str1.length, str2.length)."
time: "O(n + m) – string concatenation/comparison dominates; GCD is O(log(min(n, m)))."
space: "O(n + m) – for the concatenated strings used in the equality check."
---

<ProblemPage>

Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`. A string `t` divides `s` if `s` can be formed by concatenating one or more copies of `t`.

<template #alternatives>

**Alternative approaches:**

| Approach                  | Idea                                                                      | Time                   | Space        |
| ------------------------- | ------------------------------------------------------------------------- | ---------------------- | ------------ |
| Brute-force divisor check | Try all prefixes of decreasing length, check if each divides both strings | O((n + m) · min(n, m)) | O(min(n, m)) |

**Why the concatenation + GCD method is preferred**:

- It avoids repeatedly building and checking candidate strings.
- The concatenation equality is a clean necessary-and-sufficient condition, making the logic both optimal and easy to reason about.

</template>

</ProblemPage>
