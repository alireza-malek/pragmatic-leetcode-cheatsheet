<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useProblems } from "../composables/useProblems";
import { useFilters } from "../composables/useFilters";
import TagFilter from "./TagFilter.vue";

const { problems } = useProblems();
const {
  filteredProblems,
  toggleDifficulty,
  toggleTopic,
  setMinFrequency,
  setSearch,
  setSortBy,
  resetFilters,
  activeDifficulties,
  activeTopics,
  minFrequency,
  search,
  sortBy,
  sortOrder,
} = useFilters(() => problems.value);

const pageSize = 25;
const currentPage = ref(1);

const difficultyRank: Record<string, number> = {
  Hard: 3,
  Medium: 2,
  Easy: 1,
};

const sortedProblems = computed(() => {
  const list = [...filteredProblems.value];
  const dir = sortOrder.value === "asc" ? 1 : -1;

  if (sortBy.value === "frequency") {
    list.sort(
      (a, b) =>
        dir * ((a.frequency || 0) - (b.frequency || 0)) || a.number - b.number,
    );
    return list;
  }
  if (sortBy.value === "difficulty") {
    list.sort(
      (a, b) =>
        dir *
          ((difficultyRank[a.difficulty] || 0) -
            (difficultyRank[b.difficulty] || 0)) || a.number - b.number,
    );
    return list;
  }
  list.sort((a, b) => dir * (a.number - b.number));
  return list;
});

const totalPages = computed(() =>
  Math.max(1, Math.ceil(sortedProblems.value.length / pageSize)),
);

const paginatedProblems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return sortedProblems.value.slice(start, start + pageSize);
});

watch([filteredProblems, sortBy, sortOrder], () => {
  if (currentPage.value > totalPages.value) currentPage.value = 1;
});

function goToPage(page: number) {
  currentPage.value = Math.max(1, Math.min(totalPages.value, page));
}

function frequencyDots(value: number) {
  const normalized = Math.max(0, Math.min(5, value || 0));
  return Array.from({ length: 5 }, (_, idx) => idx < normalized);
}
</script>

<template>
  <section id="problems">
    <div class="problem-list-top">
      <TagFilter
        :problems="problems"
        :active-difficulties="activeDifficulties"
        :active-topics="activeTopics"
        :min-frequency="minFrequency"
        :search="search"
        :sort-by="sortBy"
        :sort-order="sortOrder"
        @toggle-difficulty="toggleDifficulty"
        @toggle-topic="toggleTopic"
        @set-min-frequency="setMinFrequency"
        @set-search="setSearch"
        @set-sort="setSortBy"
        @reset="resetFilters"
      />
    </div>

    <TransitionGroup
      name="list"
      tag="div"
      class="problem-list"
    >
      <a
        v-for="problem in paginatedProblems"
        :key="problem.number"
        class="problem-card"
        :href="problem.link"
      >
        <span class="problem-card__number">{{ problem.number }}</span>
        <span class="problem-card__main">
          <span class="problem-card__title">{{ problem.title }}</span>
          <span
            class="frequency-dots frequency-dots--compact"
            aria-label="frequency"
            title="Frequency"
          >
            <span
              v-for="(filled, idx) in frequencyDots(problem.frequency)"
              :key="`${problem.number}-freq-${idx}`"
              class="frequency-dot"
              :class="{ 'frequency-dot--filled': filled }"
            />
          </span>
        </span>
        <span
          class="difficulty-badge"
          :class="`difficulty-badge--${problem.difficulty.toLowerCase()}`"
        >
          <span class="difficulty-full">{{ problem.difficulty }}</span>
          <span class="difficulty-short">{{ problem.difficulty[0] }}</span>
        </span>
        <span class="problem-card__topics">
          <span
            v-for="(topic, idx) in problem.topics.slice(0, 2)"
            :key="`${problem.number}-${idx}`"
            class="topic-tag"
          >
            {{ topic }}
          </span>
          <span
            v-if="problem.topics.length > 2"
            class="topic-tag"
          >+{{ problem.topics.length - 2 }}</span>
        </span>
      </a>
    </TransitionGroup>

    <div
      v-if="totalPages > 1"
      class="pagination"
    >
      <button
        class="lang-btn"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        Prev
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        class="lang-btn"
        :class="{ 'lang-btn--active': page === currentPage }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        class="lang-btn"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </section>
</template>
