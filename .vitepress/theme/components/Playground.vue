<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  code: string;
  language: string;
  compact?: boolean;
}>();

const targetUrl = computed(() => {
  const encoded = encodeURIComponent(props.code);
  if (props.language === "ts") {
    if (typeof window === "undefined")
      return "https://www.typescriptlang.org/play";
    return `https://www.typescriptlang.org/play?#code/${window.btoa(unescape(encodeURIComponent(props.code)))}`;
  }
  if (props.language === "python") {
    return `https://www.programiz.com/python-programming/online-compiler?code=${encoded}`;
  }
  return `https://onecompiler.com/${props.language}?codeChange=${encoded}`;
});
</script>

<template>
  <div>
    <a
      :class="props.compact ? 'code-tool-btn' : 'lang-btn'"
      :href="targetUrl"
      target="_blank"
      rel="noreferrer"
    >
      Try it
    </a>
  </div>
</template>
