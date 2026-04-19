---
number: 1137
title: "N-th Tribonacci Number"
slug: "n-th-tribonacci-number"
difficulty: "Easy"
topics: ["DP - 1D"]
frequency: 1
leetcode:
  id: "n-th-tribonacci-number"
  url: "https://leetcode.com/problems/n-th-tribonacci-number/"
examples:
  - input: 'n = 4'
    output: '4'
  - input: 'n = 25'
    output: '1389537'
  - input: 'n = 0'
    output: '0'
approach: 'iterative with three variables – roll forward, keeping only the last three values.'
time: 'O(n) – single loop from 3 to n.'
space: 'O(1) – three numeric variables.'
---

<ProblemPage>

The Tribonacci sequence: T₀ = 0, T₁ = 1, T₂ = 1, and Tₙ = Tₙ₋₁ + Tₙ₋₂ + Tₙ₋₃ for n >= 3. Given `n`, return Tₙ.

</ProblemPage>
