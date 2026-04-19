---
number: 1456
title: "Maximum Number of Vowels in a Substring of Given Length"
slug: "maximum-number-of-vowels-in-a-substring-of-given-length"
difficulty: "Medium"
topics: ["Sliding Window"]
frequency: 2
leetcode:
  id: "maximum-number-of-vowels-in-a-substring-of-given-length"
  url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/"
examples:
  - input: 's = "abciiidef", k = 3'
    output: '3'
  - input: 's = "aeiou", k = 2'
    output: '2'
  - input: 's = "leetcode", k = 3'
    output: '2'
approach: 'fixed-size sliding window – maintain a window of size k, updating the count of vowels by adding the new element and subtracting the old element as the window slides.'
time: 'O(n) – single pass after the initial window; `Set.has` is O(1) for a 5-element set.'
space: 'O(1) – the vowel set is constant-size (5 elements), plus a few counters.'
---

<ProblemPage>

Given a string `s` and an integer `k`, return the maximum number of vowel letters (`a`, `e`, `i`, `o`, `u`) in any substring of `s` with length `k`.

</ProblemPage>
