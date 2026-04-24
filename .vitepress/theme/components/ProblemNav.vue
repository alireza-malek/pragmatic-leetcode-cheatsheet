<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { useRouter, withBase } from "vitepress";
import { useProblems } from "../composables/useProblems";

const props = defineProps<{ current: number }>();
const { getNextProblem, getPrevProblem } = useProblems();
const router = useRouter();

const prev = computed(() => getPrevProblem(props.current));
const next = computed(() => getNextProblem(props.current));

function navigate(link: string) {
  router.go(withBase(link));
}

function navigateSection(link?: string) {
  if (!link) return;
  navigate(link);
}

function problemHref(link: string) {
  return withBase(link);
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "ArrowLeft" && prev.value) navigate(prev.value.link);
  if (event.key === "ArrowRight" && next.value) navigate(next.value.link);
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <nav
    class="problem-nav"
    aria-label="Problem navigation"
  >
    <div
      class="problem-nav__section"
      :class="{ 'problem-nav__section--clickable': !!prev }"
      :tabindex="prev ? 0 : -1"
      :role="prev ? 'link' : undefined"
      @click="navigateSection(prev?.link)"
      @keydown.enter.prevent="navigateSection(prev?.link)"
      @keydown.space.prevent="navigateSection(prev?.link)"
    >
      <a
        v-if="prev"
        :href="problemHref(prev.link)"
        class="problem-nav__link"
      >
        <span
          class="problem-shortcut shortcut-hint__icon"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <line
              x1="19"
              y1="12"
              x2="5"
              y2="12"
            />
            <polyline points="10 7 5 12 10 17" />
          </svg>
        </span>
        <span class="problem-nav__label">#{{ prev.number }} {{ prev.title }}</span>
      </a>
      <span
        v-else
        class="problem-nav__empty"
      >No previous problem</span>
    </div>
    <div
      class="problem-nav__separator"
      aria-hidden="true"
    />
    <div
      class="problem-nav__section"
      :class="{ 'problem-nav__section--clickable': !!next }"
      :tabindex="next ? 0 : -1"
      :role="next ? 'link' : undefined"
      @click="navigateSection(next?.link)"
      @keydown.enter.prevent="navigateSection(next?.link)"
      @keydown.space.prevent="navigateSection(next?.link)"
    >
      <a
        v-if="next"
        :href="problemHref(next.link)"
        class="problem-nav__link"
      >
        <span class="problem-nav__label">#{{ next.number }} {{ next.title }}</span>
        <span
          class="problem-shortcut shortcut-hint__icon"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            />
            <polyline points="14 7 19 12 14 17" />
          </svg>
        </span>
      </a>
      <span
        v-else
        class="problem-nav__empty"
      >No next problem</span>
    </div>
  </nav>
</template>
