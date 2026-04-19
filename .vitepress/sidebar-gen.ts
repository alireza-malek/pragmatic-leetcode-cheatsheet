import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { TOPIC_ORDER } from './topic-order'

type SidebarItem = { text: string; link: string; number: number }

export function generateSidebar() {
  const problemsDir = path.resolve(__dirname, '../problems')
  if (!fs.existsSync(problemsDir)) return []

  const problemDirs = fs
    .readdirSync(problemsDir)
    .filter((entry) => /-.+$/.test(entry))
    .filter((entry) => fs.statSync(path.join(problemsDir, entry)).isDirectory())
    .sort()

  const grouped: Record<string, SidebarItem[]> = {}

  for (const dir of problemDirs) {
    const mdPath = path.join(problemsDir, dir, 'index.md')
    if (!fs.existsSync(mdPath)) continue

    const raw = fs.readFileSync(mdPath, 'utf-8')
    const { data } = matter(raw)
    const primaryTopic = Array.isArray(data.topics) ? data.topics[0] : 'Other'

    if (!grouped[primaryTopic]) grouped[primaryTopic] = []

    grouped[primaryTopic].push({
      text: `${data.number}. ${data.title}`,
      link: `/problems/${dir}/`,
      number: Number(data.number),
    })
  }

  for (const topic of Object.keys(grouped)) {
    grouped[topic].sort((a, b) => a.number - b.number)
  }

  const known = TOPIC_ORDER.filter((topic) => grouped[topic]?.length).map((topic) => ({
    text: topic,
    collapsed: true,
    items: grouped[topic].map(({ text, link }) => ({ text, link })),
  }))

  const unknownTopics = Object.keys(grouped)
    .filter((topic) => !TOPIC_ORDER.includes(topic))
    .sort()
    .map((topic) => ({
      text: topic,
      collapsed: true,
      items: grouped[topic].map(({ text, link }) => ({ text, link })),
    }))

  return [...known, ...unknownTopics]
}
