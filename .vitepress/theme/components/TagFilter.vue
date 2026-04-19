<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { Difficulty, ProblemMeta } from "../../types";

const props = defineProps<{
  problems: ProblemMeta[];
  activeDifficulties: Set<Difficulty>;
  activeTopics: Set<string>;
  minFrequency: number;
  search: string;
  sortBy: "number" | "frequency" | "difficulty";
  sortOrder: "asc" | "desc";
}>();

const emit = defineEmits<{
  (e: "toggleDifficulty", value: Difficulty): void;
  (e: "toggleTopic", value: string): void;
  (e: "setMinFrequency", value: number): void;
  (e: "setSearch", value: string): void;
  (e: "setSort", value: "number" | "frequency" | "difficulty"): void;
  (e: "reset"): void;
}>();

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];
const sortOptions = [
  { value: "number", label: "Number" },
  { value: "frequency", label: "Frequency" },
  { value: "difficulty", label: "Difficulty" },
] as const;

const topics = computed(() =>
  [...new Set(props.problems.flatMap((p) => p.topics))].sort(),
);

const difficultyCounts = computed(() => {
  return difficulties.reduce(
    (acc, d) => {
      acc[d] = props.problems.filter((p) => p.difficulty === d).length;
      return acc;
    },
    {} as Record<Difficulty, number>,
  );
});

const topicCounts = computed(() => {
  return topics.value.reduce(
    (acc, t) => {
      acc[t] = props.problems.filter((p) => p.topics.includes(t)).length;
      return acc;
    },
    {} as Record<string, number>,
  );
});

const openMenu = ref<"difficulty" | "topics" | "sort" | "freq" | null>(null);
const topicQuery = ref("");
const filterRoot = ref<HTMLElement | null>(null);

const filteredTopics = computed(() => {
  const q = topicQuery.value.trim().toLowerCase();
  if (!q) return topics.value;
  return topics.value.filter((t) => t.toLowerCase().includes(q));
});

const selectedDifficultyCount = computed(() => props.activeDifficulties.size);
const selectedTopicCount = computed(() => props.activeTopics.size);

const sortLabel = computed(() => {
  const opt = sortOptions.find((o) => o.value === props.sortBy);
  return opt ? opt.label : "Sort";
});

function toggleMenu(name: "difficulty" | "topics" | "sort" | "freq") {
  openMenu.value = openMenu.value === name ? null : name;
}

function onDocumentClick(event: MouseEvent) {
  if (!filterRoot.value) return;
  if (!filterRoot.value.contains(event.target as Node)) openMenu.value = null;
}

onMounted(() => document.addEventListener("click", onDocumentClick));
onUnmounted(() => document.removeEventListener("click", onDocumentClick));
</script>

