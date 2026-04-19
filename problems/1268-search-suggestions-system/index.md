---
number: 1268
title: "Search Suggestions System"
slug: "search-suggestions-system"
difficulty: "Medium"
topics: ["Trie"]
frequency: 4
leetcode:
  id: "search-suggestions-system"
  url: "https://leetcode.com/problems/search-suggestions-system/"
examples:
  - input: 'products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"'
    output: '[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]'
approach: "sort + two-pointer narrowing – sort products lexicographically, then for each typed character narrow the `[lo, hi]` window to products matching the growing prefix. Take the first 3 from the window."
time: "O(m log m + n) – sorting m products; `lo` only increases and `hi` only decreases across all n characters, so total narrowing is O(m), dominated by the sort."
space: "O(1) extra – besides the output and sort."
---

<ProblemPage>

Given an array of products and a `searchWord`, after each character of `searchWord` is typed, return a list of at most 3 product suggestions that have the typed prefix. Suggestions should be lexicographically sorted.

<template #alternatives>

**Alternative approaches:**

| Approach | Idea                                                                                                         | Time                               | Space |
| -------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ----- |
| Trie     | Build a trie from products, then for each prefix walk the trie and DFS-collect up to 3 lexicographic results | O(T + n · 3) where T = total chars | O(T)  |

**Why the sort + two-pointer approach is preferred**: simpler to implement, no extra trie structure, and the two-pointer narrowing is very efficient on sorted data.

</template>

</ProblemPage>
