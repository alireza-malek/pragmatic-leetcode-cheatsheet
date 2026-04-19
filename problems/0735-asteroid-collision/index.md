---
number: 735
title: "Asteroid Collision"
slug: "asteroid-collision"
difficulty: "Medium"
topics: ["Stack"]
frequency: 4
leetcode:
  id: "asteroid-collision"
  url: "https://leetcode.com/problems/asteroid-collision/"
examples:
  - input: 'asteroids = [5,10,-5]'
    output: '[5,10]'
  - input: 'asteroids = [8,-8]'
    output: '[]'
  - input: 'asteroids = [10,2,-5]'
    output: '[10]'
approach: 'stack – push each asteroid; when a left-moving asteroid meets a right-moving one on top, resolve collisions in a loop until the current asteroid is destroyed or no more collisions are possible.'
time: 'O(n) – each asteroid is pushed and popped at most once.'
space: 'O(n) – the stack can hold all asteroids in the worst case.'
---

<ProblemPage>

Given an array `asteroids` of integers, the absolute value represents size and the sign represents direction (positive = moving right, negative = moving left). Asteroids moving the same direction never collide. When two asteroids meet, the smaller one explodes; if both are the same size, both explode. Find the state of the asteroids after all collisions.

</ProblemPage>
