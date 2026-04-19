---
number: 443
title: "String Compression"
slug: "string-compression"
difficulty: "Medium"
topics: ["Array / String"]
frequency: 3
leetcode:
  id: "string-compression"
  url: "https://leetcode.com/problems/string-compression/"
examples:
  - input: 'chars = ["a","a","b","b","c","c","c"]'
    output: '6 | ["a","2","b","2","c","3"]'
  - input: 'chars = ["a"]'
    output: '1 | ["a"]'
  - input: 'chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]'
    output: '4 | ["a","b","1","2"]'
approach: 'read/write two-pointer with run-length encoding – use a read pointer to count consecutive characters and a write pointer to update the array in-place.'
time: 'O(n) – each character is read exactly once.'
space: 'O(1) – compression is done in-place; only a few variables used.'
---

<ProblemPage>

Given an array of characters `chars`, compress it **in-place** using the following algorithm: for each group of consecutive repeating characters, append the character followed by the group's length (if length > 1). Return the new length of the array after compression. You must use only O(1) extra space.

</ProblemPage>
