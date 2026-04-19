import { computed } from 'vue'
import { data as problemsData } from '../../data/problems.data'
import type { ProblemMeta } from '../../types'
import { TOPIC_ORDER } from '../../topic-order'

export function useProblems() {
  const problems = computed(() => [...problemsData].sort((a, b) => a.number - b.number))
  const problemsInSidebarOrder = computed(() => {
    const topicRank = new Map(TOPIC_ORDER.map((topic, index) => [topic, index]))
    return [...problemsData].sort((left, right) => {
      const leftTopic = left.topics[0] ?? 'Other'
      const rightTopic = right.topics[0] ?? 'Other'
      const leftRank = topicRank.get(leftTopic as typeof TOPIC_ORDER[0]) ?? Number.MAX_SAFE_INTEGER
      const rightRank = topicRank.get(rightTopic as typeof TOPIC_ORDER[0]) ?? Number.MAX_SAFE_INTEGER

      if (leftRank !== rightRank) return leftRank - rightRank
      return left.number - right.number
    })
  })

  function getProblem(number: number) {
    return problems.value.find((problem) => problem.number === number)
  }

  function getSidebarNeighbors(number: number) {
    const ordered = problemsInSidebarOrder.value
    const currentIndex = ordered.findIndex((problem) => problem.number === number)
    if (currentIndex === -1) return { prev: null, next: null }

    const prev = currentIndex > 0 ? ordered[currentIndex - 1] : null
    const next = currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null
    return { prev, next }
  }

  function getNextProblem(number: number) {
    return getSidebarNeighbors(number).next
  }

  function getPrevProblem(number: number) {
    return getSidebarNeighbors(number).prev
  }

  function getByTopic(topic: string) {
    return problems.value.filter((problem) => problem.topics.includes(topic))
  }

  return { problems, getProblem, getNextProblem, getPrevProblem, getByTopic }
}

export type { ProblemMeta }
