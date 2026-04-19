---
number: 139
title: "Word Break"
slug: "word-break"
difficulty: "Medium"
topics: ["DP - 1D"]
frequency: 5
leetcode:
  id: "word-break"
  url: "https://leetcode.com/problems/word-break/"
examples:
  - input: 's = "leetcode", wordDict = ["leet","code"]'
    output: "true"
  - input: 's = "applepenapple", wordDict = ["apple","pen"]'
    output: "true"
  - input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]'
    output: "false"
approach: "bottom-up DP – `dp[i]` is true if `s[0..i)` is segmentable. For each position, try every dictionary word as the potential last segment."
time: "O(n · m · k) – n positions, m words, k average word length for `slice` comparison."
space: "O(n) – the DP array."
---

<ProblemPage>

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words. The same word may be reused multiple times.

<template #alternatives>

**Alternative approaches:**

| Approach                 | Idea                                                                                                    | Time                                | Space                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------- |
| Trie + DP                | Build a trie from the dictionary; at each DP position, walk the trie forward to find all matching words | O(n · L) where L is max word length | O(n + total chars in dict) |
| BFS/DFS with memoization | Treat each valid split point as a graph node, BFS/DFS from index 0 to n                                 | O(n · m · k)                        | O(n)                       |

**Why the basic DP approach is preferred**: simple, iterative, and easy to reason about. The Trie approach is better when the dictionary is very large.

</template>

</ProblemPage>
