---
number: 1318
title: "Minimum Flips to Make a OR b Equal to c"
slug: "minimum-flips-to-make-a-or-b-equal-to-c"
difficulty: "Medium"
topics: ["Bit Manipulation"]
frequency: 2
leetcode:
  id: "minimum-flips-to-make-a-or-b-equal-to-c"
  url: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/"
examples:
  - input: 'a = 2, b = 6, c = 5'
    output: '3'
  - input: 'a = 4, b = 2, c = 7'
    output: '1'
  - input: 'a = 1, b = 2, c = 3'
    output: '0'
approach: 'bit-by-bit comparison – inspect each bit position: if `c` bit is 1, ensure at least one of `a`/`b` is 1; if `c` bit is 0, flip every 1 in `a` and `b` at that position.'
time: 'O(max(log a, log b, log c)) – processes up to ~30 bits.'
space: 'O(1) – a few variables.'
---

<ProblemPage>

Given three positive integers `a`, `b`, and `c`, return the minimum number of bit flips required so that `a OR b === c`. A flip changes a single bit from 0 to 1 or 1 to 0 in either `a` or `b`.

</ProblemPage>
