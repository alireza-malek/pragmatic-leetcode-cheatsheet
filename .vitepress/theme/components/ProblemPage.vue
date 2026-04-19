<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import type { ProblemMeta } from "../../types";
import allSolutions from "virtual:solutions";
import ProblemHeader from "./ProblemHeader.vue";
import SolutionBlock from "./SolutionBlock.vue";
import ProblemNav from "./ProblemNav.vue";

const { frontmatter } = useData();
const problem = computed(() => frontmatter.value as unknown as ProblemMeta);
const paddedNumber = computed(() => String(problem.value.number));
const problemSolutions = computed(() => allSolutions[paddedNumber.value] || {});
const languagesWithSolutions = computed(() =>
  Object.keys(problemSolutions.value),
);
const hasSolutions = computed(() => languagesWithSolutions.value.length > 0);
</script>

<template>
  <article>
    <ProblemHeader :problem="problem" />
    <div class="problem-description">
      <slot />
    </div>
    <table
      v-if="problem.examples?.length"
      class="examples-table"
    >
      <thead>
        <tr>
          <th>Input</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(example, idx) in problem.examples"
          :key="idx"
        >
          <td>
            <code>{{ example.input }}</code>
          </td>
          <td>
            <code>{{ example.output }}</code>
          </td>
        </tr>
      </tbody>
    </table>
    <SolutionBlock
      v-if="hasSolutions"
      :problem-number="paddedNumber"
      :approach="problem.approach"
      :time="problem.time"
      :space="problem.space"
    >
      <template #alternatives>
        <slot name="alternatives" />
      </template>
    </SolutionBlock>
    <ProblemNav :current="problem.number" />
  </article>
</template>
