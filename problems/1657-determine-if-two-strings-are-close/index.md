---
number: 1657
title: "Determine if Two Strings Are Close"
slug: "determine-if-two-strings-are-close"
difficulty: "Medium"
topics: ["Hash Map / Set"]
frequency: 2
leetcode:
  id: "determine-if-two-strings-are-close"
  url: "https://leetcode.com/problems/determine-if-two-strings-are-close/"
examples:
  - input: 'word1 = "abc", word2 = "bca"'
    output: 'true'
  - input: 'word1 = "a", word2 = "aa"'
    output: 'false'
  - input: 'word1 = "cabbba", word2 = "abbccc"'
    output: 'true'
approach: 'frequency analysis – two strings are close iff they share the same character set **and** the same multiset of character frequencies (sorted frequency arrays must match).'
time: 'O(n + k log k) where k = 26 (alphabet size) – one pass for frequencies, sorting a fixed-size array.'
space: 'O(k) = O(1) – two arrays of size 26.'
---

<ProblemPage>

Two strings are considered _close_ if you can attain one from the other using these operations any number of times: (1) swap any two existing characters, (2) transform every occurrence of one existing character into another existing character, and simultaneously do the reverse. Return `true` if `word1` and `word2` are close, or `false` otherwise.

</ProblemPage>
