---
number: 76
title: "Minimum Window Substring"
slug: "minimum-window-substring"
difficulty: "Hard"
topics: ["Array / String"]
frequency: 5
leetcode:
  id: "minimum-window-substring"
  url: "https://leetcode.com/problems/minimum-window-substring/"
examples:
  - input: 's = "ADOBECODEBANC", t = "ABC"'
    output: '"BANC"'
  - input: 's = "a", t = "a"'
    output: '"a"'
  - input: 's = "a", t = "aa"'
    output: '""'
approach: 'sliding window with two frequency maps and a "formed" counter – expand the right pointer to include characters, and shrink the left pointer when the window contains all required characters.'
time: "O(|s| + |t|) – each pointer traverses `s` at most once, plus O(|t|) to build the need map."
space: "O(|s| + |t|) – worst-case both maps store every unique character."
---

<ProblemPage>

Given two strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If no such window exists, return `""`.

<template #alternatives>

**Alternative approaches:**

| Approach            | Idea                                                                             | Time                                                       | Space            |
| ------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------- |
| Filtered index list | Pre-filter indices of `s` that appear in `t`, then slide over this shorter list. | O(\|s\| + \|t\|) but faster in practice when \|s\| ≫ \|t\| | O(\|s\| + \|t\|) |
| Brute force         | Check all substrings of `s`, verify each contains all of `t`.                    | O(\|s\|² · \|t\|)                                          | O(\|t\|)         |

**Why the sliding-window approach is preferred**:

- Achieves optimal O(|s| + |t|) time with straightforward logic.
- The `formed` counter avoids scanning the entire frequency map on every step, keeping the inner loop O(1) amortised.

</template>

</ProblemPage>
