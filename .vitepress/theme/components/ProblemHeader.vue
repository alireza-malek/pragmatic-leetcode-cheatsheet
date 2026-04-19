<script setup lang="ts">
import type { ProblemMeta } from "../../types";
import leetcodeIcon from "../assets/icons/devicon-leetcode.svg";

defineProps<{
  problem: ProblemMeta;
}>();

function frequencyDots(value: number) {
  const normalized = Math.max(0, Math.min(5, value || 0));
  return Array.from({ length: 5 }, (_, idx) => idx < normalized);
}
</script>

<template>
  <header class="problem-header">
    <div class="problem-header__title-row">
      <h1>#{{ problem.number }} - {{ problem.title }}</h1>
    </div>
    <div class="problem-header__meta-row">
      <span
        class="difficulty-badge"
        :class="`difficulty-badge--${problem.difficulty.toLowerCase()}`"
      >
        {{ problem.difficulty }}
      </span>
      <span
        v-for="topic in problem.topics"
        :key="topic"
        class="topic-tag"
      >{{
        topic
      }}</span>
      <div
        class="frequency-dots"
        aria-label="frequency"
      >
        <span
          v-for="(filled, idx) in frequencyDots(problem.frequency)"
          :key="idx"
          class="frequency-dot"
          :class="{ 'frequency-dot--filled': filled }"
        />
      </div>
      <a
        v-if="problem.leetcode?.url"
        class="leetcode-link"
        :href="problem.leetcode.url"
        target="_blank"
        rel="noreferrer"
        title="Open on LeetCode"
      >
        <img
          :src="leetcodeIcon"
          alt="Open on LeetCode"
          width="22"
          height="22"
        >
      </a>
    </div>
  </header>
</template>
