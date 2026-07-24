# Graph Report - .  (2026-07-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 53 nodes · 50 edges · 15 communities (6 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `29a33da0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- package.json
- App.jsx
- globals
- eslint
- @eslint/js
- devDependencies
- eslint-plugin-react-refresh
- opencode.json
- @types/react
- @types/react-dom
- vite
- @vitejs/plugin-react

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `@tailwindcss/vite` - 2 edges
3. `lucide-react` - 2 edges
4. `react` - 2 edges
5. `react-dom` - 2 edges
6. `react-icons` - 2 edges
7. `tailwindcss` - 2 edges
8. `@eslint/js` - 2 edges
9. `@types/react` - 2 edges
10. `@types/react-dom` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (15 total, 9 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.15
Nodes (13): lucide-react, dependencies, lucide-react, react, react-dom, react-icons, tailwindcss, @tailwindcss/vite (+5 more)

### Community 1 - "package.json"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 2 - "App.jsx"
Cohesion: 0.38
Nodes (3): AnimateIn(), App(), useInView()

### Community 6 - "devDependencies"
Cohesion: 0.67
Nodes (3): eslint-plugin-react-hooks, devDependencies, eslint-plugin-react-hooks

## Knowledge Gaps
- **24 isolated node(s):** `$schema`, `name`, `private`, `version`, `type` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`, `globals`, `eslint`, `@eslint/js`, `eslint-plugin-react-refresh`, `@types/react`, `@types/react-dom`, `vite`, `@vitejs/plugin-react`?**
  _High betweenness centrality (0.421) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.308) - this node is a cross-community bridge._
- **What connects `$schema`, `name`, `private` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._