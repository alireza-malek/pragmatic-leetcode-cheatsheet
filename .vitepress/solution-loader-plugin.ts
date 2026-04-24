import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vitepress'
import { createMarkdownRenderer } from 'vitepress'
import matter from 'gray-matter'

const VIRTUAL_ID = 'virtual:solutions'
const RESOLVED_ID = `\0${VIRTUAL_ID}`

const LANG_MAP: Record<string, string> = {
  '.ts': 'ts',
  '.py': 'python',
  '.java': 'java',
  '.go': 'go',
  '.cpp': 'cpp',
  '.rs': 'rust',
  '.rb': 'ruby',
  '.cs': 'csharp',
  '.php': 'php',
}

let mdRenderer: Awaited<ReturnType<typeof createMarkdownRenderer>> | null = null

export function solutionLoaderPlugin(): Plugin {
  const problemsDir = path.resolve(__dirname, '../problems')

  async function getMarkdownRenderer() {
    if (!mdRenderer) {
      const srcDir = path.resolve(__dirname, '..')
      mdRenderer = await createMarkdownRenderer(srcDir, {
        lineNumbers: true,
      })
    }
    return mdRenderer
  }

  async function loadAllSolutions(): Promise<
    Record<string, Record<string, { raw: string; html: string }>>
  > {
    const result: Record<string, Record<string, { raw: string; html: string }>> = {}
    if (!fs.existsSync(problemsDir)) return result

    const md = await getMarkdownRenderer()

    const problemDirs = fs
      .readdirSync(problemsDir)
      .filter((entry) => fs.statSync(path.join(problemsDir, entry)).isDirectory())
      .filter((entry) => fs.existsSync(path.join(problemsDir, entry, 'index.md')))
      .sort()

    for (const dir of problemDirs) {
      const mdPath = path.join(problemsDir, dir, 'index.md')
      const { data } = matter(fs.readFileSync(mdPath, 'utf-8'))
      const number = Number(data.number)
      if (!Number.isFinite(number)) continue
      const solutionDir = path.join(problemsDir, dir, 'solutions')
      if (!fs.existsSync(solutionDir)) continue

      result[number] = {}
      const files = fs.readdirSync(solutionDir).sort()
      for (const file of files) {
        const ext = path.extname(file)
        const lang = LANG_MAP[ext]
        if (!lang) continue

        const raw = fs.readFileSync(path.join(solutionDir, file), 'utf-8')
        const fenced = `\`\`\`${lang}\n${raw}\n\`\`\``
        const html = md.render(fenced)

        result[number][lang] = { raw, html }
      }
    }

    return result
  }

  return {
    name: 'solution-loader',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
      return undefined
    },
    async load(id) {
      if (id === RESOLVED_ID) {
        const solutions = await loadAllSolutions()
        return `export default ${JSON.stringify(solutions)}`
      }
      return undefined
    },
    handleHotUpdate({ file, server }) {
      if (!file.startsWith(problemsDir)) return
      const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
      if (!mod) return
      server.moduleGraph.invalidateModule(mod)
      return [mod]
    },
  }
}
