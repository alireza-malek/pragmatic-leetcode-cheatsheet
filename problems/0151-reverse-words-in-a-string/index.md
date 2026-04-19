---
number: 151
title: "Reverse Words in a String"
slug: "reverse-words-in-a-string"
difficulty: "Medium"
topics: ["Array / String"]
frequency: 3
leetcode:
  id: "reverse-words-in-a-string"
  url: "https://leetcode.com/problems/reverse-words-in-a-string/"
examples:
  - input: 's = "the sky is blue"'
    output: '"blue is sky the"'
  - input: 's = " hello world "'
    output: '"world hello"'
  - input: 's = "a good example"'
    output: '"example good a"'
approach: "split + reverse – split the string by spaces, filter out empty words, reverse the array of words, and join them with a single space."
time: "O(n) – one pass to split, one to reverse, one to join."
space: "O(n) – storing the words array."
---

<ProblemPage>

Given an input string `s`, reverse the order of the **words**. A word is a maximal sequence of non-space characters. The returned string should have a single space between words and no leading/trailing spaces.

<template #alternatives>

**Alternative approaches:**

| Approach                   | Idea                                                           | Time | Space                             |
| -------------------------- | -------------------------------------------------------------- | ---- | --------------------------------- |
| In-place reverse (C-style) | Reverse entire char array, then reverse each word individually | O(n) | O(1) (only if mutable char array) |
| Stack                      | Push each word, then pop all                                   | O(n) | O(n)                              |

**Why split + reverse is preferred**:

- Most concise and idiomatic in languages with string utilities.
- Same optimal O(n) time; the in-place approach only matters in languages with mutable strings.

</template>

</ProblemPage>