<template>
  <section
    ref="filterRoot"
    class="filter-panel"
  >
    <div class="filter-bar">
      <!-- Search -->
      <div class="filter-search">
        <span
          class="filter-search__icon"
          aria-hidden="true"
        >⌕</span>
        <input
          class="filter-search__input"
          type="text"
          placeholder="Search problems..."
          :value="search"
          @input="emit('setSearch', ($event.target as HTMLInputElement).value)"
        >
      </div>

      <!-- Difficulty -->
      <div class="filter-dropdown">
        <button
          class="filter-dropdown__trigger"
          @click="toggleMenu('difficulty')"
        >
          <span>Difficulty</span>
          <strong v-if="selectedDifficultyCount">{{
            selectedDifficultyCount
          }}</strong>
          <span class="sort-chevrons">
            <svg
              class="sort-chevron sort-chevron--up"
              viewBox="0 0 10 6"
            >
              <polyline points="1,5 5,1 9,5" />
            </svg>
            <svg
              class="sort-chevron sort-chevron--down"
              viewBox="0 0 10 6"
            >
              <polyline points="1,1 5,5 9,1" />
            </svg>
          </span>
        </button>
        <div
          v-if="openMenu === 'difficulty'"
          class="filter-dropdown__menu"
        >
          <button
            v-for="d in difficulties"
            :key="d"
            class="filter-option"
            @click="emit('toggleDifficulty', d)"
          >
            <span
              class="filter-option__check"
              :class="{
                'filter-option__check--active': activeDifficulties.has(d),
              }"
            />
            <span>{{ d }}</span>
            <small>{{ difficultyCounts[d] }}</small>
          </button>
        </div>
      </div>

      <!-- Topics -->
      <div class="filter-dropdown">
        <button
          class="filter-dropdown__trigger"
          @click="toggleMenu('topics')"
        >
          <span>Topics</span>
          <strong v-if="selectedTopicCount">{{ selectedTopicCount }}</strong>
          <span class="sort-chevrons">
            <svg
              class="sort-chevron sort-chevron--up"
              viewBox="0 0 10 6"
            >
              <polyline points="1,5 5,1 9,5" />
            </svg>
            <svg
              class="sort-chevron sort-chevron--down"
              viewBox="0 0 10 6"
            >
              <polyline points="1,1 5,5 9,1" />
            </svg>
          </span>
        </button>
        <div
          v-if="openMenu === 'topics'"
          class="filter-dropdown__menu filter-dropdown__menu--wide"
        >
          <input
            v-model="topicQuery"
            class="filter-dropdown__search"
            type="text"
            placeholder="Search topics..."
          >
          <div class="filter-dropdown__list">
            <button
              v-for="topic in filteredTopics"
              :key="topic"
              class="filter-option"
              @click="emit('toggleTopic', topic)"
            >
              <span
                class="filter-option__check"
                :class="{
                  'filter-option__check--active': activeTopics.has(topic),
                }"
              />
              <span>{{ topic }}</span>
              <small>{{ topicCounts[topic] }}</small>
            </button>
          </div>
        </div>
      </div>

      <!-- Frequency -->
      <div class="filter-dropdown">
        <button
          class="filter-dropdown__trigger"
          @click="toggleMenu('freq')"
        >
          <span>Freq {{ minFrequency > 1 ? `${minFrequency}+` : "" }}</span>
          <span class="sort-chevrons">
            <svg
              class="sort-chevron sort-chevron--up"
              viewBox="0 0 10 6"
            >
              <polyline points="1,5 5,1 9,5" />
            </svg>
            <svg
              class="sort-chevron sort-chevron--down"
              viewBox="0 0 10 6"
            >
              <polyline points="1,1 5,5 9,1" />
            </svg>
          </span>
        </button>
        <div
          v-if="openMenu === 'freq'"
          class="filter-dropdown__menu"
        >
          <button
            v-for="v in [1, 2, 3, 4, 5]"
            :key="v"
            class="filter-option"
            :class="{ 'filter-option--active': minFrequency === v }"
            @click="
              emit('setMinFrequency', v);
              openMenu = null;
            "
          >
            <span
              class="filter-option__check"
              :class="{ 'filter-option__check--active': minFrequency === v }"
            />
            <span>{{ v }}+</span>
          </button>
        </div>
      </div>

      <!-- Sort -->
      <div class="filter-dropdown">
        <button
          class="filter-dropdown__trigger"
          @click="toggleMenu('sort')"
        >
          <span>{{ sortLabel }}</span>
          <span class="sort-chevrons">
            <svg
              class="sort-chevron sort-chevron--up"
              :class="{ 'sort-chevron--active': sortOrder === 'asc' }"
              viewBox="0 0 10 6"
            >
              <polyline points="1,5 5,1 9,5" />
            </svg>
            <svg
              class="sort-chevron sort-chevron--down"
              :class="{ 'sort-chevron--active': sortOrder === 'desc' }"
              viewBox="0 0 10 6"
            >
              <polyline points="1,1 5,5 9,1" />
            </svg>
          </span>
        </button>
        <div
          v-if="openMenu === 'sort'"
          class="filter-dropdown__menu"
        >
          <button
            v-for="opt in sortOptions"
            :key="opt.value"
            class="filter-option filter-option--sort"
            @click="emit('setSort', opt.value)"
          >
            <span>{{ opt.label }}</span>
            <span class="sort-chevrons">
              <svg
                class="sort-chevron sort-chevron--up"
                :class="{
                  'sort-chevron--active':
                    sortBy === opt.value && sortOrder === 'asc',
                }"
                viewBox="0 0 10 6"
              >
                <polyline points="1,5 5,1 9,5" />
              </svg>
              <svg
                class="sort-chevron sort-chevron--down"
                :class="{
                  'sort-chevron--active':
                    sortBy === opt.value && sortOrder === 'desc',
                }"
                viewBox="0 0 10 6"
              >
                <polyline points="1,1 5,5 9,1" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Reset -->
      <button
        class="lang-btn filter-reset-btn"
        title="Reset filters"
        @click="emit('reset')"
      >
        <span
          class="filter-reset-icon"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.sort-chevrons {
  display: inline-flex;
  flex-direction: column;
  gap: 1px;
  margin-left: 2px;
}

.sort-chevron {
  width: 10px;
  height: 6px;
  fill: none;
  stroke: var(--vp-c-text-3);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.15s;
}

.sort-chevron--active {
  stroke: var(--vp-c-brand-1);
}

.filter-dropdown__trigger:hover .sort-chevron {
  stroke: var(--vp-c-text-2);
}

.filter-dropdown__trigger:hover .sort-chevron--active {
  stroke: var(--vp-c-brand-1);
}

.filter-option--sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
