---
number: 3
title: "Longest Substring Without Repeating Characters"
slug: "longest-substring-without-repeating-characters"
difficulty: "Medium"
topics: ["Array / String"]
frequency: 5
leetcode:
  id: "longest-substring-without-repeating-characters"
  url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
examples:
  - input: 's = "abcabcbb"'
    output: '3 (substring "abc")'
  - input: 's = "bbbbb"'
    output: '1 (substring "b")'
  - input: 's = "pwwkew"'
    output: '3 (substring "wke")'
approach: "sliding window with hash-map – maintain a window of unique characters, expanding the right pointer and shrinking the left pointer when duplicates are found."
time: "O(n) – single pass; each character is visited once by `right`."
space: "O(min(n, m)) – where m is the character-set size (e.g. 128 for ASCII)."
---

<ProblemPage>

Given a string `s`, find the length of the longest substring without repeating characters.

<template #alternatives>

**Alternative approaches:**

| Approach                | Idea                                                              | Time                                                   | Space        |
| ----------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ | ------------ |
| Sliding window with Set | Expand right, shrink left (removing chars from Set) on duplicate. | O(n) worst-case (each char added/removed at most once) | O(min(n, m)) |
| Brute force             | Check every substring for uniqueness.                             | O(n³)                                                  | O(min(n, m)) |

**Why the Map approach is preferred**:

- When a duplicate is found, the left pointer jumps directly to the correct position instead of incrementing one-by-one, making the logic cleaner and consistently O(n).

</template>

</ProblemPage>
