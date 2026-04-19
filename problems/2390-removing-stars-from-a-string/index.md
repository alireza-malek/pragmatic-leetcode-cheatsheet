---
number: 2390
title: "Removing Stars From a String"
slug: "removing-stars-from-a-string"
difficulty: "Medium"
topics: ["Stack"]
frequency: 1
leetcode:
  id: "removing-stars-from-a-string"
  url: "https://leetcode.com/problems/removing-stars-from-a-string/"
examples:
  - input: 's = "leet**cod*e"'
    output: '"lecoe"'
  - input: 's = "erase*****"'
    output: '""'
approach: 'stack – iterate through the string; push non-star characters onto the stack, and pop the top on each star.'
time: 'O(n) – single pass plus O(n) join.'
space: 'O(n) – the stack can hold up to n characters.'
---

<ProblemPage>

Given a string `s` containing lowercase letters and stars `*`, in one operation a star removes the closest non-star character to its left as well as itself. Return the string after all stars have been processed. The input is guaranteed to always produce a valid result.

</ProblemPage>
