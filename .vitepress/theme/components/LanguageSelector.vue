<script setup lang="ts">
import { computed } from "vue";
import { useLanguage, type Language } from "../composables/useLanguage";

import tsIcon from "../assets/icons/devicon-typescript.svg";
import pythonIcon from "../assets/icons/devicon-python.svg";
import javaIcon from "../assets/icons/devicon-java.svg";
import goIcon from "../assets/icons/devicon-go.svg";
import cppIcon from "../assets/icons/devicon-cpp.svg";
import rustIcon from "../assets/icons/devicon-rust.svg";
import rubyIcon from "../assets/icons/devicon-ruby.svg";
import csharpIcon from "../assets/icons/devicon-csharp.svg";
import phpIcon from "../assets/icons/devicon-php.svg";

type Props = {
  availableLanguages?: string[];
  currentLanguages?: string[];
  activeLanguage?: string;
};

const props = defineProps<Props>();
const { language, setLanguage } = useLanguage();
const activeLanguage = computed(() => props.activeLanguage || language.value);

const allLanguages: Array<{ key: Language; label: string; icon: string }> = [
  { key: "ts", label: "TypeScript", icon: tsIcon },
  { key: "python", label: "Python", icon: pythonIcon },
  { key: "java", label: "Java", icon: javaIcon },
  { key: "go", label: "Go", icon: goIcon },
  { key: "cpp", label: "C++", icon: cppIcon },
  { key: "rust", label: "Rust", icon: rustIcon },
  { key: "ruby", label: "Ruby", icon: rubyIcon },
  { key: "csharp", label: "C#", icon: csharpIcon },
  { key: "php", label: "PHP", icon: phpIcon },
];

const visibleLanguages = computed(() => {
  if (!props.availableLanguages?.length) return allLanguages;
  const set = new Set(props.availableLanguages);
  return allLanguages.filter((entry) => set.has(entry.key));
});
</script>

<template>
  <div class="lang-selector">
    <button
      v-for="entry in visibleLanguages"
      :key="entry.key"
      class="lang-btn lang-btn--icon"
      :class="{ 'lang-btn--active': activeLanguage === entry.key }"
      :title="entry.label"
      @click="setLanguage(entry.key)"
    >
      <img
        :src="entry.icon"
        :alt="entry.label"
        class="lang-icon"
      >
    </button>
  </div>
</template>
