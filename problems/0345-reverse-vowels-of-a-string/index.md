---
number: 345
title: "Reverse Vowels of a String"
slug: "reverse-vowels-of-a-string"
difficulty: "Easy"
topics: ["Array / String"]
frequency: 2
leetcode:
  id: "reverse-vowels-of-a-string"
  url: "https://leetcode.com/problems/reverse-vowels-of-a-string/"
examples:
  - input: 's = "hello"'
    output: '"holle"'
  - input: 's = "leetcode"'
    output: '"leotcede"'
approach: 'two-pointer swap – use left and right pointers to find vowels from both ends and swap them until the pointers meet.'
time: 'O(n) – each pointer traverses the string at most once.'
space: 'O(n) – character array copy (required because strings are immutable in JS/TS).'
---

<ProblemPage>

Given a string `s`, reverse **only** the vowels in the string and return it. The vowels are `a`, `e`, `i`, `o`, `u` (both lowercase and uppercase).

</ProblemPage>
