export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export type Example = {
  input: string
  output: string
}

export type ProblemMeta = {
  number: number
  title: string
  slug: string
  difficulty: Difficulty
  topics: string[]
  frequency: number
  leetcode: { id: number | null; url: string }
  examples: Example[]
  approach: string
  time: string
  space: string
  link: string
}
