---
number: 841
title: "Keys and Rooms"
slug: "keys-and-rooms"
difficulty: "Medium"
topics: ["Graphs - DFS"]
frequency: 2
leetcode:
  id: "keys-and-rooms"
  url: "https://leetcode.com/problems/keys-and-rooms/"
examples:
  - input: 'rooms = [[1],[2],[3],[]]'
    output: 'true'
  - input: 'rooms = [[1,3],[3,0,1],[2],[0]]'
    output: 'false'
approach: 'iterative DFS – start from room 0, use a stack to explore reachable rooms, track visited rooms in a Set.'
time: 'O(n + e) – where n is number of rooms and e is total number of keys.'
space: 'O(n) – visited set and stack.'
---

<ProblemPage>

There are `n` rooms labeled `0` to `n - 1`. All rooms are locked except room `0`. Each room may contain keys to other rooms. Given `rooms` where `rooms[i]` is the set of keys in room `i`, return `true` if you can visit all rooms.

</ProblemPage>
