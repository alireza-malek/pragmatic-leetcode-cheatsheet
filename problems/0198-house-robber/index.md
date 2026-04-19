---
number: 198
title: "House Robber"
slug: "house-robber"
difficulty: "Medium"
topics: ["DP - 1D"]
frequency: 5
leetcode:
  id: "house-robber"
  url: "https://leetcode.com/problems/house-robber/"
examples:
  - input: 'nums = [1,2,3,1]'
    output: '4'
  - input: 'nums = [2,7,9,3,1]'
    output: '12'
approach: 'bottom-up DP – at each house, choose max of (skip this house = `prev1`) or (rob this house = `prev2 + nums[i]`). Two variables suffice since each state depends only on the previous two.'
time: 'O(n) – single pass.'
space: 'O(1) – two rolling variables.'
---

<ProblemPage>

Given an array `nums` representing the amount of money in each house, you cannot rob two adjacent houses. Return the maximum amount you can rob.

</ProblemPage>
