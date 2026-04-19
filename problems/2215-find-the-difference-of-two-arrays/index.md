---
number: 2215
title: "Find the Difference of Two Arrays"
slug: "find-the-difference-of-two-arrays"
difficulty: "Easy"
topics: ["Hash Map / Set"]
frequency: 1
leetcode:
  id: "find-the-difference-of-two-arrays"
  url: "https://leetcode.com/problems/find-the-difference-of-two-arrays/"
examples:
  - input: 'nums1 = [1,2,3], nums2 = [2,4,6]'
    output: '[[1,3],[4,6]]'
  - input: 'nums1 = [1,2,3,3], nums2 = [1,1,2,2]'
    output: '[[3],[]]'
approach: 'hash-set – convert both arrays to sets for O(1) lookups, then filter each set for elements absent from the other.'
time: 'O(n + m) – building the sets is O(n + m); filtering is O(n + m) in total.'
space: 'O(n + m) – storage for both sets and the output arrays.'
---

<ProblemPage>

Given two **0-indexed** integer arrays `nums1` and `nums2`, return a list `answer` of size `2` where:

- `answer[0]` is a list of all **distinct** integers in `nums1` that are **not** in `nums2`.
- `answer[1]` is a list of all **distinct** integers in `nums2` that are **not** in `nums1`.

The integers in each list may be returned in **any order**.

</ProblemPage>
