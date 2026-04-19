# Pragmatic LeetCode Cheat-Sheet

A curated collection of high-yield LeetCode problems covering the most common technical interview patterns. Built as a static site with [VitePress](https://vitepress.dev), each problem includes a concise breakdown, solutions with inline comments, complexity analysis, and alternative approaches.

Designed for fast interview prep — focus on recognizing patterns, applying optimal approaches, and understanding trade-offs.

## Features

- **Pattern-grouped problems** — organized by core algorithmic topics (arrays, trees, graphs, DP, etc.) to build intuition over memorization.
- **Multi-language solutions** — consistent implementations across **TypeScript**, **Python**, **Java**, **Go**, **C++**, **Ruby**, **C#**, **PHP**, with inline comments explaining critical steps.
- **Complexity analysis** — approach, time, and space breakdowns for the primary solution.
- **Alternative approaches** — when relevant, a brief table comparing other methods and explaining why the primary solution is preferred (e.g., better time complexity, simpler implementation, or more interview-friendly).
- **Local search** — full-text search across all problems.
- **Filtering** — filter by difficulty, topic tags, and language.

## Quick Start

```bash
# clone
git clone https://github.com/alireza-malek/pragmatic-leetcode-cheatsheet.git
cd pragmatic-leetcode-cheatsheet

# install dependencies
pnpm install

# run locally
pnpm dev
```

The dev server starts at `http://localhost:5173`.

## Project Structure

```
.
├── .vitepress/             # VitePress configuration, theme, and custom Vue components
│   ├── theme/
│   ├── components/
│   └── composables/
├── problems/               # 📂 The core problem database
│   ├── 0001-two-sum/       # Each problem gets its own directory
│   │   ├── index.md        # Front-matter file for problem metadata
│   │   └── solutions/      # Implementation files separated by language
│   │       ├── solution.ts
│   │       └── solution.py
│   └── ...
└── index.md
```

## Adding a Problem

> We follow a strict **Solution Philosophy** for adding new content: always provide the most common, consistent optimal solution across multiple languages, with brief inline comments. If important alternatives exist, include a brief table explaining the trade-offs and why the primary method is preferred.

1. Create a folder under `problems/` following the naming convention: `<number>-<slug>/`.
2. Add an `index.md` with frontmatter (title, difficulty, topic, LeetCode url, etc.), the problem writeup, and alternative approaches (If important alternatives exist).
3. Add solution files under `solutions/`. Ensure the logic, variable naming, and inline comments are consistent across languages.
4. The sidebar and problem list update automatically on build.

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `pnpm dev`      | Start local dev server |
| `pnpm build`    | Production build       |
| `pnpm lint`     | Run ESLint             |
| `pnpm lint:fix` | Auto-fix lint issues   |

## Deployment

The site auto-deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml` on push.

## Tech Stack

VitePress · Vue 3 · TypeScript · pnpm
