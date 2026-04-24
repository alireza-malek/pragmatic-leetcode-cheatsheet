import { createContentLoader } from 'vitepress'
import type { ProblemMeta } from '../types'

export default createContentLoader('problems/*/index.md', {
  transform(rawData) {
    return rawData.map(({ frontmatter, url }) => ({
      ...frontmatter,
      link: frontmatter.slug ? `/problems/${frontmatter.slug}/` : url,
    })) as ProblemMeta[]
  },
})

declare const data: ProblemMeta[]
export { data }
