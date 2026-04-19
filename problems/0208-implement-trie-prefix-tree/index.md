---
number: 208
title: "Implement Trie (Prefix Tree)"
slug: "implement-trie-prefix-tree"
difficulty: "Medium"
topics: ["Trie"]
frequency: 5
leetcode:
  id: "implement-trie-prefix-tree"
  url: "https://leetcode.com/problems/implement-trie-prefix-tree/"
examples:
  - input: 'Operations'
    output: 'Output'
  - input: 'insert("apple"), search("apple"), search("app"), startsWith("app"), insert("app"), search("app")'
    output: '[null, true, false, true, null, true]'
approach: 'trie with hash-map children – each node stores a `Map<char, TrieNode>` and an `isEnd` flag. `search` requires `isEnd` at the final node; `startsWith` does not.'
time: 'O(L) per operation – where L is the length of the word/prefix.'
space: 'O(T) total – where T is the total number of characters across all inserted words.'
---

<ProblemPage>

Implement a trie with `insert`, `search`, and `startsWith` methods.

- `insert(word)` – inserts the string `word` into the trie.
- `search(word)` – returns `true` if the exact string `word` is in the trie.
- `startsWith(prefix)` – returns `true` if any previously inserted string has the prefix `prefix`.

</ProblemPage>
