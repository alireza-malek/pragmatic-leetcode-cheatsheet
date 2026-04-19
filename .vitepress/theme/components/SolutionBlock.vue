<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import allSolutions from "virtual:solutions";
import { useLanguage } from "../composables/useLanguage";
import Playground from "./Playground.vue";
import LanguageSelector from "./LanguageSelector.vue";

const props = defineProps<{
  problemNumber: string;
  approach?: string;
  time?: string;
  space?: string;
}>();

const { language } = useLanguage();
const open = ref(false);
const solutionHeaderEl = ref<HTMLElement | null>(null);
const openStateKey = computed(() => `solution-open:${props.problemNumber}`);

const problemSolutions = computed(
  () => allSolutions[props.problemNumber] || {},
);
const availableLanguages = computed(() => Object.keys(problemSolutions.value));

const displayLanguage = computed(() => {
  if (problemSolutions.value[language.value]) return language.value;
  return availableLanguages.value[0] || "ts";
});

const solution = computed(
  () => problemSolutions.value[displayLanguage.value] || { raw: "", html: "" },
);

function toggleOpen() {
  open.value = !open.value;

  if (open.value) {
    scrollHeaderIntoView();
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function getNavOffset(): number {
  const styles = window.getComputedStyle(document.documentElement);
  const navHeight = Number.parseFloat(
    styles.getPropertyValue("--vp-nav-height"),
  );
  if (Number.isNaN(navHeight)) return 0;
  return navHeight;
}

async function scrollHeaderIntoView() {
  await nextTick();
  const header = solutionHeaderEl.value;
  if (!header) return;

  const top =
    window.scrollY + header.getBoundingClientRect().top - getNavOffset() - 80;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function isTypingTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

function onGlobalKeydown(event: KeyboardEvent) {
  if (!(event.key === " " || event.code === "Space")) return;
  if (event.defaultPrevented) return;
  if (isTypingTarget(event.target)) return;
  event.preventDefault();
  toggleOpen();
}

onMounted(() => {
  try {
    const saved = window.sessionStorage.getItem(openStateKey.value);
    if (saved !== null) open.value = saved === "1";
  } catch {
    // Ignore storage access issues and keep default state.
  }
  window.addEventListener("keydown", onGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onGlobalKeydown);
});

watch(
  open,
  (value) => {
    try {
      window.sessionStorage.setItem(openStateKey.value, value ? "1" : "0");
    } catch {
      // Ignore storage access issues and proceed without persistence.
    }
  },
  { flush: "post" },
);
</script>

<template>
  <section
    v-if="availableLanguages.length"
    class="collapsible"
    :class="{ 'collapsible--open': open }"
  >
    <div
      ref="solutionHeaderEl"
      class="solution-header solution-header--button"
      role="button"
      tabindex="0"
      :aria-expanded="open"
      @click="toggleOpen"
    >
      <div class="collapsible__title">
        <strong>Solution</strong>
        <span
          class="problem-shortcut shortcut-hint"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            class="shortcut-hint__icon"
            focusable="false"
            aria-hidden="true"
          >
            <rect
              x="2.5"
              y="5"
              width="19"
              height="14"
              rx="3.2"
              ry="3.2"
            />
            <line
              x1="8"
              y1="13.5"
              x2="16"
              y2="13.5"
            />
          </svg>
          Space
        </span>
      </div>
      <div
        class="solution-header__langs"
        @click.stop
      >
        <LanguageSelector
          :available-languages="availableLanguages"
          :active-language="displayLanguage"
        />
      </div>
      <span
        class="drawer-chevron"
        aria-hidden="true"
      />
    </div>

    <Transition name="drawer">
      <div
        v-show="open"
        class="collapsible__content"
      >
        <div class="solution-code">
          <div class="solution-code__actions">
            <Playground
              :code="solution.raw"
              :language="displayLanguage"
              compact
            />
          </div>
          <div
            v-html="solution.html"
          />
        </div>

        <div
          v-if="props.approach || props.time || props.space"
          class="solution-meta"
        >
          <p v-if="props.approach">
            <strong>Approach:</strong> {{ props.approach }}
          </p>
          <p v-if="props.time">
            <strong>Time:</strong> {{ props.time }}
          </p>
          <p v-if="props.space">
            <strong>Space:</strong> {{ props.space }}
          </p>
        </div>

        <div
          v-if="$slots.alternatives"
          class="solution-alts"
        >
          <div class="vp-doc">
            <slot name="alternatives" />
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
