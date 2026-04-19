import { computed, ref, watch } from 'vue'
import type { Difficulty, ProblemMeta } from '../../types'

const activeDifficulties = ref<Set<Difficulty>>(new Set())
const activeTopics = ref<Set<string>>(new Set())
const minFrequency = ref(1)
const search = ref('')
const sortBy = ref<'number' | 'frequency' | 'difficulty'>('number')
const sortOrder = ref<'asc' | 'desc'>('asc')
let initialized = false

function normalize(text: string) {
  return text.trim().toLowerCase()
}

function parseQuery() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const difficulties = params.get('d')
  const topics = params.get('t')
  const frequency = Number(params.get('f') || '1')
  const query = params.get('q') || ''
  const sort = params.get('s') || 'number'
  const order = params.get('o') || 'asc'

  activeDifficulties.value = new Set(
    (difficulties || '')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
      .map((value) => `${value[0]?.toUpperCase() || ''}${value.slice(1).toLowerCase()}` as Difficulty),
  )

  activeTopics.value = new Set(
    (topics || '')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean),
  )

  minFrequency.value = Number.isFinite(frequency) ? Math.max(1, Math.min(5, frequency)) : 1
  search.value = query

  if (sort === 'number' || sort === 'frequency' || sort === 'difficulty') {
    sortBy.value = sort
  }
  sortOrder.value = order === 'desc' ? 'desc' : 'asc'
}

function writeQuery() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams()

  if (activeDifficulties.value.size) {
    params.set(
      'd',
      [...activeDifficulties.value]
        .map((value) => value.toLowerCase())
        .sort()
        .join(','),
    )
  }

  if (activeTopics.value.size) {
    params.set(
      't',
      [...activeTopics.value]
        .map((value) => value.toLowerCase())
        .sort()
        .join(','),
    )
  }

  if (minFrequency.value > 1) params.set('f', String(minFrequency.value))
  if (search.value.trim()) params.set('q', search.value.trim())
  if (sortBy.value !== 'number') params.set('s', sortBy.value)
  if (sortOrder.value !== 'asc') params.set('o', sortOrder.value)

  const query = params.toString()
  const target = query ? `${window.location.pathname}?${query}${window.location.hash}` : `${window.location.pathname}${window.location.hash}`
  window.history.replaceState({}, '', target)
}

export function useFilters(problems: () => ProblemMeta[]) {
  if (!initialized) {
    parseQuery()
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', parseQuery)
    }
    watch([activeDifficulties, activeTopics, minFrequency, search, sortBy, sortOrder], writeQuery, { deep: true })
    initialized = true
  }

  const filteredProblems = computed(() => {
    const query = normalize(search.value)
    return problems().filter((problem) => {
      const difficultyMatch =
        activeDifficulties.value.size === 0 || activeDifficulties.value.has(problem.difficulty)
      const topicMatch =
        activeTopics.value.size === 0 ||
        [...activeTopics.value].every((topic) =>
          problem.topics.map((value) => value.toLowerCase()).includes(topic.toLowerCase()),
        )
      const frequencyMatch = (problem.frequency || 1) >= minFrequency.value
      const searchMatch = query.length === 0 || problem.title.toLowerCase().includes(query)
      return difficultyMatch && topicMatch && frequencyMatch && searchMatch
    })
  })

  function toggleDifficulty(value: Difficulty) {
    if (activeDifficulties.value.has(value)) activeDifficulties.value.delete(value)
    else activeDifficulties.value.add(value)
    activeDifficulties.value = new Set(activeDifficulties.value)
  }

  function toggleTopic(value: string) {
    if (activeTopics.value.has(value)) activeTopics.value.delete(value)
    else activeTopics.value.add(value)
    activeTopics.value = new Set(activeTopics.value)
  }

  function setMinFrequency(value: number) {
    minFrequency.value = Math.max(1, Math.min(5, value))
  }

  function setSearch(value: string) {
    search.value = value
  }

  function setSortBy(value: 'number' | 'frequency' | 'difficulty') {
    if (sortBy.value === value) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortBy.value = value
      sortOrder.value = 'asc'
    }
  }

  function resetFilters() {
    activeDifficulties.value = new Set()
    activeTopics.value = new Set()
    minFrequency.value = 1
    search.value = ''
    sortBy.value = 'number'
    sortOrder.value = 'asc'
  }

  return {
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
  }
}
