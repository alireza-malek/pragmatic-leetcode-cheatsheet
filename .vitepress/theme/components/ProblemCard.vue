<script setup lang="ts">
import type { ProblemMeta } from "../../types";

defineProps<{ problem: ProblemMeta }>();
</script>

<template>
  <a
    class="problem-card"
    :href="problem.link"
  >
    <span>{{ problem.number }}</span>
    <span>{{ problem.title }}</span>
    <span
      class="difficulty-badge"
      :class="`difficulty-badge--${problem.difficulty.toLowerCase()}`"
    >{{ problem.difficulty }}</span>
  </a>
</template>
