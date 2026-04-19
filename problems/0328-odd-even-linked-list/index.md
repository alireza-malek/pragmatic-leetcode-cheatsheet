---
number: 328
title: "Odd Even Linked List"
slug: "odd-even-linked-list"
difficulty: "Medium"
topics: ["Linked List"]
frequency: 3
leetcode:
  id: "odd-even-linked-list"
  url: "https://leetcode.com/problems/odd-even-linked-list/"
examples:
  - input: '[1,2,3,4,5]'
    output: '[1,3,5,2,4]'
  - input: '[2,1,3,5,6,4,7]'
    output: '[2,3,6,7,1,5,4]'
approach: 'two-pointer relink – maintain an odd pointer and an even pointer; on each iteration advance both by relinking their `.next`. Finally, attach the even sub-list after the odd sub-list.'
time: 'O(n) – single pass through the list.'
space: 'O(1) – only a few pointer variables.'
---

<ProblemPage>

Given the `head` of a singly linked list, group all nodes at **odd** indices together followed by all nodes at **even** indices (1-indexed). The relative order inside each group must stay the same. Must use **O(1)** extra space and **O(n)** time.

</ProblemPage>
