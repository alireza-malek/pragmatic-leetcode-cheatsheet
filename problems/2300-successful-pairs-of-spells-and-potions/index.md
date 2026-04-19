---
number: 2300
title: "Successful Pairs of Spells and Potions"
slug: "successful-pairs-of-spells-and-potions"
difficulty: "Medium"
topics: ["Binary Search"]
frequency: 2
leetcode:
  id: "successful-pairs-of-spells-and-potions"
  url: "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/"
examples:
  - input: 'spells = [5,1,3], potions = [1,2,3,4,5], success = 7'
    output: '[4,0,3]'
  - input: 'spells = [3,1,2], potions = [8,5,8], success = 16'
    output: '[2,0,2]'
approach: 'sort + binary search – sort potions once, then for each spell binary-search for the smallest potion that meets the threshold.'
time: 'O(m log m + n log m) – sorting potions is O(m log m); each of n spells does O(log m) search.'
space: 'O(1) extra – sorting is in-place; output array is required.'
---

<ProblemPage>

Given arrays `spells` and `potions`, and an integer `success`, a pair `(i, j)` is successful if `spells[i] * potions[j] >= success`. Return an array where each element is the number of successful pairs for that spell.

</ProblemPage>
