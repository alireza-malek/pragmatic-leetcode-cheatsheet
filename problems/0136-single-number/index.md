---
number: 136
title: "Single Number"
slug: "single-number"
difficulty: "Easy"
topics: ["Bit Manipulation"]
frequency: 4
leetcode:
  id: "single-number"
  url: "https://leetcode.com/problems/single-number/"
examples:
  - input: 'nums = [2,2,1]'
    output: '1'
  - input: 'nums = [4,1,2,1,2]'
    output: '4'
  - input: 'nums = [1]'
    output: '1'
approach: 'XOR – `a ^ a = 0` and `a ^ 0 = a`. XOR-ing all elements cancels every pair, leaving the unique element.'
time: 'O(n) – single pass.'
space: 'O(1) – one variable.'
---

<ProblemPage>

Given a non-empty array of integers `nums`, every element appears **twice** except for one. Find the element that appears only once. You must use O(1) extra space.

</ProblemPage>
