import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function generateProblemRewrites() {
  const problemsDir = path.resolve(__dirname, '../problems')
  if (!fs.existsSync(problemsDir)) return {}

  const rewrites: Record<string, string> = {}
  const problemDirs = fs
    .readdirSync(problemsDir)
    .filter((entry) => fs.statSync(path.join(problemsDir, entry)).isDirectory())
    .sort()

  for (const dir of problemDirs) {
    const mdPath = path.join(problemsDir, dir, 'index.md')
    if (!fs.existsSync(mdPath)) continue

    const raw = fs.readFileSync(mdPath, 'utf-8')
    const { data } = matter(raw)
    const slug =
      typeof data.slug === 'string' && data.slug ? data.slug : dir.replace(/^\d+-/, '')
    if (!slug) continue

    rewrites[`problems/${dir}/index.md`] = `problems/${slug}/index.md`
  }

  return rewrites
}
