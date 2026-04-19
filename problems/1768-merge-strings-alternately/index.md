---
number: 1768
title: "Merge Strings Alternately"
slug: "merge-strings-alternately"
difficulty: "Easy"
topics: ["Array / String"]
frequency: 2
leetcode:
  id: "merge-strings-alternately"
  url: "https://leetcode.com/problems/merge-strings-alternately/"
examples:
  - input: 'word1 = "abc", word2 = "pqr"'
    output: '"apbqcr"'
  - input: 'word1 = "ab", word2 = "pqrs"'
    output: '"apbqrs"'
  - input: 'word1 = "abcd", word2 = "pq"'
    output: '"apbqcd"'
approach: 'single-pass interleave – use a single pointer to iterate through both strings simultaneously and append characters alternately.'
time: 'O(n + m) – where n and m are the lengths of `word1` and `word2`.'
space: 'O(n + m) – for the result array (unavoidable since strings are immutable).'
---

<ProblemPage>

Given two strings `word1` and `word2`, merge them by adding letters in alternating order, starting with `word1`. If one string is longer than the other, append the remaining letters at the end.

</ProblemPage>
