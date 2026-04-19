import { defineConfig } from 'vitepress'
import { generateSidebar } from './sidebar-gen'
import { solutionLoaderPlugin } from './solution-loader-plugin'

export default defineConfig({
  title: 'Pragmatic LeetCode Cheat-Sheet',
  description: 'High-Yield LeetCode Problems - Patterns & Solutions',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3e63dd' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Problems', link: '/#problems' },
      { text: 'About', link: '/about' },
    ],
    sidebar: generateSidebar(),
    search: { provider: 'local' },
    docFooter: {
      prev: false,
      next: false,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alireza-malek/pragmatic-leetcode-cheatsheet' },
    ],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2026-present",
		},
  },
  vite: {
    plugins: [solutionLoaderPlugin()],
  },
  markdown: {
    lineNumbers: true,
  },
})
