---
number: 1926
title: "Nearest Exit from Entrance in Maze"
slug: "nearest-exit-from-entrance-in-maze"
difficulty: "Medium"
topics: ["Graphs - BFS"]
frequency: 3
leetcode:
  id: "nearest-exit-from-entrance-in-maze"
  url: "https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/"
examples:
  - input: 'maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]'
    output: '1'
  - input: 'maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]'
    output: '2'
  - input: 'maze = [[".","+"]'
    output: '-1'
approach: 'BFS from entrance – standard shortest-path BFS on a grid; the first border cell reached (other than the entrance) is the nearest exit.'
time: 'O(m · n) – each cell visited at most once.'
space: 'O(m · n) – queue can hold all cells in the worst case.'
---

<ProblemPage>

Given an `m × n` matrix `maze` with empty cells `'.'` and walls `'+'`, and an `entrance` position `[row, col]`, return the number of steps in the shortest path from the entrance to the nearest exit. An exit is any empty cell on the **border** of the maze (not the entrance itself). Return `-1` if no path exists.

</ProblemPage>
