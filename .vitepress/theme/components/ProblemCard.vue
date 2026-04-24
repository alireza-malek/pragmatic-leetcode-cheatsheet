<script setup lang="ts">
import { withBase } from "vitepress";
import type { ProblemMeta } from "../../types";

defineProps<{ problem: ProblemMeta }>();

function problemHref(link: string) {
  return withBase(link);
}
</script>

<template>
  <a
    class="problem-card"
    :href="problemHref(problem.link)"
  >
    <span>{{ problem.number }}</span>
    <span>{{ problem.title }}</span>
    <span
      class="difficulty-badge"
      :class="`difficulty-badge--${problem.difficulty.toLowerCase()}`"
    >{{ problem.difficulty }}</span>
  </a>
</template>
