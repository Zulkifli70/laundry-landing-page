# Graph Report - C:\Users\ADMIN\Documents\landing-page\laundry-landing-page  (2026-07-23)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 51 nodes · 47 edges · 21 communities (7 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8a295e4e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- scripts
- opencode.json
- devDependencies
- react-dom
- App.jsx
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- dependencies
- react
- react-icons
- tailwindcss
- @tailwindcss/vite
- @types/react
- @types/react-dom
- vite
- @vitejs/plugin-react

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `plugin` - 2 edges
3. `@tailwindcss/vite` - 2 edges
4. `lucide-react` - 2 edges
5. `react` - 2 edges
6. `react-dom` - 2 edges
7. `react-icons` - 2 edges
8. `tailwindcss` - 2 edges
9. `@eslint/js` - 2 edges
10. `@types/react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (21 total, 14 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 1 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 2 - "opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, ecc-universal

### Community 3 - "devDependencies"
Cohesion: 0.67
Nodes (3): @eslint/js, devDependencies, @eslint/js

### Community 10 - "dependencies"
Cohesion: 0.67
Nodes (3): lucide-react, dependencies, lucide-react

## Knowledge Gaps
- **25 isolated node(s):** `$schema`, `ecc-universal`, `name`, `private`, `version` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`, `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`, `@types/react`, `@types/react-dom`, `vite`, `@vitejs/plugin-react`?**
  _High betweenness centrality (0.456) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`, `react-dom`, `react`, `react-icons`, `tailwindcss`, `@tailwindcss/vite`?**
  _High betweenness centrality (0.333) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **What connects `$schema`, `ecc-universal`, `name` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._